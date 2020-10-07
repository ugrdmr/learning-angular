import { strict } from 'assert';
import { stringify } from 'querystring';
import { Content } from './content-interface';

export class ContentList {
    private _items: Content[];

    constructor() {
        this._items = [];
    }

    get items(): Content[] {
        return this._items;
    }

    //add an item to the _items array
    add(item: Content): void {
        this._items.push(item);
    }

    //return the lenght of the array
    size() {
        return this._items.length;
    }


    show(index: number): string {
        let formatted_str: string = "<article>";
        formatted_str += "<h1>" + this._items[index].title + "</h1>";
        formatted_str += this._items[index].type ? "<p><span>" + this._items[index].type + "</span></p>" : "";
        formatted_str += "<h2>" + this._items[index].author + "</h2>";
        formatted_str += "<p>" + this._items[index].body + "</p>";
        formatted_str += this._items[index].imgUrl ? "<img src='" + this._items[index].imgUrl + "' alt='Image of " + this._items[index].title + "'>" : "";

        //if we have tags
        if (this.items[index].tags) {
            formatted_str += "<p class='tags'>";
            this.items[index].tags.forEach(el => {
                formatted_str += "<span>" + el + "</span> ";
            });
            formatted_str += "</p>";
        }

        formatted_str += "</article>";
        return formatted_str;
    }
}