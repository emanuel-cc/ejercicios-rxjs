import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log("suguiente [next]: ", value),
    error: error => console.warn("error [obs]: ", error),
    complete: ()=>console.info("Completado [obs]")
};

const intervalo$ = new Observable<number>(subscribe=>{
    // Crear un contador
    let contador = 0;

    const interval = setInterval(()=>{
        // Se va a ejecutar cada segundo
        contador++;
        subscribe.next(contador);
        console.log(contador);
    },1000);

    setTimeout(() => {
        subscribe.complete();
    }, 2500);

    return ()=>{
        clearInterval(interval);
        console.log("Intérvalo destruido");
    };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// Encadenar las subcripciones a la subscripción original
subs1.add(subs2)
     .add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log("Completado timeout");
}, 6000);