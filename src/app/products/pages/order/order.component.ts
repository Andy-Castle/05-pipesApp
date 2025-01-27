import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'products-order',
  standalone: false,
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent implements OnInit {
  public isUpperCase: boolean = false;

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  ngOnInit(): void {}
}
