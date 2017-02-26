"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CollectibleDataService = (function () {
    // [{id: 1, name: 'testcase'}];
    function CollectibleDataService() {
        this.lastId = 0;
        this.collectibles = [];
    }
    CollectibleDataService.prototype.addCollectible = function (collectible) {
        console.log("In collectible-data service, item added: ", collectible);
        if (!collectible.id) {
            collectible.id = ++this.lastId;
        }
        this.collectibles.push(collectible);
        console.log("array: ", this.collectibles + "this: ", this);
        return this;
    };
    CollectibleDataService.prototype.getAllCollectibles = function () {
        return this.collectibles;
    };
    CollectibleDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CollectibleDataService);
    return CollectibleDataService;
}());
exports.CollectibleDataService = CollectibleDataService;
//# sourceMappingURL=collectible-data.service.js.map