import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

const prizes = [
  {
    message:
      '¡Felicidades! ganaste una visita a la cerveceria nacional con el cupón ',
    code: 'mevoydevisita',
    type: '',
    filename: '',
  },
  {
    message: '¡Felicidades! ganaste $5 gratis en cerveza con el cupón ',
    code: 'dolaresmagicos',
    type: '',
    filename: '',
  },
  {
    message: '¡Felicidades! ganaste 15% gratis en cerveza con el cupón ',
    code: '15magicos',
    type: '',
    filename: '',
  },
  {
    message: '¡Felicidades! ganaste 10% gratis en cerveza con el cupón ',
    code: '10magicos',
    type: '',
    filename: '',
  },
  {
    message: '¡Felicidades! ganaste $3 gratis en cerveza con el cupón ',
    code: 'Dolarmagico',
    type: '',
    filename: '',
  },
  {
    message: 'Lo Sentimos, no ha sido ganador, Siga participando',
    code: '',
    type: '',
    filename: '',
  },
];

@Component({
  selector: 'app-roulette-1',
  templateUrl: './roulette1.component.html',
  styleUrls: ['./roulette1.component.css'],
})
export class RouletteComponent1 implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const wheel = document.querySelector('.wheel_selector') as HTMLElement;
    const startButton = document.querySelector('.start_button') as HTMLElement;

    let deg: number = 0;
    let zoneSize: number = 60;

    const getCoupon = (filename: string) => {
      // Obtener el primer cupon del archivo
      // hacer pop de ese cupon para que el archivo tenga menos datos
      // insertar ese cupon en otro archivo llamado general con esta estrctura
      // {fecha: fecha actual, hora: hora actual, cupon: cupon actual, tipo: tipo de cupon}
    };

    const handleWin = (actualDeg: number) => {
      const winningIndex: number = Math.ceil(actualDeg / zoneSize) - 1;
      const winningPrize = prizes[winningIndex % prizes.length];

      // Configuramos los colores que queremos que tenga el confetti
      const colors = ['#634a99', '#eea81c', '#ffffff'];
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: colors,
      });

      setTimeout(() => {
        if (winningPrize.code != '') {
          Swal.fire({
            background: '#fff url(/assets/img/fondo_popup-min.png)',
            imageUrl: '/assets/img/ganaste-min.png',
            width: '21em',
            imageHeight: '5rem',
            imageAlt: 'Custom image',
            html: `
            <div class="grid">
                  <div>
                    <h3 class="text-white text-md">${winningPrize.message}</h3>
                  </div>
                  <div class="mt-2">
                    <h4 class="text-white text-sm">Tap para copiar el código</h4>
                    <button
                      class="btn btn-lg font-bold text-xl text-secondary btn-primary btn-block uppercase mt-4"
                      id="copy"
                    >
                    ${winningPrize.code ? winningPrize.code : ''}
                    </button>
                  </div>
                </div>
            `,
            showCloseButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
          });

          // Agregar un evento de clic personalizado al elemento con el código del premio
          let element = document.getElementById('copy') as HTMLElement;
          element.addEventListener('click', () => {
            navigator.clipboard
              .writeText(winningPrize.code.toUpperCase())
              .then(() => {
                Swal.update({
                  html: `
                  <div class="grid">
                      <div>
                        <h3 class="text-white text-md">${
                          winningPrize.message
                        }</h3>
                      </div>
                      <div class="mt-2">
                        <h4 class="text-white text-sm">¡Código copiado!</h4>
                        <button
                          class="btn btn-lg font-bold text-xl text-secondary btn-disabled btn-primary btn-block uppercase mt-4"
                          id="copy"
                        >
                        ${winningPrize.code ? winningPrize.code : ''}
                        </button>
                      </div>
                    </div>
                `,
                });
              });
          });
        } else {
          Swal.fire({
            background: '#fff url(/assets/img/fondo_popup-min.png)',
            width: '21em',
            html: `
            <div class="grid">
                  <div>
                    <h3 class="text-white text-md">${winningPrize.message}</h3>
                  </div>
                </div>
            `,
            showCloseButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
          });
        }
      }, 500);
    };

    startButton?.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(3000 + Math.random() * 3000);
      let actualDeg = deg % 360;
      wheel.style.transition = 'all 5s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      wheel.style.transition = 'none';
      let actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      setTimeout(() => {
        handleWin(actualDeg);
      }, 1000);
    });
  }
}
