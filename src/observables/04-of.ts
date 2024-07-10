import { Observable, from, of } from 'rxjs';

const observable$ = of(...[0,2,9], 1, 2, 3, 4, 5, 6, 2, 3, 4) as Observable<number>;

console.log('Inicio del Obs$');
observable$.subscribe(
    next => console.log( 'next', next ),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin del observable');


const numbers = [11, 12, 13, 14, 15, 16, 12, 13, 14];

const observable2$ = from(numbers);
console.log('Inicio del Obs$');
observable2$.subscribe(
    next => console.log( 'next', next ),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin del observable');