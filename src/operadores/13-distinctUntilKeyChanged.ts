import { from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje{
    nombre:string;
}

const personajes:Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    }
];

from(personajes).pipe(
    // distinct(p=>p.nombre)
    // Evalúa si son exactamante iguales
    // distinctUntilChanged((ant, act)=>ant.nombre === act.nombre)
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log);