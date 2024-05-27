//input de la tarea nueva
let tareaNueva = document.querySelector('.tareaNueva');
//botón agregar
document.querySelector('#agrega').addEventListener('click',()=>{
    if(typeof(Storage) != 'undefined'){
        //  console.log('Funcionando')
        //obtener datos del storage
        let localItems = JSON.parse( localStorage.getItem('localItem'))
        if(localItems === null){
            lista = []
        }else{
          lista = localItems;
        }
        //agrega la nueva tarea a la lista
        lista.push(tareaNueva.value)
        //agrega los elementos de la lista al local storage
        localStorage.setItem('localItem', JSON.stringify(lista)); 
    }
    else{
        alert('El Storage no está disponible')
    }
    //para mostrar las tareas de la lista
    mostrarElementos()
})
//para mostrar la lista de tareas
function mostrarElementos(){
    //para ir agregando elementos a la lista y posteriormente mostrarla
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
        lista = []
 
    }else{
        lista = localItems;
    }
    let html = '';
    let itemShow = document.querySelector('#elemento');
    //forEach para recorrer el arreglo de tareas que se encuentra en el storage
    lista.forEach((actividad, num )=> {
        //el botón hace uso del evento onClick para llamar a una función y eliminar una sola tarea
        html += `<div id="elemento" class="tarea-individual">
                    <button id="eliminarTarea" class="fa fa-trash" onClick="eTarea(${num})" ></button>
                    ${actividad}
                </div>`
    })
 itemShow.innerHTML = html;
}
//al iniciar se muestra la lista que se encuentra en el storage
mostrarElementos()
//permite limpiar la lista de tareas
document.querySelector('#btnLimpiar').addEventListener('click',()=>{
    localStorage.clear()
    //después de limpiar se muestra que el storage está vacio
    mostrarElementos()
})
//función para botón para eliminar las tareas una a una
//permite eliminar una sola tarea
//recibe la posición en el arreglo de la tarea a eliminar
function eTarea(num){
    lista.splice(num, 1)
    localStorage.setItem('localItem', JSON.stringify(lista));
    mostrarElementos()
}
