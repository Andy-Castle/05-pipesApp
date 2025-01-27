import { Component, type OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  standalone: false,
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent implements OnInit {
  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  ngOnInit(): void {}
}
