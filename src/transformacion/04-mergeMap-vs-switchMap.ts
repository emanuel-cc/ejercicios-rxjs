import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

interval$.pipe(
    // mergeMap(()=>interval$),
    // Mantiene solo una subscripción activa
    switchMap(()=>interval$)
).subscribe(console.log);