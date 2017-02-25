import { Injectable } from '@angular/core';
import { Collectible } from './collectible';

@Injectable()
export class CollectibleDataService {

	lastId: number = 0;

	collectibles: Collectible[] = [{id: 1, name: 'testcase'}];


	constructor() {
	}

	addCollectible(collectible: Collectible): CollectibleDataService {
		console.log("Items: ", collectible);
		if (!collectible.id) {
			collectible.id = ++this.lastId;
		}
		this.collectibles.push(collectible);
		console.log("array: ", this.collectibles);
		return this;
	}
}