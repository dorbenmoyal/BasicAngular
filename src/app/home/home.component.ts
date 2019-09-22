import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Product } from 'src/Models/customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: BackendApiService) { }
   product : Product[];

  ngOnInit() {
  }

  getAllProducts(){
      this.apiService.GetAllProducts().subscribe((res)=>{
        console.log(res);
        this.product = res;
      })
  }

}
