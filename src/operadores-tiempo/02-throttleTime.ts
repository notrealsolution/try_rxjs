import { asyncScheduler, fromEvent, map } from "rxjs";
import { throttleTime } from "rxjs";
import { distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent( document, 'click' );

click$.pipe(
    throttleTime(3000),
)/* .subscribe(console.log) */;

// Ejemplo 2
const input = document.createElement('input');

document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, { // Para emitir además el ultimo valor.
        leading: true,
        trailing: true
    }),
    map(event => (event.target as HTMLInputElement).value),
    distinctUntilChanged()// Detecta si el cambio hecho es el mismo
).subscribe(console.log);