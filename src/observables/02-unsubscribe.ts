import { Observable, Observer, interval } from "rxjs";
const observer: Observer<any> = {
    'next' : value => console.log('next [obs]:', value),
    'error' : error => console.error('error [obs]:', error),
    'complete' : () => console.info('completado [obs]:')
}

const intervalo$ = new Observable<number>( subscriber => {
    //Crear un contador 1,2,3,4 ....
    let count = 0;

    const interval = setInterval(()=>{
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout( () => {
        subscriber.complete();
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});


const subs = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3= intervalo$.subscribe( observer );

/* subs.add( subs2 )
        .add(subs3);  Ya no existe add*/

setTimeout(() => {
    subs.unsubscribe();
    /* subs2.unsubscribe();
    subs3.unsubscribe(); */
    console.log('Completado timeout')
}, 6000)