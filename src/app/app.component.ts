import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Kelly's Collectibles</h1>
	  <nav>
		<a routerLink="/collectible-view" routerLinkActive="active">View Collectible Item</a>
		<a routerLink="/collectible-form" routerLinkActive="active">Add A New Collectible Item</a>
	</nav>

	<router-outlet></router-outlet>
	`
})
export class AppComponent  { name = 'Angular'; }
