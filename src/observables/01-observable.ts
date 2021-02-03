import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log("suguiente [next]: ", value),
    error: error => console.warn("error [obs]: ", error),
    complete: ()=>console.info("Completado [obs]")
};

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');
    //Forzar un error
    // const a = undefined;
    // a.nombre = 'Nombre';
    subs.complete();
});

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log("next: ", valor),
//     error => console.log("error: ",error),
//     ()=>console.log("Completado")
// );
