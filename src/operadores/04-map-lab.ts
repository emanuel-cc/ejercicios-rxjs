import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat tincidunt placerat. Nunc tempus, ligula scelerisque mollis vestibulum, est lacus maximus nisl, ac aliquet diam tellus sed turpis. Phasellus tincidunt dolor non dapibus condimentum. Aenean suscipit non neque non mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam velit, consectetur sed nunc congue, interdum accumsan quam. Vestibulum cursus commodo lorem nec pulvinar. Fusce faucibus blandit semper. Curabitur dictum tincidunt tellus, sed pharetra mi ullamcorper ac. Fusce dictum id risus et eleifend. Mauris sed ex justo. Duis nec feugiat tellus. Vivamus et scelerisque dolor. Fusce tincidunt lobortis augue. Nullam in risus id nisl varius blandit id a massa.
<br/><br/>
Nam accumsan sapien eu diam finibus rutrum. Sed volutpat mauris tellus, nec vulputate lorem finibus at. Morbi auctor non neque eu consectetur. Nulla iaculis sed tortor eget blandit. Aliquam erat volutpat. Praesent fermentum, nibh non dapibus laoreet, libero turpis euismod ante, dapibus consectetur arcu lorem id dui. Morbi congue est felis, nec aliquam tellus semper ut. Fusce et maximus sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Donec tempor elementum purus, vitae fringilla magna interdum non. Proin sollicitudin tortor nec ex gravida, consectetur pulvinar ante cursus. Sed nisl sapien, varius ut metus ut, sagittis sollicitudin sapien. In molestie egestas dapibus. Nunc neque nisi, bibendum at odio luctus, semper porta nibh. Ut varius varius sem at cursus. Pellentesque condimentum a urna nec lobortis. Suspendisse orci massa, bibendum ut volutpat eget, ultrices vel dui. Maecenas ut pretium sem, ut pretium nunc. Maecenas ullamcorper iaculis porttitor. Phasellus quis purus rutrum, vehicula erat id, semper urna. Aliquam ac pellentesque purus. Pellentesque sodales lacus in sagittis vehicula. Maecenas in tortor ac ligula facilisis consequat sed nec ex.
<br/><br/>
Nam vitae augue ultrices, dictum neque id, ultrices ligula. Proin vitae efficitur mi, commodo finibus nunc. Donec feugiat nisl et arcu fringilla, vitae dictum mauris hendrerit. Sed rutrum ac massa a rhoncus. In hendrerit sapien ac nisl eleifend rhoncus. Aliquam placerat mattis tellus, non blandit erat rutrum sit amet. Cras gravida odio in ipsum molestie dictum. Sed eget scelerisque odio. Cras egestas tincidunt tempus. Donec nunc sem, cursus vitae imperdiet at, blandit non augue. Praesent nunc enim, ultrices vitae tincidunt non, vehicula ut elit. Nulla facilisi. Morbi nec dapibus mauris. Vivamus tristique purus ut quam semper dictum.
<br/><br/>
Fusce bibendum, mauris sed varius cursus, felis leo varius turpis, nec imperdiet nulla augue in odio. Sed tincidunt tortor vitae tortor pretium auctor. Suspendisse tincidunt leo id mollis pulvinar. Ut sit amet nulla nec tortor pharetra elementum. Sed ex magna, ultrices vitae augue vel, aliquam tincidunt erat. Sed nibh diam, pretium non aliquam ultricies, tincidunt ac dui. Donec rhoncus augue in pretium consequat. Proin vel nibh tempus, tempus mi id, sagittis dolor. Integer eget purus tempor lorem posuere fringilla sit amet quis diam. In lacus ante, condimentum lobortis malesuada vitae, luctus et ex. Vivamus aliquet, purus ac elementum vestibulum, tortor justo facilisis justo, in semper eros velit vitae ante. Proin eu dui lorem. Donec id erat rhoncus, lacinia diam consectetur, suscipit neque. Integer blandit, erat in eleifend laoreet, velit nulla pellentesque justo, id pulvinar odio diam at turpis. Maecenas justo erat, luctus et diam quis, iaculis egestas ligula.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Función que haga el cálculo
const calcularPorcentajeScroll = (event) =>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);
const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);
//Se define el ancho del progressBar de acuerdo al status
progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});