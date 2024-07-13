import { debounceTime, fromEvent, map } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeAll, pluck, tap } from 'rxjs/operators';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput, orderList );

// Streams 
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$.pipe(
    debounceTime( 500 ),
    map( event => event.target['value']),
    map( texto => {  return ajax.getJSON( `https://api.github.com/search/users?q=${ texto }` )}),
    mergeAll(),
    pluck('items')
).subscribe( resp => console.log(resp) );