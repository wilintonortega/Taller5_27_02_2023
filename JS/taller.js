export default {
    el: document.querySelector("#text-show"),

    componente: null,


    value(){
        return this.el.innerHTML;
    },
    setValue(p1){
        this.el.insertAdjacentText("afterbegin", `El cilindro tiene las siguientes medidas  :   ${p1} `);
    },
    remove(){
        this.componente = document.createDocumentFragment();
       this.componente.append(this.el);
    }
}
//  EJERCICIO 1

// 1.	"Desarrolle un algoritmo que realice la sumatoria de los números enteros 
// comprendidos entre el 1 y el 1O, es decir, 1 + 2 + 3 + .... + 1O."

// export function suma() {
//     let sumaTotal=0;
//     for (let i = 1; i < 11; i++) {
//         sumaTotal += i;
//     }
//     return sumaTotal
// }

//EJERCICIO 2

// 2.	Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de 
//sus dos catetos. Desarrolle el algoritmo correspondiente. Formula: (HIP = √CATa + √CATb)



// export function hipotenusa(cata,catb) {
//     let hip;

//     hip=(Math.pow(cata,2))+(Math.pow(catb,2))

//     //usando el DOM en etiqueta span muestro valor de cateto A
//     const sp1=document.querySelector("#cata");
//     sp1.insertAdjacentText("beforeend",`cateto A: ${cata} - `)

//     //usando el DOM en etiqueta span muestro valor de cateto B                                                      
//     const sp2=document.querySelector("#catb");
//     sp2.insertAdjacentText("beforeend",`cateto B: ${catb}`)

//     return Math.round( Math.sqrt(hip))
// }


//EJERCICIO 3

//3.	Desarrolle un algoritmo que permita determinar el área lateral y volumen de un
// cilindro dado su radio (R) y altura (H). Formula: (VOL = π * R^2 * H), 
//(AREA_LATERAL = 2 * π * R * H)

export function cilindro(radio,altura) {
    const sp1=document.querySelector("#radio");
    sp1.insertAdjacentText("beforeend",`Radio: ${radio}`);

    const sp2=document.querySelector("#altura");
    sp2.insertAdjacentText("beforeend", ` - Altura ${altura}`);

        const volumen= Math.PI * Math.pow(radio,2) * altura;

    const areaLateral= 2 * Math.PI * radio * altura;

    return ` \r\n El volumen: ${volumen} Area Lateral: ${areaLateral}`
    
}