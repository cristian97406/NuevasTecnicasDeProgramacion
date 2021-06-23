
function Rectangulo (base, altura){
    this.base = base;
    this.altura = altura
}

Rectangulo.prototype.calcularArea = function() {
    return this.base * this.altura
} 

var rectangulo = new Rectangulo (6,3)

console.log(rectangulo.calcularArea())
console.log(rectangulo.base)

//Declaracion de clases

class Rectangulo2 {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea () {
        return this.base * this.altura;
    }
}

var rectangulo2 = new Rectangulo2 (6, 3)
console.log(rectangulo2.calcularArea())

//Clase Persona
//implementacion get, set y realizar una implementacion
//implementacion metodos estaticos - Clase Punto, Function distancia
//Construir Clase Persona y estudiante, extender Estudiante con Persona

/*
//-------------------------- DEBER ------------------------------
//Clase Persona
//implementacion get, set y realizar una implementacion
//implementacion metodos estaticos - Clase Punto, Function distancia
*/
class PERSONA {

    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido  = apellido
        this.edad = edad
    }

    static combinar (nom, apell) {
        return `Mi nombre es: ${nom} ${apell}`
      }

    get mipersona(){
        return `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} año(s)`;
    }

    set nuevapersona(mipersona){
        const arreglo = mipersona.split(' ');
        this.nombre = arreglo[0];  
        this.apellido = arreglo[1]; 
        this.edad = arreglo[2];
    }

    getpersona(){
        return `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} año(s)`;
    }
}
//get-set
var persona = new PERSONA("Cristian","Cordova",23)
console.log(persona.mipersona)
persona.nuevapersona = "andres viteri 22"
console.log(persona.mipersona)
//metodo estatico
console.log (PERSONA.combinar('Angel','Cordova'));
//-----------------------------------------------------------------
//implementacion metodos estaticos - Clase Punto, Function distancia
class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  
  const p1 = new Punto(6, 6);
  const p2 = new Punto(8, 8);
  
  console.log (Punto.distancia(p1, p2));


//Construir Clase Persona y estudiante, extender Estudiante con Persona
class ESTUDIANTE extends PERSONA{
    getpersona(){
        console.log(this.nombre + ' Estudia Analisis de Sistemas');
    }
}

var perestu = new ESTUDIANTE("Cristian");
perestu.getpersona();


