import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";


@Component({
    selector: 'hello',
    templateUrl : 'hello.component.html',
    styleUrls: ["hello.component.css"]
})
export class HelloComponent
{    
    picture: string ='https://angular.io/assets/images/logos/angular/shield-large.svg';
    validation:boolean = false;
    title2:string = 'Zensar';    
    advertisementList: Array<Advertisement> = [];
    categories:Array<string> =['Furniture','Electronics','Hardware'];
    showmsg(msg :string)
    {
        this.title2=msg;
    }

    advertisement: Advertisement = new Advertisement();

    addAdvertisement(title:string, name:string, category:string, description:string){
        this.advertisement.title = title;
        this.advertisement.name = name;
        this.advertisement.category = category;
        this.advertisement.description = description;
        this.advertisementList.push(this.advertisement);        
    }
}

export class Advertisement{
    title:string = '';
    name: string = '';
    category:string = '';
    description:string = '';

}