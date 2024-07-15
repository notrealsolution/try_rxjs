import { concatMap, exhaustMap, fromEvent, interval, take } from 'rxjs';




const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click' );
//Mientras un observable no termite de emitir, 
// este operador de aplanamiento ignora las siguietes subscripciones
// hasta que finalice la emisión inicial, despues puede iniciar con otra.
click$.pipe( 
    exhaustMap( () => interval$ )
 ).subscribe( console.log );