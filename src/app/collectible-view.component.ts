import { Component } from '@angular/core';

import { Collectible, CollectibleList }    from './collectible';

const myList = new CollectibleList();

@Component({
  moduleId: module.id,
  selector: 'collectible-view',
  templateUrl: './collectible-view.component.html'
})
export class CollectibleViewComponent {
	items = myList.collectibles;
 }