import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];
  items: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            command: () => {
              this.router.navigate(['/']);
            },
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            command: () => {
              this.router.navigate(['/numbers']);
            },
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            command: () => {
              this.router.navigate(['/uncommon']);
            },
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];
  }
}
