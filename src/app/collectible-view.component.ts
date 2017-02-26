import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Collectible }    from './collectible';
import { CollectibleDataService } from './collectible-data.service';

@Component({
  //moduleId: module.id,
  selector: 'collectible-view',
  templateUrl: './collectible-view.component.html',
  providers: [CollectibleDataService]
})
export class CollectibleViewComponent implements OnInit {

	newCollectible: Collectible = new Collectible()

	constructor(private collectibleDataService: CollectibleDataService) {
	}

	addCollectible() {
		console.log("In collectible-view component export addCollectible.");
		this.collectibleDataService.addCollectible(this.newCollectible);
		this.newCollectible = new Collectible();
	}

	get collectibles() {
		return this.collectibleDataService.getAllCollectibles();
	}

	ngOnInit() {
  	}
 }