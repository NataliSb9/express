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
    let profesionalClase = new Professional("Tim Robbins", 62, "Masculino", 70, 1.75, "Castanyo", "Verde", "Blanco", false, "estadounidense", 3, "actor") 
    
    let profesional = null;
    
    
    app.post("/profesional",
                function( request,response){
                    let respuesta;
                    if (profesional === null)
                    {
                        profesional = {name: request.body.name}

                        respuesta =  {error: true, codigo: 200,
                            mensaje: 'Profesional creado', resultado: profesional
                        }
                    }
                    else {
                        respuesta= { error: true, codigo: 200,
                            mensaje: 'Profesional ya existe', resultado: null};
                    }
                        

                    response.send(respuesta)
                } );
    
    app.put("/profesional",
            function(request, response)
            {
               let respuesta
               if (profesional != null)
               {
                   profesional.name = request.body.name;
                   //profesional.age = request.body.age;
                   respuesta = { error: false, codigo: 200, mensaje: "Profesional actualizado", resultado: profesional}
               } 
               else
               respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe", resultado: profesional}

               response.send(respuesta)
            });
    app.delete("/profesional",
            function(request, response)
            {
                let respuesta
                if (profesional != null)
                {
                    profesional = null;
                    respuesta = {error: false, codigo:200, mensaje: "Profesional borrado", respuesta: profesional};
                }
                else
                    respuesta = {error: true, codigo: 200,
                    mensaje: 'Profesional borrado', resultado: profesional};
                response.send(respuesta);
            });
    
app.listen(3000);