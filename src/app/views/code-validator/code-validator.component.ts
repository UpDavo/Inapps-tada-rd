import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-code-validator',
  templateUrl: './code-validator.component.html',
  styleUrls: ['./code-validator.component.css'],
})
export class CodeValidatorComponent {
  couponUsed: boolean = false;
  couponData: any;
  couponCode: string = '';
  loading: boolean = false;
  alert: boolean = false;

  constructor(private http: HttpClient) {}

  getCouponData(): Observable<any> {
    const url = `http://tada-rd-middleware.up.railway.app/api/emails/${this.couponCode.toUpperCase()}`;
    return this.http.get<any>(url);
  }

  makeCall() {
    if (this.couponCode.trim() === '') {
      // Si el campo del cupón está vacío, no se realiza la llamada a la API
      this.alert = true;
      return;
    } else {
      this.alert = false;
    }

    this.loading = true; // Activar estado de carga

    this.getCouponData().subscribe(
      (response) => {
        if (response.status === 'done') {
          this.couponUsed = true;
          this.couponData = response.data;
        }
        this.loading = false; // Desactivar estado de carga después de recibir la respuesta
      },
      (error) => {
        // Manejar errores de la solicitud HTTP
        this.loading = false; // Desactivar estado de carga en caso de error
      }
    );
  }

  resetForm() {
    this.couponUsed = false;
    this.couponData = null;
    this.couponCode = '';
  }
}
