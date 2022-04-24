import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'bookdetails',
    templateUrl: 'bookdetails.component.html',
    styleUrls:['bookdetails.component.css']
})
export class BookDetailsComponent implements OnInit {

    bookId:number =0;
    title:string='';
    description:string='';
    price:number=0;
    cover:string='';

    constructor(private activatedRoute:ActivatedRoute){
        this.bookId = activatedRoute.snapshot.params['id'];
        this.title = activatedRoute.snapshot.params['title'];
        this.description = activatedRoute.snapshot.params['description'];
        this.price = activatedRoute.snapshot.params['price'];
        this.cover = activatedRoute.snapshot.params['cover'];
    }   
    
    ngOnInit() {
        
      }    
}