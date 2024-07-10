import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';


// range(1,8).pipe(
//     map<number,string>( val => (val * 10).toString() ),
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>( event => event.code ),
)

keyupCode$.subscribe( code => console.log('map', code) );