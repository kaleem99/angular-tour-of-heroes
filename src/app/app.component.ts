import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { RouterOutlet } from '@angular/router';
// import { HeroesComponent } from "./heroes/heroes.component";
// import { MessagesComponent } from "./messages/messages.component";

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet, HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tour of Heroes';

  selectedPathName: string = 'Dashboard';
//   <a
//   [style]="selectedPathName === 'Dashboard' ? 'color: red' : ''"
//   (click)="testing('Dashboard')"
//   routerLink="/"
//   >Dashboard</a
// >
// <a (click)="testing('Heroes')" routerLink="/heroes">Heroes</a>
// <a (click)="testing('Villains')" routerLink="/Villains">Villains</a>
  navigationData: any[] = [  
    { pathName: 'Dashboard', routerLink: '/' },
    { pathName: 'Heroes', routerLink: '/heroes' },
    { pathName: 'Villains', routerLink: '/villains' },
    { pathName: 'Compare', routerLink: '/compare' },

  ]
  testing(pathName: string): void {
    console.log('testing', event);
    this.selectedPathName = pathName;
  }
}
