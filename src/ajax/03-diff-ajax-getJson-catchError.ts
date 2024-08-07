import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://httpbinx.org/delay/1';

const manejaError = ( resp: AjaxError ) => {
    console.warn( 'error', resp.message );
    return of({
        ok: false,
        usuarios: []
    })
}

const obs$ = ajax.getJSON( url );
const obs2$ = ajax ( url );

// obs$.pipe(
//     catchError( manejaError )
// ).subscribe( data => console.log( 'getJson: ', data) );

// obs2$.pipe(
//     catchError( manejaError )
// ).subscribe( data => console.log( 'ajax: ', data) );

obs$.pipe(
    catchError( manejaError )
).subscribe( {
    next: val => console.log( 'next: ', val ),
    error: err => console.warn('error en subs', err ),
    complete: () => console.log('complete')
} );