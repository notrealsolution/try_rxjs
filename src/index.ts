import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


// range(1,8).pipe(
//     map<number,string>( val => (val * 10).toString() ),
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>( event => event.code ),
)
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)
const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
)

keyupCode$.subscribe( code => console.log('map', code) );
keyupPluck$.subscribe( code => console.log('pluck', code) );
keyupMapTo$.subscribe( code => console.log('mapTo', code) );