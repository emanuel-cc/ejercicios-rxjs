import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap, exhaustMap } from 'rxjs/operators';


const interval$ = interval(500).pipe(
    take(3)
);

const click$ = fromEvent(document, 'click');

click$.pipe(
    // Ignora las otras emisiones de los observables y solo mantiene el primero que se emitió
    exhaustMap(()=>interval$)
)
.subscribe(console.log);