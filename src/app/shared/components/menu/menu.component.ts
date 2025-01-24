import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];
  items: any;

  ngOnInit() {
    this.menuItems = [
      { label: 'New', icon: 'pi pi-pifw pi-plus' },
      { label: 'New', icon: 'pi pi-pifw pi-plus' },
    ];
  }
}
