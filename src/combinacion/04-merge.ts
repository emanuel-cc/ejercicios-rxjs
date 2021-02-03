import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

// Recibe varios observables y el producto es la combinación de los mismos
merge(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type')),
).subscribe(console.log);