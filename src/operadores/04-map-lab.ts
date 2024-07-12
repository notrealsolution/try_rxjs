import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta nulla sapien, non lacinia urna facilisis a. Quisque ac odio velit. Aliquam erat volutpat. Phasellus sagittis, lectus eu placerat aliquet, erat nisl semper nunc, non rhoncus neque tortor id neque. Suspendisse nec nibh hendrerit, viverra risus finibus, varius ante. Integer tempus volutpat consectetur. Phasellus egestas nulla ut turpis scelerisque semper a a nulla.
<br/><br/>
Curabitur mi turpis, tempor efficitur efficitur in, mollis et magna. Nulla facilisi. Integer malesuada eu orci id interdum. Nam id lorem id diam lobortis fermentum. Donec convallis dui cursus arcu eleifend, at tristique orci ultrices. Ut vestibulum sodales tortor, eget varius nunc dictum in. Vivamus rutrum ut augue tincidunt tincidunt. Donec tempus luctus dignissim. Vivamus ut magna urna. Morbi sed eros id nulla malesuada feugiat. Nulla laoreet eget tellus pretium vestibulum.
<br/><br/>
Aenean dignissim non eros in sodales. Etiam tempus nisl in tempus tristique. Cras sollicitudin nec magna et fringilla. Pellentesque sed metus et leo luctus scelerisque at sit amet dui. In hac habitasse platea dictumst. Suspendisse sit amet erat rutrum, tristique libero at, ultricies purus. Duis maximus lacus eget neque porta, at pharetra lacus scelerisque. Fusce vestibulum pulvinar lectus, id dictum magna ornare in. Cras arcu nisl, porta id luctus vitae, vestibulum non magna. Vivamus eleifend euismod tortor. Maecenas suscipit turpis vel libero commodo, at tempus tellus auctor. Nam ac urna quam. Pellentesque turpis est, tristique sit amet mi sed, facilisis auctor ante.
<br/><br/>
Curabitur ultricies pharetra tortor, id ullamcorper ex hendrerit consectetur. Proin a lacinia mauris. Fusce vitae purus eget metus cursus ornare. Curabitur at finibus tortor. Morbi et vestibulum massa. Donec ultricies molestie ante eget fermentum. Sed eget magna ligula. Donec facilisis sit amet tortor in laoreet.
<br/><br/>
Duis ultricies accumsan auctor. Mauris porttitor enim mauris, id vehicula quam ultricies id. Maecenas non leo nulla. Donec consequat ligula et eros rutrum tempor. In ac leo ac urna luctus mattis. Sed placerat sagittis diam. Nunc tincidunt eget odio et dignissim. Nullam magna dolor, elementum nec laoreet et, porttitor in arcu. Donec in interdum tortor. Sed nec accumsan leo. Aenean non cursus leo. Phasellus viverra volutpat neque, vitae interdum orci faucibus id.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );

// Función que haga el cálculo.
const calcularPorcentajeScroll = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log({scrollTop,
    //              scrollHeight,
    //              clientHeight
    //             });
    return ( scrollTop / (scrollHeight - clientHeight)) * 100;
}


// Streams

const scroll$ = fromEvent( document, 'scroll' );

/* scroll$.subscribe( console.log ); */

const progress$ = scroll$.pipe(
    map( event => calcularPorcentajeScroll( event ) ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    console.log( porcentaje );
    progressBar.style.width = `${ porcentaje }%`;
} )

console.log( 'Run' );