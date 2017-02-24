export class Collectible {

	id: number;
	name: string = '';
	//num: string = '';
	//description?: string;
	//located?: string;

  	constructor(values: Object = {}) {
  		Object.assign(this, values);
  	}
}

// export class CollectibleList{
// 	collectibles: Collectible[] = [
// 		{ id: 5, name: 'Quilt', num: 'Hello', description: 'Test', located: 'near heaven'},
// 		{ id: 6, name: 'Baby Gown', num: 'Hello', description: 'Test', located: 'near heaven'},
// 		{ id: 7, name: 'Photo Album', num: 'Hello', description: 'Test', located: 'near heaven'}
	
// 	];

	// newCollectibleItem: Collectible = { id: null, name: '', num: '', description: '', located: ''};

	// addCollectibleItem(): void {
	// 	this.collectibles.push(this.newCollectibleItem);
	// 	console.log("array: ", this.collectibles);
	// }

	// constructor() {
	// 	this.collectibles = [];
	// }
// }

