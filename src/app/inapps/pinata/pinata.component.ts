import { Component, OnInit } from '@angular/core';
import { TweenMax, TimelineMax, Elastic, Sine, Circ } from 'gsap';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-pinata',
  templateUrl: './pinata.component.html',
  styleUrls: ['./pinata.component.css'],
})
export class PinataComponent implements OnInit {
  pinata: any;
  pinataLeft: any;
  pinataTop: any;
  tween: any;
  tl: any;
  taps: number = 0;

  ngOnInit(): void {
    // Variables para la animación de la piñata
    var pinataBody = document.querySelector('#pinata-body') as HTMLElement;
    var tl = new TimelineMax({ repeat: -1 });

    var taps = 0;

    // Animación de movimiento de la piñata
    var tween = TweenMax.from('#pinata', 3, {
      y: -50,
      ease: Elastic.easeOut,
    });

    // Animación de golpeo de la piñata
    tl.to('#pinata', 0.5, {
      transformOrigin: 'center top',
      rotation: 3,
      repeat: 1,
      yoyo: true,
      ease: Sine.easeOut,
    }).to('#pinata', 0.5, {
      transformOrigin: 'center top',
      rotation: -3,
      repeat: 1,
      yoyo: true,
      ease: Sine.easeOut,
    });

    // Función para reiniciar la animación de golpeo
    function restartswing(this: any) {
      this.tl.restart();
    }

    // Evento de clic en el contenedor de la piñata
    const piñata = document.querySelector('.pinata-container') as HTMLElement;

    piñata.addEventListener('click', function (e) {
      // Aumentar el contador de golpes
      taps++;
      console.log(taps);
      if (taps >= 3) {
        // Detener la animación de movimiento
        tween.pause();
        // Configuramos los colores que queremos que tenga el confetti
        const colors = ['#FF0000', '#00FF00', '#0000FF'];
        confetti({
          particleCount: 100, // Número de partículas
          spread: 70, // Área en la que se distribuyen las partículas
          origin: { y: 0.6 }, // Posición de inicio
          colors: colors, // Colores del confetti
        });
        // Lanzamos el confetti
        setTimeout(() => {
          Swal.fire({
            title: 'Felicidades',
            text: 'Has ganado un premio',
            icon: 'success',
            allowOutsideClick: false,
            showConfirmButton: false,
          });
        }, 400);
      }

      // Reiniciar la animación de golpeo
      restartswing.call({ tl: tl });

      // Obtener la posición de la piñata y calcular la dirección del golpe
      var pinataTop = pinataBody.offsetTop - e.pageY + 83;
      var pinataLeft = pinataBody.offsetLeft - e.pageX + 83;
      var tlswing = TweenMax.to('#pinata', 0.5, {
        rotation: (pinataTop - pinataLeft) / 3,
        repeat: 1,
        yoyo: true,
        ease: Circ.easeOut,
        onComplete: restartswing.bind({ tl: tl }),
      });

      // Reproducir la animación de golpeo
      tlswing.play();
    });
  }
}
