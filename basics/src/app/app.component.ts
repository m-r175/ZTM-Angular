import { Component } from '@angular/core';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name='Quincy'
  imgURL = 'https://picsum.photos/id/237/200/300'

  getName() {
    return this.name;
  }
  logImg(event: string) {
    console.log(event)
  }
  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }
}
