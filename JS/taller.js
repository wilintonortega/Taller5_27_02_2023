export default {
    el: document.querySelector("#text-show"),

    componente: null,
    value(){
        return this.el.innerHTML;
    },
    setValue(p1){
        this.el.insertAdjacentText("beforeend", ` La suma de los primeros 10 numeros es: ${p1}`);
    },
    remove(){
        this.componente = document.createDocumentFragment();
       this.componente.append(this.el);
    }
}

export function suma() {
    let sumaTotal=0;
    for (let i = 1; i < 11; i++) {
        sumaTotal += i;
    }
    return sumaTotal
}

