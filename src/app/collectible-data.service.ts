import { Injectable } from '@angular/core';
import { Collectible } from './collectible';

@Injectable()
export class CollectibleDataService {

	lastId: number = 0;

	collectibles: Collectible[] = [];


	constructor() {
	}

	addCollectible(items: Collectible): CollectibleDataService {
		if (!items.id) {
			items.id = ++this.lastId;
		}
		this.collectibles.push(items);
		console.log("array: ", this.collectibles);
		return this;
	}
}