import { of } from 'rxjs';
import { endWith, startWith } from 'rxjs/operators';


const numeros$ = of(1,2,3).pipe(
    // Antes de que se emita los valores se ejecuta
    startWith('a','b','c'),
    // Después de que se emita y antes de que se complete el observable, se ejecuta
    endWith('x','y','z')
);
numeros$.subscribe(console.log);