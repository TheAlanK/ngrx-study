import { CounterService } from './../services/counter.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { actionsContador, IAppState } from '../store/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public counter$ = this.store.select('joaozinho').pipe(
    map(e => e.counter)
  );

  constructor(private store: Store<{ joaozinho: IAppState }>, private counterService: CounterService){}

  ngOnInit(): void {

  }

  incrementaContador() {
    this.counterService.incrementCounterNumber(1).pipe(take(1)).subscribe(
      success => {
        this.store.dispatch(actionsContador({payload: success}));
      }
    )
  }

  decrementaContador() {
    this.counterService.decrementCounterNumber(1).pipe(take(1)).subscribe(
      success => {
        this.store.dispatch(actionsContador({payload: success}));
      }
    )
  }

  zeraContador() {
    this.counterService.resetCounter().pipe(take(1)).subscribe(
      success => {
        this.store.dispatch(actionsContador({payload: success}));
      }
    )
  }


}
