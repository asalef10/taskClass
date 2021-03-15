
let TextObJ = document.getElementById('TextObJ')
let carsId = document.getElementById('carsId')
let Motors = document.getElementById('Motors')
let jeepS = document.getElementById('jeep')
let truckS = document.getElementById('truck')
let nAmeCar = document.getElementById('nAmeCar')
let NuOfWheels = document.getElementById('NuOfWheels')
let Engine_capacity = document.getElementById('Engine_capacity')
let ArryObject = []

class Cars {
    Number_of_wheels;
    Engine_capacity;
    color;
    constructor(Number_of_wheels, Engine_capacity, color) {
        this.Number_of_wheels = Number_of_wheels
        this.Engine_capacity = Engine_capacity
        this.color = color
    }




    static obJect(ArryObject) {

        return Math.max(...ArryObject);
    }

    get answer() {
        return this.printInfor()
    }
    printInfor() {
        return `you have  ${this.Number_of_wheels} Number of wheels and your Engine capacity ${this.Engine_capacity} and your color is ${this.color} `
    }

}
class motores extends Cars {
    Name
    constructor(Name, Number_of_wheels, Engine_capacity, color, answer) {
        super(Number_of_wheels, Engine_capacity, color, answer)
        this.Name = Name
    }
    get printUpperCaseName() {
        return this.upperCaseName
    }

    upperCaseName() {
        return this.Name.toUpperCase()
    }
}


let Tmax = new motores('tmax', 2, 1324, 'black',)
console.log(Tmax);
console.log(Tmax.answer);
console.log(Tmax.printUpperCaseName())


class jep extends Cars {
    constructor(Name, Number_of_wheels, Engine_capacity, color, answer) {
        super(Number_of_wheels, Engine_capacity, color, answer)
        this.Name = Name
    }
    get printUpperCaseName() {
        return this.upperCaseName
    }

    upperCaseName() {
        return this.Name.toUpperCase()
    }
}

let jeep = new jep('Jeimeli', 4, 1695, 'white')
console.log(jeep);
console.log(jeep.answer);
console.log(jeep.printUpperCaseName())



class Trelier extends Cars {
    constructor(Name, Number_of_wheels, Engine_capacity, color, answer) {
        super(Number_of_wheels, Engine_capacity, color, answer)
        this.Name = Name
    }
    get printUpperCaseName() {
        return this.upperCaseName
    }

    upperCaseName() {
        return this.Name.toUpperCase()
    }

}

let truck = new Trelier('BoosH', 4, 1874, 'bluu')

console.log(truck);
console.log(truck.answer);
console.log(truck.printUpperCaseName())
console.log(Cars.obJect([truck.Engine_capacity, jeep.Engine_capacity, Tmax.Engine_capacity]));



function SendTo() {
    Name = nAmeCar.value
    numNerWheels = NuOfWheels.value
    Engine_capacityN = Engine_capacity.value
    CoLor = color.value
    Mofa = new Trelier(Name, numNerWheels, Engine_capacityN, CoLor)

    if (carsId.value == 'Motors') {
        TextObJ.innerHTML += `<h1>motors</h1>`
        TextObJ.innerHTML += `
    <tr>
    <th>nAmeCar</th>
    <th>NuOfWheels </th>
    <th>Engine_capacity</th>
    <th>color</th>
    </tr>
    <td>${Mofa.Name}
    <td>${Mofa.Number_of_wheels}
    <td>${Mofa.Engine_capacity}
    <td>${Mofa.color}
    </table>
    `
    } else if (carsId.value == 'jeep') {
        TextObJ.innerHTML += `<h1>jeep</h1>`
        TextObJ.innerHTML += `
        <tr>
        <th>nAmeCar</th>
        <th>NuOfWheels </th>
        <th>Engine_capacity</th>
        <th>color</th>
        </tr>
    <td>${Mofa.Name}
    <td>${Mofa.Number_of_wheels}
    <td>${Mofa.Engine_capacity}
    <td>${Mofa.color}
    </table>
    `

    } else if (carsId.value == 'truck') {
        TextObJ.innerHTML += `<h1>truk</h1>`
        TextObJ.innerHTML += `
        <tr>
        <th>nAmeCar</th>
        <th>NuOfWheels </th>
        <th>Engine_capacity</th>
        <th>color</th>
        </tr>
    <td>${Mofa.Name}
    <td>${Mofa.Number_of_wheels}
    <td>${Mofa.Engine_capacity}
    <td>${Mofa.color}
    </table>
    `
    }


}










