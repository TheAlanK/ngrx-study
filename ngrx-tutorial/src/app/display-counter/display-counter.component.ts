import { IAppState } from './../store/app.state';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent implements OnInit {

  counter$ = this.store.select('joaozinho').pipe(
    map(e => e.counter)
  );


  constructor(private store: Store<{joaozinho: IAppState}>) { }

  ngOnInit(): void {
  }

}
