import { Component } from '@angular/core';

import { Collectible }    from './collectible';
import { CollectibleDataService } from './collectible-data.service';

@Component({
  moduleId: module.id,
  selector: 'collectible-view',
  templateUrl: './collectible-view.component.html',
  providers: [CollectibleDataService]
})
export class CollectibleViewComponent {

	newCollectible: Collectible = new Collectible();

	constructor(private collectibleDataService: CollectibleDataService) {
	}

	addCollectible() {
		this.collectibleDataService.addCollectible(this.newCollectible);
		this.newCollectible = new Collectible();
	}
 }