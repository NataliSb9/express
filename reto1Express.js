const { json } = require('body-parser');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
 
        class Professional {
            constructor(name,age,genre,weight,height,hairColor,eyeColor,race,isRetired,nationality,oscarsNumber,profession,photo){
            this.name = name;
            this.age = age;
            this.genre = genre;
            this.weight = weight;
            this.height = height;
            this.hairColor = hairColor;
            this.eyeColor = eyeColor;
            this.race = race;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarsNumber = oscarsNumber;
            this.profession = profession;
            this.photo = photo;
            }
            mostrarDatos() {
            console.log(" - Name: " + this.name);
            console.log(" - Age: " + this.age);
            console.log(" - Genre: " + this.genre);
            console.log(" - Weight: " + this.weight);
            console.log(" - Height: " + this.height);
            console.log(" - Hair color: " + this.hairColor);
            console.log(" - Eye color: " + this.eyeColor);
            console.log(" - Race: " + this.race);
            console.log(" - Is retired?: " + this.isRetired);
            console.log(" - Nationality: " + this.nationality);
            console.log(" - Oscars Number: " + this.oscarsNumber);
            console.log(" - Profession: " + this.profession);
            console.log("****************************");
            }
        }
    

    let profesional = null;
    /*let profesional = new Professional("Tim Robbins", 62, "Masculino", 70, 1.75, "Canoso", "Verde", "Blanco", false, "estadounidense", 3, "actor");*/


let respuesta;
    
app.get("/profesional", function (request, response){
        
    if  (profesional != null){

        respuesta = profesional;

    } else {
        respuesta = {
            error: true, 
            codigo: 200, 
            mensaje: 'No hay profesional'
        }
    }
    
    response.send(respuesta)
});


app.post("/profesional",function( request,response){

    if (profesional === null)
    {
        profesional = { 
            name: request.body.name,
            nationality: request.body.nationality,
            profession: request.body.profession,
            genre: request.body.genre,
            age: request.body.age,
            weight: request.body.weight,
            height: request.body.height,
            hairColor: request.body.hairColor,
            eyeColor: request.body.eyeColor,
            race: request.body.race,
            isRetired: request.body.isRetired,
        }

        respuesta =  {
            error: true, 
            codigo: 200,
            mensaje: 'Profesional creado', 
            resultado: profesional,
        }
    }
    else {
        respuesta= { 
            error: true, 
            codigo: 200,
            mensaje: 'Profesional ya existe', 
            resultado: null
        }
    }
    response.send(respuesta)
});
    
app.put("/profesional",

function(request, response){ 
    
    if (profesional != null){
        
        if (request.body.name != null){
            profesional.name = request.body.name; 
            respuesta = {
                error: true, 
                codigo: 200, 
                mensaje: "El profesional actualizado", 
                resultado: profesional
            }
        }    

        if(request.body.nationality != null){
            profesional.nationality = request.body.nationality;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }
        }
        
        if(request.body.oscarsNumber != null){
            profesional.oscarsNumber = request.body.oscarsNumber;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.hairColor != null){
            profesional.hairColor = request.body.hairColor;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.oscarsNumber != null){
            profesional.race = request.body.race;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.age != null){
            profesional.age = request.body.age; 
            respuesta = {
                error: true, 
                codigo: 200, 
                mensaje: "El profesional actualizado", 
                resultado: profesional
            }
        }    

        if (request.body.profesional != null) 
            {profesional.name = request.body.profesional; 
            respuesta = {
                error: true, 
                codigo: 200, 
                mensaje: "El profesional actualizado", 
                resultado: profesional
            }            
        }   

        if(request.body.isRetired != null){
            profesional.isRetired = request.body.isRetired;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.isRetired != null){
            profesional.weight = request.body.weight;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

        if(request.body.isRetired != null){
            profesional.height = request.body.height;
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "El profesional actualizado",
                resultado: profesional
            }        
        }

    }else {
            respuesta = 
            {error: true, 
            codigo: 200, 
            mensaje: "El profesional no existe",
            resultado: profesional
        }
    }

    response.send(respuesta)
});
 
app.delete("/profesional",function(request, response){
    let respuesta
    if (profesional != null){
        profesional = null;
        respuesta = {
            error: false, 
            codigo:200, 
            mensaje: "Profesional borrado", 
            respuesta: profesional
        }
    }
    else
        respuesta = {
            error: true, 
            codigo: 200,
            mensaje: 'Profesional no existe', 
            resultado: profesional
        }
    
    response.send(respuesta);
});
app.listen(3000);