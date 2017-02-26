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
var collectible_1 = require('./collectible');
var collectible_data_service_1 = require('./collectible-data.service');
var CollectibleViewComponent = (function () {
    function CollectibleViewComponent(collectibleDataService) {
        this.collectibleDataService = collectibleDataService;
        this.newCollectible = new collectible_1.Collectible();
    }
    CollectibleViewComponent.prototype.addCollectible = function () {
        console.log("In collectible-view component export addCollectible.");
        this.collectibleDataService.addCollectible(this.newCollectible);
        this.newCollectible = new collectible_1.Collectible();
    };
    Object.defineProperty(CollectibleViewComponent.prototype, "collectibles", {
        get: function () {
            return this.collectibleDataService.getAllCollectibles();
        },
        enumerable: true,
        configurable: true
    });
    CollectibleViewComponent.prototype.ngOnInit = function () {
    };
    CollectibleViewComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'collectible-view',
            templateUrl: './collectible-view.component.html',
            providers: [collectible_data_service_1.CollectibleDataService]
        }), 
        __metadata('design:paramtypes', [collectible_data_service_1.CollectibleDataService])
    ], CollectibleViewComponent);
    return CollectibleViewComponent;
}());
exports.CollectibleViewComponent = CollectibleViewComponent;
//# sourceMappingURL=collectible-view.component.js.map