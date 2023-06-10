const materian= document.getElementById("Materia-n");
const materiae= document.getElementById("inputGroupSelect01");
const Tarea=document.getElementById("Tarea");
const Agregar=document.getElementById("Agregar");
const AreaTareas = document.getElementById("Area_tareas");
const opciones = document.createElement("div");
const tareasHacer = document.getElementById("tareas-hacer");
const listo = [];
const borrar = [];
// const arriba = document.createElement("button");
// const abajo = document.createElement("button");
var materias = []; //materias que se van agregando
var tareas = []; //tareas que se van agregando
var exis=false; //para comprobar si existe la materia o tarea
var locu =0; //localidades existentes en materias
var materiaNew; //variable que iba a usar para las cookies
var l=0; //variable que me ayuda en la comprobacion de la existencia de materias
var i=0; //variable que me ayuda en la comprobacion de la existencia de tareas
var loct =0; //localidades existentes en tareas
var taream; //Variable para mostrar en la pagina la tarea
var materiam; //variable para mostrar en la pagina la materia
var Tareasfalt = 0;
var tareascomplet=0;
var idhecho=0;
var ideliminar=-1;
var hecho=[];
var eliminar=[];
tareasHacer.innerHTML = "Tareas: Faltantes: "+Tareasfalt+" Hechas: "+tareascomplet;
Agregar.addEventListener("click", ()=>{
    if (materiae.value=="Nueva")
    {
        listo[idhecho] = document.createElement("button");
        listo[idhecho].innerHTML+="Completa";
        listo[idhecho].style.width="50%";
        listo[idhecho].style.backgroundColor="#0000ff";
        borrar[idhecho] = document.createElement("button");
        borrar[idhecho].innerHTML+="Eliminar";
        borrar[idhecho].style.width="50%";
        borrar[idhecho].style.backgroundColor="#0000ff";
        materiam = materian.value;
        taream = Tarea.value;
        materian.value=materian.value.toUpperCase();
        materias.push(materian.value);
        Tarea.value=Tarea.value.toUpperCase();
        Tarea.value=Tarea.value+"."+materian.value;
        tareas.push(Tarea.value);
        locu = materias.length;
        locu-=1;
        loct = tareas.length;
        loct-=1
        exis=false;
        for(l=0;l<locu;l++)
        {
            if(materian.value==materias[l]&&locu>0)
            {
                materias.pop();
                tareas.pop();
                alert("Error, materia ya existente");
                console.log(materias);
                console.log(materian.value);
                console.log(locu);
                console.log(materias[locu]);
                exis=true;
            }
        }
        for(i=0;i<loct;i++)
        {
            if(Tarea.value==tareas[i] && loct>0)
            {
                tareas.pop();
                alert("Error, tarea ya existente");
                exis=true;
            }
        }
        console.log(exis);
        if(exis==false)
        {
            Tareasfalt++;
            tareasHacer.innerHTML = "Tareas: Faltantes: "+Tareasfalt+" Hechas: "+tareascomplet;
            console.log(materias);
            console.log(materian.value);
            console.log(locu);
            console.log(materias[locu]);
            materiae.innerHTML +=  `<option value= ${materiam}> ${materiam}</option>`;
            console.log(Tarea.value);
            AreaTareas.innerHTML += `<li class="list-group-item list-group-item-info">Tarea ${taream} de la materia ${materiam} </li>`;
            AreaTareas.appendChild(opciones);
            // listo.outer 
            // console.log(listo[idhecho].outerHTML);
            listo[idhecho].setAttribute("id",idhecho);
            opciones.innerHTML= listo[idhecho].outerHTML;
            // listo.dataset.id=idOP;
            hecho[idhecho] = document.getElementById(idhecho);
            borrar[idhecho].setAttribute("id",ideliminar);
            opciones.innerHTML += borrar[idhecho].outerHTML;
            eliminar[idhecho] = document.getElementById(ideliminar);
            idhecho++;
            console.log(idhecho);
            ideliminar--;
        }
        materian.value="";
        Tarea.value="";
    }
    else
    {
        if(materian.value!="")
        {
            alert('Error, no puede agregar una nueva materia si su opcion de materia no es "nueva" ');
        }
        else
        {
            
            listo[idhecho] = document.createElement("button");
            listo[idhecho].innerHTML+="Completa";
            listo[idhecho].style.width="50%";
            listo[idhecho].style.backgroundColor="#0000ff";
            borrar[idhecho] = document.createElement("button");
            borrar[idhecho].innerHTML+="Eliminar";
            borrar[idhecho].style.width="50%";
            borrar[idhecho].style.backgroundColor="#0000ff";
            Tareasfalt++;
            tareasHacer.innerHTML = "Tareas: Faltantes: "+Tareasfalt+" Hechas: "+tareascomplet;
            materiam = materiae.value;
            taream = Tarea.value;
            materiae.value=materiae.value.toUpperCase();
            materias.push(materiae.value);
            Tarea.value=Tarea.value.toUpperCase();
            Tarea.value=Tarea.value+"."+materiae.value;
            tareas.push(Tarea.value);
            locu = materias.length;
            locu-=1;
            loct = tareas.length;
            loct-=1;
            exis=false;
            for(l=0;l<locu;l++)
                if(materiae.value==materias[l]&&locu>0)
                    materias.pop();
            for(i=0;i<loct;i++)
            {
                if(Tarea.value==tareas[i] && loct>0)
                {
                    tareas.pop();
                    alert("Error, tarea ya existente");
                    exis=true;
                }
            }
            if(exis==false)
            {
                console.log(materias);
                console.log(materiae.value);
                console.log(locu);
                console.log(materias[locu]);
                console.log(Tarea.value);
                AreaTareas.innerHTML += `<li class="list-group-item list-group-item-info">Tarea ${taream} de la materia ${materiam}</li>`;
                AreaTareas.appendChild(opciones); 
                // listo.outer 
                // console.log(listo[idhecho].outerHTML);
                listo[idhecho].setAttribute("id",idhecho);
                opciones.innerHTML= listo[idhecho].outerHTML;
                // listo.dataset.id=idOP;
                hecho[idhecho] = document.getElementById(idhecho);
                borrar[idhecho].setAttribute("id",ideliminar);
                opciones.innerHTML += borrar[idhecho].outerHTML;
                eliminar[idhecho] = document.getElementById(ideliminar);
                idhecho++;
                console.log(idhecho);
                ideliminar--;
            }
            // materias[locu-1] = materias[locu-1].toUpperCase();
            // console.log(materias[locu-1]);
            materian.value="";
            Tarea.value="";
        }
    }

    // listo.addEventListener("click", ()=>{
    //     if(Tareasfalt>0)
    //     {
    //         Tareasfalt--;
    //         tareascomplet++;
    //         tareasHacer.innerHTML = "Tareas: Faltantes: "+Tareasfalt+" Hechas: "+tareascomplet;
    //     }
    //     else
    //         alert("No tiene ninguna tarea faltante");
    // });
    // borrar.addEventListener("click",()=>{

    // });
        
    // materiaNew = document.cookie = "materia=" + materias[locu-1] + "; max-age = 60*60";
});