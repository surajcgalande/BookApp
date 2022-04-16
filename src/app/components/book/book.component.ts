import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Pipe } from "@angular/core";

@Component({
    selector: 'book',
    templateUrl: 'book.component.html',
    styleUrls:['book.component.css']
})
export class BookComponent {
    bookList:Array<Book> = [];
    
    constructor(private router:Router) {        
       this.bookList.push(
        {
            bookId:1,
            title : "Adventure Stories",
            price : 200,
            cover:"assets/images/covers/adventure_stories.jpg",
            description:"An adventure story is a genre of literature that features a protagonist going on an adventure of some kind."
        },
        {
        bookId:2,
        title : "Adventures of Sonoris",
        price : 400,
        cover:"assets/images/covers/adventures_of_sonoris.jpg",
        description:"To rescue their uncle, a brother and sister must save Sonoris, a stunningly beautiful and magical world doomed to devastation. But is it? In their race to find eight stolen keys that could reverse the fate of Sonoris, Mimi and Zack face danger at every turn, all the while avoiding a vicious pack of wolves bent on controlling Sonoris."
       },
       {
        bookId:3,
        title : "Bill and Sparkle",
        price : 500,
        cover:"assets/images/covers/bill_and_sparkle.jpg",
        description:"Inspired by her friend, princess C adance, Twilight goes on a quest to find the C rystal"
       },
       {
        bookId:4,
        title : "Little Mermaid",
        price : 599,
        cover:"assets/images/covers/little_mermaid.jpg",
        description:"The story follows the journey of a young mermaid who is willing to give up her life in the sea as a mermaid to gain a human soul."
       },
       {
        bookId:5,
        title : "The Secret Garden",
        price : 299,
        cover:"assets/images/covers/the_secret_garden.jpg",
        description:"The novel centres on Mary Lennox, who is living in India with her wealthy British family. She is a selfish and disagreeable 10-year-old girl who has been spoiled by her servants and neglected by her unloving parents."
       },
       {
        bookId:6,
        title : "The Danger Gang",
        price : 499,
        cover:"assets/images/covers/the_danger_gang.jpg",
        description:"Franky can't wait to move to his new town - although he wishes he didn't have to leave his best friend Dani behind. But everything changes after the storm, when strange Green Lightning and powerful Thunder crash down on the town. From that night on, the kids who live on franky's street start to change."
       },
       {
        bookId:7,
        title : "Lizzie Lucky",
        price : 199,
        cover:"assets/images/covers/lizzie_lucky.jpg",
        description:"Lizzie is desperate for a dog. In order to convince her parents to get one, she has to come up with 101 reasons why she needs one. Lizzie is a master at making lists, so thinking of 101 reasons is going to be easy!"
       },
       {
        bookId:8,
        title : "The Grufallo",
        price : 99,
        cover:"assets/images/covers/the_grufallo.jpg",
        description:"This is a rhyming story of a mouse and a monster. Little mouse goes for a walk in a dangerous forest. To scare off his enemies he invents tales of a fantastical creature called the Gruffalo. So imagine his surprise when he meets the real Gruffalo."
       }
       );
        
    }

    showBookDetails(bookId:string){
        var bookKey = bookId as unknown as Number;
        var book = this.bookList.find(b=> b.bookId == bookKey);

        if(book != null){
            this.router.navigate(['/bookdetails', book]);
        }
    }
}

export class Book{
    bookId:number =0;
    title:string='';
    description:string='';
    price:number=0;
    cover:string='';
}