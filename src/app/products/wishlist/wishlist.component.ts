import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
 wishlist:any=[];
 eMsg:any
 
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.products
        if(this.wishlist.length==0){
          this.eMsg="Empty Wishlist"
        }
      },
      (data:any)=>{//client  error
        this.eMsg=data.error.message

      }
    )
  }
  deletewish(product:any){
    this.api.deletewish(product.id).subscribe(
      (result:any)=>{
        alert(result.message)
        // window.location.reload()//automatic refresh
        this.router.navigateByUrl('wishlist')
      }
      ,
      (result:any)=>{
        alert(result.error.message)
      },


    )
  }

}
