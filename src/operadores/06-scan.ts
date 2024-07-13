import { from, map, reduce, scan } from "rxjs";

const numeros = [1,2,3,4,5,6];

// const totalAcumulador = ( acc, cur ) => {
//     return acc + cur;
// }

const totalAcumulador = ( acc, cur ) => acc + cur;

// Reduce
from( numeros ).pipe(
    reduce(totalAcumulador, 0)
).subscribe( console.log );

// Scan
from( numeros ).pipe(
    scan(totalAcumulador, 0)
).subscribe( console.log );


// Redux

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string | null;
    edad?: number;
    [key: string]: any;
}

const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABHC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];

const initialState: Usuario = { id: '', autenticado: false, token: null, edad: 33 };

const state$ = from(user).pipe(
    scan((acc, cur) => ({ ...acc, ...cur }), initialState)
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe(state => console.log(state));