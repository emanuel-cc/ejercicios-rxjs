import {fromEvent} from 'rxjs';


/**
 * Eventos del DOM
 */

 const src1$ = fromEvent<MouseEvent>(document,'click');
 const src2$ = fromEvent<KeyboardEvent>(document,'keyup');

 const observer = {
     next: (val)=>console.log("next", val)
 };

 src1$.subscribe(ev => {
    console.log("x: ",ev.x);
    console.log("y: ",ev.y);
 });

 src2$.subscribe(event => console.log(event.code));