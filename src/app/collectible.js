"use strict";
var Collectible = (function () {
    function Collectible(id, name, num, description, located) {
        this.id = id;
        this.name = name;
        this.num = num;
        this.description = description;
        this.located = located;
    }
    return Collectible;
}());
exports.Collectible = Collectible;
var CollectibleList = (function () {
    function CollectibleList() {
        this.collectibles = [
            { id: 5, name: 'Quilt', num: 'Hello', description: 'Test', located: 'near heaven' },
            { id: 6, name: 'Baby Gown', num: 'Hello', description: 'Test', located: 'near heaven' },
            { id: 7, name: 'Photo Album', num: 'Hello', description: 'Test', located: 'near heaven' }
        ];
    }
    return CollectibleList;
}());
exports.CollectibleList = CollectibleList;
//# sourceMappingURL=collectible.js.map