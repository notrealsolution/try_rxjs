import { debounce, fromEvent, map } from "rxjs";
import { debounceTime } from "rxjs";
import { distinctUntilChanged, pluck } from 'rxjs/operators';

const click$ = fromEvent( document, 'click' );

click$.pipe(
    debounceTime(3000)
)/* .subscribe(console.log) */;

// Ejemplo 2
const input = document.createElement('input');

document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    map(event => (event.target as HTMLInputElement).value),
    distinctUntilChanged()// Detecta si el cambio hecho es el mismo
).subscribe(console.log);