import { from, range } from 'rxjs';
import { map, tap } from 'rxjs/operators'

const numeros$ = range(1,5);

numeros$.pipe(
    tap(
        x => {
            console.log('antes', x);
            return 100; // No afecta el flujo de información o recorrido - osea no lo detiene
        }
    ),
    map( val => val * 10 ),
    tap({
        next: valor => console.log('después del valor', valor),
        complete: () => console.log('Se terminó todo')
    })
).subscribe( val => console.log('subs', val) );