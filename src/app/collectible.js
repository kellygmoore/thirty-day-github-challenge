"use strict";
var Collectible = (function () {
    function Collectible(values) {
        if (values === void 0) { values = {}; }
        this.name = '';
        this.num = '';
        Object.assign(this, values);
    }
    return Collectible;
}());
exports.Collectible = Collectible;
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
//# sourceMappingURL=collectible.js.map