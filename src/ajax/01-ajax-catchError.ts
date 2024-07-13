import { catchError, map, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = ( response: Response  ) => {
    if( !response.ok ){
        throw new Error( response.statusText);
    }
    return response;
}

const atrapaError = ( err: AjaxError ) => {
    console.warn( 'error en: ', err.message );
    return of([]);
}

//const fetchPromesa = fetch( url );

// fetchPromesa
//     .then(manejaErrores)
//     .then( resp => resp.json() )
//     .then( console.log )
//     .catch();

ajax( url ).pipe(
    map( resp => resp.response ),
    catchError(atrapaError)
).subscribe( console.log );