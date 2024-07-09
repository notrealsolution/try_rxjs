import { Observable, Observer, Subject, interval } from "rxjs";

const observer: Observer<any> = {
    'next' : value => console.log('next [obs]:', value),
    'error' : error => console.error('error [obs]:', error),
    'complete' : () => console.info('completado [obs]:')
}


const intervalo$ = new Observable<number>( subs => {
    const intervalID = setInterval(
        () => subs.next( Math.random() ), 3000
    );
    
    return () => clearInterval( intervalID );
});


/* const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd) );
const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd) ); */

const subject$ = new Subject();
intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe( rnd => console.log('subs1', rnd) );
const subs2 = subject$.subscribe( rnd => console.log('subs2', rnd) );