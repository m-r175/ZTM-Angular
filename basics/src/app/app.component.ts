import { Component } from '@angular/core';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name = 'quincy rodriguez'
  imgURL = 'https://picsum.photos/id/237/200/300'
  images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }

  blueClass = false
  fontSize = 16

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
