import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';


const click$  = fromEvent( document, 'click' ) ;
const interval$ = interval( 1000 );


// Tener cuidado podriamos generar fugas de memoria
// click$.pipe( 
//     mergeMap( time => interval$ )
// ).subscribe( console.log );

click$.pipe( 
    switchMap( time => interval$ )
).subscribe( console.log );