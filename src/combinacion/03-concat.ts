import { concat, interval } from 'rxjs';
import { take } from 'rxjs/operators';


const interval$ = interval(1000);

// Concatena varios observables, pero espera a que uno se complete para empezar a emitir el segundo
concat(
    interval$.pipe(
        take(3)
    ),
    interval$.pipe(
        take(2)
    )
).subscribe(console.log);