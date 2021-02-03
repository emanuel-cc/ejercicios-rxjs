import {Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log("suguiente [next]: ", value),
    error: error => console.warn("error [obs]: ", error),
    complete: ()=>console.info("Completado [obs]")
};

const intervalo$ = new Observable<number>(subs =>{
    // Emite números random
    const intervalID = setInterval(()=>{
        subs.next(Math.random());
    },1000);

    return ()=>{
        clearInterval(intervalID);
        console.log("Intervalo destruido");
    };
});

/**
 * Características del subject
 * 1. Casteo múltiple
 * 2. También es un observer
 * 3. Next, error, complete
 */
const subject$ = new Subject();
const subscripcion = intervalo$.subscribe(subject$);
// const subs1 = intervalo$.subscribe(rnd => console.log("subs1",rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log("subs2",rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscripcion.unsubscribe();
}, 3500);