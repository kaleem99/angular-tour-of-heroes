import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Villain } from '../villain';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './villain-details.component.html',
  styleUrls: ['./villain-details.component.css'],
})
export class VillainDetailsComponent implements OnInit {
  villain: Villain | undefined;

  constructor(
    private route: ActivatedRoute,
    private villainService: VillainService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.villainService
      .getVillain(id)
      .subscribe((villain) => (this.villain = villain));
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.villain) {
      this.villainService.updateVillain(this.villain).subscribe(() => this.goBack());
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
