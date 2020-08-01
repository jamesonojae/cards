import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // creating an array of object to be nexted in the card component
  posts = [
    {
    title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg',
    username: 'nature',
    content: 'I saw this Tree today',
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainLover',
      content: 'Here is the Mountain i saw today',
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1222',
      content: 'I did some biking today',
    },
    {
      title: 'NEW Biking',
      imageUrl: 'assets/flower.jpeg',
      username: 'roseFlower',
      content: 'I did like Rose Flowers',
    }
  ];
}
