import { Component } from '@angular/core';

import { Collectible }    from './collectible';

@Component({
  moduleId: module.id,
  selector: 'collectible-form',
  templateUrl: './collectible-form.component.html'
})
export class CollectibleFormComponent {

  worth = ['High Value', 'Heirloom', 'Keepsake', 'Giveaway'];

  model = new Collectible(2, 'Quilt', this.worth[0], 'made by Grandma Baker in 1940.', 'master bedroom closet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newCollectible() {
    this.model = new Collectible(3, '', '', '', '');
  }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  // newHero() {
  //   this.model = new Hero(42, '', '');
  // }

  // skyDog(): Hero {
  //   let myHero =  new Hero(42, 'SkyDog',
  //                          'Fetch any object at any distance',
  //                          'Leslie Rollover');
  //   console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  //   return myHero;
  // }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  // showFormControls(form: any) {
  //   return form && form.controls['name'] &&
  //   form.controls['name'].value; // Dr. IQ
  // }

  /////////////////////////////

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/