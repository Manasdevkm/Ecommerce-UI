import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartarray:any=[];
  cartlist=new BehaviorSubject([]) // list
  
  constructor() { }

  // add to cart
  addtocart(product:any){
    this.cartarray.push(product)
    this.cartlist.next(this.cartarray)

  }
}
