import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catching-game',
  templateUrl: './catching-game.component.html',
  styleUrls: ['./catching-game.component.css'],
})
export class CatchingGameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var game = document.querySelector('.game') as HTMLElement;
    var basket = document.querySelector('.basket') as HTMLElement;
    var beers = document.querySelector('.beers') as HTMLElement;
    var basketLeft = parseInt(
      window.getComputedStyle(basket).getPropertyValue('left')
    );
    var basketBottom = parseInt(
      window.getComputedStyle(basket).getPropertyValue('bottom')
    );

    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;
    var score_div = document.getElementById('score') as HTMLElement;
    var score = 0;

    var beers_images = ['/assets/img/platano.png', '/assets/img/frito.png'];
    var garbage_images = [
      ['/assets/img/bomb.png', '-6px', '-57px', '5rem'],
      ['/assets/img/bomb.png', '-6px', '-57px', '5rem'],
    ];

    var loader = document.getElementById('loader') as HTMLElement;
    console.log(loader);
    loader.style.display = 'none';

    var lives = 2;

    function convertPXToVW(px: any) {
      return px * (100 / screen_width);
    }

    function convertVHToPX(vh: any) {
      return (vh * screen_height) / 100;
    }

    function moveBasketLeft() {
      if (basketLeft > 50) {
        basketLeft -= 25;
        basket.style.left = basketLeft + 'px';
      }
    }

    function moveBasketRight() {
      if (basketLeft < screen_width / 1.22) {
        basketLeft += 25;
        basket.style.left = basketLeft + 'px';
      }
    }

    function keyDownHandler(e: any) {
      if (e.key == 'ArrowLeft') {
        moveBasketLeft();
      }

      if (e.key == 'ArrowRight') {
        moveBasketRight();
      }
    }

    function mouseMoveHandler(e: any) {
      let left = e.pageX;
      basketLeft = left;
      // Check that cursor is on the canvas
      if (basketLeft > 50 && basketLeft < screen_width / 1.22) {
        basket.style.left = basketLeft + 'px'; // Half of paddle width so that movement is relative to the middle of the paddle
      }
    }

    function touchMoveHandler(e: any) {
      let left = e.changedTouches[0].pageX;
      basketLeft = left;

      // Check that cursor is on the canvas
      if (basketLeft > 50 && basketLeft < screen_width / 1.22) {
        basket.style.left = basketLeft - 50 + 'px';
      }
    }

    function generateBeers() {
      var random_number = Math.floor(Math.random() * garbage_images.length);
      var random_garbage = Math.floor(Math.random() * garbage_images.length);

      var garbage = false;

      var beerBottom = convertVHToPX(75);
      var beerLeft = Math.floor(Math.random() * (screen_width / 1.44));
      var beer = document.createElement('div');
      var img = document.createElement('img');
      img.style.position = 'absolute';

      beer.style.width = '30px';
      beer.style.height = '30px';
      beer.style.position = 'absolute';

      if (random_number == random_garbage) {
        img.src = garbage_images[random_garbage][0];
        img.style.left = garbage_images[random_garbage][1];
        img.style.top = garbage_images[random_garbage][2];
        img.style.maxWidth = garbage_images[random_garbage][3];
        // img.style.width = garbage_images[random_garbage][4];
        garbage = true;
      } else {
        img.src = beers_images[Math.floor(Math.random() * beers_images.length)];
        img.style.top = '-52px';
        img.style.left = '-44px';
        img.style.maxWidth = '7em';
      }

      var endgame =
        lives == 0
          ? {
              title:
                "<h3 style='font-size: 2.2rem !important; font-family: Bright !important; color: #270a45;'>¡Oh no!</h3>",
              html: `<h3 style='font-size:0.9rem;font-family: Monserrat !important;'>Estuviste muy cerca de ganar tu retornable 😢 <br><br> <b>Te has quedado sin vidas, inténtalo el día de mañana</b></h3>`,
              imageUrl: '/assets/img/logo_tada.png',
              width: '23em',
              imageWidth: '12rem',
              imageHeight: '5rem',
              imageAlt: 'Custom image',
              showCloseButton: false,
              showConfirmButton: false,
            }
          : {
              title:
                "<h3 style='font-size: 2.2rem !important; font-family: Bright !important; color: #270a45;'>¡Oh no!</h3>",
              html: `<h3 style='font-size:0.9rem;font-family: Monserrat !important;'>Estuviste muy cerca de ganar tu retornable 😢 <br><br> <b>Tienes ${
                lives != 1 ? lives + ' Vidas' : lives + ' Vida'
              }</b></h3>`,
              imageUrl: '/assets/img/logo_tada.png',
              width: '23em',
              imageWidth: '12rem',
              imageHeight: '5rem',
              imageAlt: 'Custom image',
              showCloseButton: false,
              showConfirmButton: true,
              focusConfirm: false,
              confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> ¿Jugar de Nuevo?',
              confirmButtonAriaLabel: 'Thumbs up, great!',
              confirmButtonColor: '#270a45',
            };

      beer.appendChild(img);
      beers.appendChild(beer);
      function fallDownBeer() {
        if (
          beerBottom < basketBottom + 50 &&
          beerBottom > basketBottom &&
          beerLeft > basketLeft - 30 &&
          beerLeft < basketLeft + 80 &&
          garbage == false
        ) {
          beers.removeChild(beer);
          clearInterval(fallInterval);
          score++;
          score_div.textContent = 'Puntuación: ' + score + ' - Vidas: ' + lives;
          if (score == 5) {
            clearInterval(fallInterval);
            clearTimeout(beerTimeout);
            Swal.fire({
              title:
                "<h3 style='font-size: 2.2rem !important; font-family: Bright !important; color: #270a45;'>¡Felicidades, ganaste! 🎩</h3>",
              imageUrl: '/assets/img/logo_tada.png',
              width: '21em',
              imageWidth: '12rem',
              imageHeight: '5rem',
              imageAlt: 'Custom image',
              html: "<h3 style='font-size:0.9rem;font-family: Monserrat !important;'>Disfruta de una botella pilsener o nuestra siembra litro gratis usando el cupón:</h2><br><h3 style='font-family: Bright !important;font-size: 2.6rem;color: #270a45;'>YORETORNO</h3>",
              showCloseButton: false,
              showConfirmButton: true,
              confirmButtonText: '¡A comprar!',
              confirmButtonColor: '#270a45',
            });
          }
        }

        if (beerBottom < basketBottom && garbage == false) {
          beers.removeChild(beer);
          clearInterval(fallInterval);
          clearTimeout(beerTimeout);
          Swal.fire(endgame).then((result) => {
            if (result.isConfirmed) {
              score = 0;
              lives -= 1;
              score_div.textContent =
                'Puntuación: ' + score + ' - Vidas: ' + lives;
              loader.style.display = 'block';
              loader.style.opacity = '0';
              setTimeout(() => {
                loader.style.opacity = '1';
              }, 1000);
              setTimeout(() => {
                loader.style.display = 'none';
                generateBeers();
              }, 4300);
            }
          });
          console.log(score);
        }

        if (
          beerBottom < basketBottom + 50 &&
          beerBottom > basketBottom &&
          beerLeft > basketLeft - 30 &&
          beerLeft < basketLeft + 80 &&
          garbage == true
        ) {
          beers.removeChild(beer);
          clearInterval(fallInterval);
          clearTimeout(beerTimeout);
          Swal.fire(endgame).then((result) => {
            if (result.isConfirmed) {
              score = 0;
              lives -= 1;
              score_div.textContent =
                'Puntuación: ' + score + ' - Vidas: ' + lives;
              loader.style.display = 'block';
              loader.style.opacity = '0';
              setTimeout(() => {
                loader.style.opacity = '1';
              }, 1000);
              setTimeout(() => {
                loader.style.display = 'none';
                generateBeers();
              }, 4300);
            }
          });
          console.log(score);
        }

        if (beerBottom < basketBottom && garbage == true) {
          beers.removeChild(beer);
          clearInterval(fallInterval);
          console.log(score);
        }

        beerBottom -= 10;
        beer.style.bottom = beerBottom + 'px';
        beer.style.left = beerLeft + 'px';
      }
      var fallInterval = setInterval(fallDownBeer, 20);
      var beerTimeout = setTimeout(generateBeers, 2000);
    }

    //Desktop events
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('mousemove', mouseMoveHandler);

    // Touch events for mobile
    //document.addEventListener("touchstart", touchHandler, false);
    document.addEventListener('touchmove', touchMoveHandler, false);
    //document.addEventListener("touchend", touchHandler, false);

    Swal.fire({
      imageUrl: '/assets/img/instrucciones.png',
      background: '#fff', //"rgba(163, 125, 227,0.3)",
      width: '23em',
      imageAlt: 'instrucciones',
      showCloseButton: false,
      showConfirmButton: true,
      focusConfirm: false,
      confirmButtonText:
        "<h3 style='font-family: Monserrat !important;'>¡Jugar!<h3>",
      confirmButtonAriaLabel: '¡Jugar!',
      confirmButtonColor: '#270a45',
    }).then((result) => {
      if (result.isConfirmed) {
        score = 0;
        lives = 2;
        loader.style.display = 'block';
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.opacity = '1';
        }, 1000);
        setTimeout(() => {
          loader.style.display = 'none';
          generateBeers();
        }, 4300);
      }
    });
  }
}
