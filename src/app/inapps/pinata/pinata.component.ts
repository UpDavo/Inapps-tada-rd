import { Component, AfterViewInit } from '@angular/core';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pinata',
  templateUrl: './pinata.component.html',
  styleUrls: ['./pinata.component.css'],
})
export class PinataComponent implements AfterViewInit {
  //scale-100
  pinata: HTMLButtonElement | any;
  div_pinata: HTMLButtonElement | any;
  button: HTMLButtonElement | any;
  colors = ['#ffff82', '#81450e', '#ffb239', '#93682e'];
  mostrarInstrucciones = false;
  contador = 0;
  imagenBotella = 'assets/img/pinata/botella_1.png';
  imgTitulo = 'assets/img/pinata/titulo.png';
  imgInstrucciones = 'assets/img/pinata/instrucciones.png';

  ngAfterViewInit() {
    this.pinata = document.getElementById('pinata') as HTMLButtonElement;
    this.div_pinata = document.getElementById('scale') as HTMLButtonElement;
    this.button = document.getElementById('button') as HTMLElement;
  }

  cambiarImagen() {
    this.contador++;

    if (this.contador <= 3) {
      console.log(this.contador);
      confetti({
        particleCount: 100, // Número de partículas
        spread: 70, // Área en la que se distribuyen las partículas
        origin: { y: 0.6 }, // Posición de inicio
        colors: this.colors, // Colores del confetti
      });
    }

    if (this.contador == 1) {
      this.mostrarInstrucciones = true;
      this.imagenBotella = 'assets/img/pinata/botella_1.png';
    }

    if (this.contador <= 2) {
      switch (this.contador) {
        case 1:
          this.div_pinata.classList.add('scale-150');
          this.pinata.classList.add('expandida');
          break;
        case 2:
          this.pinata.classList.remove('expandida');
          this.imagenBotella = 'assets/img/pinata/botella_2.png';
          this.pinata.classList.add('shake');
          setTimeout(() => {
            this.pinata.classList.remove('shake');
          }, 620);

          break;
      }
    }
    if (this.contador == 3) {
      this.pinata.classList.remove('expandida');
      this.imgTitulo = 'assets/img/pinata/ganaste_titulo.png';
      this.imgInstrucciones = 'assets/img/pinata/ganaste_sub.png';
      this.imagenBotella = 'assets/img/pinata/botella_3.png';
      this.pinata.classList.add('shake-aggressive');
      setTimeout(() => {
        this.pinata.classList.remove('shake-aggressive');
        this.pinata.classList.add('reducida');
        this.div_pinata.classList.remove('scale-150');
        this.div_pinata.classList.add('scale-100');
        this.button.style.display = 'block';
        this.mostrarInstrucciones = false;
      }, 620);
    }
  }

  copyToClipboard() {
    const textToCopy = '5demayo'.toUpperCase();

    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);

    tempElement.select();
    document.execCommand('copy');

    document.body.removeChild(tempElement);

    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      padding: '1rem',
    }).fire({
      icon: 'success',
      title: '¡Texto copiado al portapapeles!',
      text: textToCopy,
      showClass: {
        popup: 'animate__animated animate__fadeInRight',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutRight',
      },
    });
  }
}
