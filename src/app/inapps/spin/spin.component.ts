import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css'],
})
export class SpinComponent implements OnInit {
  doing = false;
  lives = 3;

  constructor() {}

  ngOnInit(): void {}

  doSlot(): any {
    if (this.doing) {
      return null;
    }
    var vidas = document.getElementById('vidas') as HTMLElement;
    this.doing = true;
    var numChanges = this.randomInt(1, 4) * 7;
    var numeberSlot1 = numChanges + this.randomInt(1, 7);
    var numeberSlot2 = numChanges + 2 * 7 + this.randomInt(1, 7);
    var numeberSlot3 = numChanges + 4 * 7 + this.randomInt(1, 7);

    var i1 = 0;
    var i2 = 0;
    var i3 = 0;

    const spin1 = (): any => {
      i1++;
      if (i1 >= numeberSlot1) {
        clearInterval(slot1);
        return null;
      }
      let slotTile = document.getElementById('slot1') as HTMLElement;
      if (slotTile.className == 'a7') {
        slotTile.className = 'a0';
      }
      slotTile.className =
        'a' + (parseInt(slotTile.className.substring(1)) + 1);
    };

    const spin2 = (): any => {
      i2++;
      if (i2 >= numeberSlot2) {
        clearInterval(slot2);
        return null;
      }
      let slotTile = document.getElementById('slot2') as HTMLElement;
      if (slotTile.className == 'a7') {
        slotTile.className = 'a0';
      }
      slotTile.className =
        'a' + (parseInt(slotTile.className.substring(1)) + 1);
    };

    const spin3 = (): any => {
      i3++;
      if (i3 >= numeberSlot3) {
        clearInterval(slot3);
        testWin();
        return null;
      }
      let slotTile = document.getElementById('slot3') as HTMLElement;
      if (slotTile.className == 'a7') {
        slotTile.className = 'a0';
      }

      slotTile.className =
        'a' + (parseInt(slotTile.className.substring(1)) + 1);
    };

    const testWin = () => {
      var slot1_element = document.getElementById('slot1') as HTMLElement;
      let slot1 = slot1_element.className;
      var slot2_element = document.getElementById('slot2') as HTMLElement;
      let slot2 = slot2_element.className;
      var slot3_element = document.getElementById('slot3') as HTMLElement;
      let slot3 = slot3_element.className;

      if (
        ((slot1 == slot2 && slot2 == slot3) ||
          (slot1 == slot2 && slot3 == 'a7') ||
          (slot1 == slot3 && slot2 == 'a7') ||
          (slot2 == slot3 && slot1 == 'a7') ||
          (slot1 == slot2 && slot1 == 'a7') ||
          (slot1 == slot3 && slot1 == 'a7') ||
          (slot2 == slot3 && slot2 == 'a7')) &&
        !(slot1 == slot2 && slot2 == slot3 && slot1 == 'a7')
      ) {
        Swal.fire({
          title: `<h3 style='font-size: 2.2rem !important; font-family: Bright !important; color: #270a45;'>¡Felicidades, ganaste!</h3>`,
          imageUrl: '/assets/img/logo_tada.png',
          width: '21em',
          imageWidth: '12rem',
          imageHeight: '5rem',
          imageAlt: 'Custom image',
          html: `<h3 style='font-size:0.9rem;font-family: Monserrat !important;'>Tu cupón de regalo es: </h2><br><h3 style='font-family: Bright !important;font-size: 2.6rem;color: #270a45;'></h3>`,
          showCloseButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
        });
      } else {
        if (this.lives != 0) {
          this.lives--;
        } else {
          Swal.fire({
            title: `<h3 style='font-size: 2.2rem !important; font-family: Bright !important; color: #270a45;'>Lo sentimos</h3>`,
            imageUrl: '/assets/img/logo_tada.png',
            width: '21em',
            imageWidth: '12rem',
            imageHeight: '5rem',
            imageAlt: 'Custom image',
            html: `<h3 style='font-size:0.9rem;font-family: Monserrat !important;'>Tu cupón de regalo es: </h2><br><h3 style='font-family: Bright !important;font-size: 2.6rem;color: #270a45;'></h3>`,
            showCloseButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
          });
        }
      }
      this.doing = false;
    };

    var slot1 = setInterval(spin1, 50);
    var slot2 = setInterval(spin2, 50);
    var slot3 = setInterval(spin3, 50);
  }

  randomInt(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
