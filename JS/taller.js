export default {
    el: document.querySelector("#text-show"),

    componente: null,


    value(){
        return this.el.innerHTML;
    },
    setValue(p1){
        this.el.insertAdjacentText("beforeend", ` la hipotenusa de los catetos A  y B  es : ${p1}`);
    },
    remove(){
        this.componente = document.createDocumentFragment();
       this.componente.append(this.el);
    }
}
//  EJERCICIO 1
// export function suma() {
//     let sumaTotal=0;
//     for (let i = 1; i < 11; i++) {
//         sumaTotal += i;
//     }
//     return sumaTotal
// }

//EJERCICIO 2

export function hipotenusa(cata,catb) {
    let hip;

    hip=(Math.pow(cata,2))+(Math.pow(catb,2))

    //usando el DOM en etiqueta span muestro valor de cateto A
    const sp1=document.querySelector("#cata");
    sp1.insertAdjacentText("beforeend",`cateto A: ${cata} - `)

    //usando el DOM en etiqueta span muestro valor de cateto B                                                      
    const sp2=document.querySelector("#catb");
    sp2.insertAdjacentText("beforeend",`cateto B: ${catb}`)

    return Math.round( Math.sqrt(hip))
}


