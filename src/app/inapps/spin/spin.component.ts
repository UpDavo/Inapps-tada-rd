import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css'],
})
export class SpinComponent implements OnInit {
  data: any;
  doors: any;
  spinner: any;
  items = [
    '🍭',
    '❌',
    '⛄️',
    '🦄',
    '🍌',
    '💩',
    '👻',
    '😻',
    '💵',
    '🤡',
    '🦖',
    '🍎',
  ];

  constructor() {}

  ngOnInit(): void {
    // this.data = document.querySelector('.info') as HTMLElement;
    this.doors = document.querySelectorAll('.door');
    this.spinner = document.querySelector('#spinner') as HTMLElement;
    // this.data.textContent = this.items.join(' ');
  }

  async spin() {
    this.init(false, 1, 2);
    for (const door of this.doors) {
      const boxes = door.querySelector('.boxes');
      const duration = parseInt(boxes.style.transitionDuration);
      boxes.style.transform = 'translateY(0)';
      await new Promise((resolve) => setTimeout(resolve, duration * 100));
    }
  }

  startGame() {
    this.init();
  }

  shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }

  init(firstInit = true, groups = 1, duration = 1) {
    for (const door of this.doors) {
      if (firstInit) {
        door.dataset.spinned = '0';
      } // } else if (door.dataset.spinned === '1') {
      //   return;
      // }

      const boxes = door.querySelector('.boxes');
      const boxesClone = boxes.cloneNode(false);

      const pool = ['❓'];
      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...this.items);
        }
        pool.push(...this.shuffle(arr));

        boxesClone.addEventListener(
          'transitionstart',
          function (this: any) {
            door.dataset.spinned = '1';
            this.querySelectorAll('.item_box').forEach((box: any) => {
              box.style.filter = 'blur(1px)';
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          'transitionend',
          function (this: any) {
            this.querySelectorAll('.item_box').forEach(
              (box: any, index: any) => {
                box.style.filter = 'blur(0)';
                if (index > 0) this.removeChild(box);
              }
            );
          },
          { once: true }
        );
      }
      // console.log(pool);

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement('div');
        box.classList.add('item_box');
        box.style.width = door.clientWidth + 'px';
        box.style.height = door.clientHeight + 'px';
        box.style.marginTop = '2.5rem';
        box.style.fontSize = '3rem';
        box.textContent = pool[i];
        boxesClone.appendChild(box);
      }
      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
      }px)`;
      door.replaceChild(boxesClone, boxes);
      // console.log(door);
    }
  }
}
