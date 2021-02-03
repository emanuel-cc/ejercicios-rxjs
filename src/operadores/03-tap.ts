import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const numeros$ = range(1,5);

numeros$.pipe(
    tap(x => console.log("antes", x)),
    map(val => val * 10),
    tap({
        next: val => console.log("después", val),
        complete: ()=>console.log("Se termonó todo")
    })
)
.subscribe(val => console.log("subscribe", val));