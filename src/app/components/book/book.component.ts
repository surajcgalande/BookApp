import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pipe } from "@angular/core";
import { BookService } from "src/app/services/book-service";

@Component({
    selector: 'book',
    templateUrl: 'book.component.html',
    styleUrls:['book.component.css']
})
export class BookComponent implements OnInit {
    bookList:Array<Book> = [];
    bookService:BookService;

    constructor(private router:Router, _bookService:BookService) {        
       this.bookService = _bookService;        
    }

    ngOnInit(){
        this.bookService.getAllBooks().subscribe((data=>{
            this.bookList = data;
        }));
    }

    showBookDetails(bookId:string){
        var bookKey = bookId as unknown as Number;
        var book:Book = new Book();

        //book = this.bookList.find(b=> b.bookId == bookKey);
        this.bookService.getBookById(bookKey).subscribe((data => {
            book = data;

            if(book != null){
                this.router.navigate(['/bookdetails', book]);
            }
        }));        
    }
}

export class Book{
    id:number =0;
    title:string='';
    description:string='';
    price:number=0;
    cover:string='';
}