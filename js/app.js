//variables 
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year')
const max = new Date().getFullYear();
const min = max - 12;
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const datosBusqueda = {
    marca:'',
    year: '',
    maximo: '',
    minimo: '',
    puertas: '',
    transmision: '',
    color: '',
}

document.addEventListener('DOMContentLoaded', ()=>{
    mostrar(autos);
    llenarSelect();
    
});

marca.addEventListener('change',(event)=>{
    datosBusqueda.marca = event.target.value;
    filter();
});

year.addEventListener('change',(event)=>{
    datosBusqueda.year = event.target.value;
    filter();
});

maximo.addEventListener('change',(event)=>{
    datosBusqueda.maximo = event.target.value;
    console.log(datosBusqueda);
});

minimo.addEventListener('change',(event)=>{
    datosBusqueda.minimo = event.target.value;
    console.log(datosBusqueda);
});

puertas.addEventListener('change',(event)=>{
    datosBusqueda.puertas = event.target.value;
    console.log(datosBusqueda);
});

transmision.addEventListener('change',(event)=>{
    datosBusqueda.transmision = event.target.value;
    console.log(datosBusqueda);
});

color.addEventListener('change',(event)=>{
    datosBusqueda.color = event.target.value;
    console.log(datosBusqueda);
});


function mostrar(autos){
    limpiarHtml();
    autos.forEach(auto =>{
        const {marca, modelo, year, precio, puertas, color, transmision}= auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}
        `;
         

        resultado.appendChild(autoHTML);
    })
}

function llenarSelect(){
    for(let i = max; i >= min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }

}

function filter (){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    console.log(resultado);
    mostrar(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear (auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === parseInt(year);
    }
    return auto;
}

function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}