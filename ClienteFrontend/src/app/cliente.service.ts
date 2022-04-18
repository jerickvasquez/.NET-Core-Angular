import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl: string = 'https://localhost:44375/api/Clientes';

  constructor(private http: HttpClient) {}

  getClientes() {
    return this.http.get(this.baseUrl);
  }

  
}
