import { Observable } from "rxjs";

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');
    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Fernado';
    subs.complete();

    subs.next('Hola...');
    subs.next('Mundo...');

})

obs$.subscribe( 
    valor => console.log('next', valor),
    error => console.error('error:', error),
    () => console.info('completado')
);







