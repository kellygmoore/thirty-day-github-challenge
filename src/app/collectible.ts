export class Collectible {

  constructor(
    public id: number,
    public name: string,
    public num: string,
    public description?: string,
    public located?: string
  ) {  }

}

export class CollectibleList{
	collectibles: Collectible[] = [
		{ id: 5, name: 'Quilt', num: 'Hello', description: 'Test', located: 'near heaven'},
		{ id: 6, name: 'Baby Gown', num: 'Hello', description: 'Test', located: 'near heaven'},
		{ id: 7, name: 'Photo Album', num: 'Hello', description: 'Test', located: 'near heaven'}
	
	];
}

