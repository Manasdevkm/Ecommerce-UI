import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allproducts:any=[]; //array of data //products
  constructor(private api:ApiService) { }
  
  searchTerm:string='';
  
  ngOnInit(): void {
    this.api.getallproducts().subscribe(
      (data:any)=>{
        this.allproducts = data.products;
      }
    )

    this.api.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm = data

      }
    )
  }

  addtowishlist(product:any){
    this.api.addtowishlist(product).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

}


