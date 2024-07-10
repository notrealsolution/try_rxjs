import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';


// range(0, 15).pipe(
//     filter( val => val % 2 === 1 ),
// ).subscribe(console.log);

/* range(20, 21).pipe(
    filter( ( val, i ) => {
        console.log(`Index: ${i}`);
        return val % 2 === 1;
    }),
).subscribe( console.log ); */

interface Personaje {
    tipo: string,
    nombre: string
}
const personajes: Personaje[] = [
    { tipo: 'Hero', nombre: 'Batman'},
    { tipo: 'Hero', nombre: 'Robin'},
    { tipo: 'Villano', nombre: 'Joker' }
];

from( personajes ).pipe(
    filter( personaje => personaje.tipo === 'Villano')
).subscribe(console.table);


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map<KeyboardEvent, string>( event => event.code ), 
    filter<string>( key => key === 'Enter' )
);

keyup$.subscribe(console.log);