//metodos clase profesional

getName(){
    return this.name;
}

setName(name){
    this.name = name;
}

getAge(){
    return this.age;
}

setAge(age){
    this.age = age;
}

getGenre(){
    return this.genre;
}

setGenre(genre){
    this.genre = genre;
}

getWeight(){
    return this.weight;
}

setWeight(weight){
    this.weight = weight;
}

getHeight(){
    return this.height;
}

setHeight(height){
    this.height = height;
}

getHairColor(){
    return this.hairColor;
}

setHairColor(hairColor){
    this.hairColor = hairColor;
}

getEyeColor(){
    return this.eyeColor;
}

setEyeColor(eyeColor){
    this.eyeColor = eyeColor;
}

getRace(){
    return this.race;
}

setRace(race){
    this.race = race;
}
getIsRetired(){
    return this.isRetired;
}

setIsRetired(isRetired){
    this.isRetired = isRetired;
}

getNationality(){
    return this.nationality;
}

setNationality(nationality){
    this.nationality = nationality;
}

getOscarsNumber(){
    return this.oscarsNumber;
}

setOscarsNumber(oscarsNumber){
    this.oscarsNumber = oscarsNumber;
}

getProfession(){
    return this.profession;
}

setProfession(profession){
    this.profession = profession;
}

/*app.get("/profesional",
            function ( request, response){

                let name = request.query.name
                let respuesta;

                if (profesional != null & (!name || name === profesional.nombre))

                        respuesta = profesional;
                else
                        respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
                
                response.send(respuesta)
            });*/

    
 */


   /* app.get("/profesional",
        function (request, response){
            let respuesta;
                 if  (profesional != null){

                    respuesta = profesional;

                 } else
                    {respuesta = {error: true, codigo: 200, mensaje: 'El profesional no existe'}
            response.send(respuesta)}
        }
        ); */