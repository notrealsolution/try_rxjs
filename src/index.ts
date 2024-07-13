import { debounceTime, fromEvent, map } from "rxjs";
import { ajax } from "rxjs/ajax";
import { pluck, tap } from 'rxjs/operators';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput, orderList );

// Streams 
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$.pipe(
    debounceTime( 500 ),
    map( event => {
        const texto = event.target['value'];
        return ajax.getJSON(
            `https://api.github.com/users/${ texto }`
        )
    })
).subscribe( resp => {
    resp.pipe(
        map( val => {
            return val['url'];
        })
        /* pluck('url') */
    )
    .subscribe( console.log )
} )