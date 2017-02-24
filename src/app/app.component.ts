import { Component } from '@angular/core';
import { Collectible } from './collectible';
import { CollectibleDataService } from './collectible-data.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>Kelly's Collectibles</h1>
	  <nav>
		<a routerLink="/collectible-view" routerLinkActive="active">View Collectible Item</a>
		<a routerLink="/collectible-form" routerLinkActive="active">Add A New Collectible Item</a>
	</nav>

	<router-outlet></router-outlet>
	`,
	providers: [ CollectibleDataService ]
})
export class AppComponent  { 
	// newCollectible: Collectible = new Collectible();

	// constructor(private collectibleDataService: CollectibleDataService) {
	// }

	// addCollectible() {
	// 	console.log("in appComponent.");
	// 	this.collectibleDataService.addCollectible(this.newCollectible);
	// 	this.newCollectible = new Collectible();
	// }

}
