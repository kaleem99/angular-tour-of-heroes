import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Villain } from '../villain';
import { VillainService } from '../villain.service';
@Component({
  selector: 'app-villain-search',
  templateUrl: './villain-search.component.html',
  styleUrls: [ './villain-search.component.css' ]
})
export class VillainSearchComponent implements OnInit {
  villains$!: Observable<Villain[]>;
  private searchTerms = new Subject<string>();

  constructor(private villainService: VillainService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.villains$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.villainService.searchVillain(term)),
    );
  }
}