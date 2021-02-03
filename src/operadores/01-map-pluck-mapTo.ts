import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1,5)
//     .pipe(
//         map<number,number>(val=>{
//             return val * 10
//         })
//     )
// .subscribe();

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupcode$ = keyUp$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyUp$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyUp$.pipe(
    mapTo('tecla presionada')
);
keyUp$.subscribe(console.log);
keyupcode$.subscribe(code => console.log("map",code));
keyupPluck$.subscribe(code => console.log("pluck",code));
keyupMapTo$.subscribe(code => console.log("mapTo",code));
