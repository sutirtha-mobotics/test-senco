import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  arr = [
    {
      name: 'john',
      age: 34,
    },
    {
      name: 'sahil',
      age: 24,
    },
    {
      name: 'carlos',
      age: 30,
    },
    {
      name: 'carlos',
      age: 34,
    },
  ];

  ageArr = JSON.stringify(this.arr.map((v) => v.age));
  filterArr = JSON.stringify(this.arr.filter((v) => v.age > 30));
}
