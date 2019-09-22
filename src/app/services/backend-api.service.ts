import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/Models/customer';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  apiURL: string = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

public GetAllProducts(){
  
  return this.httpClient.get<Product[]>(`${this.apiURL}Products`)
}

}
