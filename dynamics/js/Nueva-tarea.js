const materian= document.getElementById("Materia-n");
const materiae= document.getElementById("inputGroupSelect01");
const Tarea=document.getElementById("Tarea");
const Agregar=document.getElementById("Agregar");
const AreaTareas = document.getElementById("Area_tareas");
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
Agregar.addEventListener("click", ()=>{
    if (materiae.value=="Nueva")
    {
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
        console.log(materias);
        console.log(materian.value);
        console.log(locu);
        console.log(materias[locu]);
        materiae.innerHTML +=  `<option value= ${materiam}> ${materiam}</option>`;
        console.log(Tarea.value);
        AreaTareas.innerHTML += `<li class="list-group-item list-group-item-info">Tarea ${taream} de la materia ${materiam}</li>`;
        }
        // materias[locu-1] = materias[locu-1].toUpperCase();
        // console.log(materias[locu-1]);
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
            }
            // materias[locu-1] = materias[locu-1].toUpperCase();
            // console.log(materias[locu-1]);
            materian.value="";
            Tarea.value="";
        }
    }
        
    // materiaNew = document.cookie = "materia=" + materias[locu-1] + "; max-age = 60*60";
});