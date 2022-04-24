import { Injectable } from "@angular/core";
import { Book } from "../components/book/book.component";
import { HttpClientModule, HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export class BookService{
    BASE_URL:string = 'https://localhost:7275/api/Books/';
    books:Array<Book> = new Array<Book>();
    headers = {
        'Access-Control-Allow-Origin':'*'
    };

    constructor(private httpClient:HttpClient){

    }

    getAllBooks():Observable<Array<Book>>{

        return this.httpClient.get<Array<Book>>(this.BASE_URL);
    }

    getBookById(bookId:Number):Observable<Book>{
        return this.httpClient.get<Book>(this.BASE_URL + bookId);
    }
}