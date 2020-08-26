console.log('--------------------------EJERCICIOS 1---------------');

let array = [1, 2, 3, 4, 5, 6];
console.log('ARRAY BASE: ', array);

// 1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
// y devuelva su primer elemento. Utiliza destructuring.
const head = array => {
	[res] = array;
	return res;
};
console.log('EJERCICIO 1 (head): ', head(array));

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = array => {
	[, ...res] = array;
	return res;
};
console.log('EJERCICIO 2 (tail): ', tail(array));

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada
//devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = array => {
	return array.slice(0, array.length - 1); //Sin cambiar el contenido del array original
};
console.log('EJERCICIO 3 (init): ', init(array));

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = array => {
	return array.slice(array.length - 1, array.length)[0]; //Sin cambiar el contenido del array original
	//return array.splice(0, array.length - 1); //Cambia el contenido del array original. (Devolveria el elemento eliminado)
};
console.log('EJERCICIO 4 (last): ', last(array));
console.log('ARRAY TRAS LOS EJERCICIOS: ', array);

console.log('--------------------------EJERCICIOS 2---------------');

let array2a = [1, 2, 3, 4, 5, 6];
let array2b = [7, 8, 9, 10, 11, 12];
console.log('ARRAYS BASE2: ', array2a, array2b);

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
//devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (...a) => {
	let res = [];
	a.forEach(arr => {
		res.push(...arr);
	});
	return res;
};
console.log('EJERCICIO 2 (concat): ', concat(array2a, array2b));
console.log('ARRAYS TRAS LOS EJERCICIOS: ', array2a, array2b);

console.log('--------------------------EJERCICIOS 3---------------');
let object = {
	name: 'Sergio',
	age: 22,
	city: 'Málaga',
};
// 3. Clone Merge
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
//
function clone(source) {
	return {
		...source,
	};
}

console.log('Objeto Inicial:', object);

console.log('Clone: ', clone(object));

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
//
// Por ejemplo, dados estos 2 objetos:
//
const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = {
	name: 'Luisa',
	age: 31,
	married: true,
};
// el resultado de mezclar a sobre b sería:
// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

function merge(source, target) {
	return {
		...target,
		...source,
	};
}

console.log('Objetos iniciales:', a, b);

console.log('Merge', merge(a, b));

console.log('--------------------------EJERCICIOS 4---------------');
// 4. Read Books
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se
//ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano.
//En caso de no existir el libro devolver false
//TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
//
function isBookRead(books, titleToSearch) {
	let res = books.find(book => book.title == titleToSearch);

	if (res) {
		return res.isRead;
	} else {
		return false;
	}
}
//Ejemplo
const books = [
	{ title: 'Harry Potter y la piedra filosofal', isRead: true },
	{ title: 'Canción de hielo y fuego', isRead: false },
	{ title: 'Devastación', isRead: true },
];

console.log('Array books: ', books);

console.log('Is Book Read? (Devastación)', isBookRead(books, 'Devastación')); // true
console.log(
	'Is Book Read? (Canción de hielo y fuego)',
	isBookRead(books, 'Canción de hielo y fuego'),
); // false
console.log(
	'Is Book Read? (Los Pilares de la Tierra)',
	isBookRead(books, 'Los Pilares de la Tierra'),
); // false
// Opcional
// Utiliza Typescript para añadir los tipos adecuados.
//
// 5. Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
//Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
//
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
//
// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
//
// "Good luck next time!!".
// Ejemplo de uso
class SlothMachine {
	constructor() {
		this.coinCount = 0;
	}
	async play() {
		this.coinCount++;
		let booleanArr = [];
		for (let i = 0; i < 3; i++) {
			booleanArr.push(Math.round(Math.random()));
		}
		let win = true;
		for (let i = 0; i < booleanArr.length; i++) {
			if (!booleanArr[i]) {
				win = false;
			}
		}

		if (win) {
			let msg = `Congratulations!!!. You won ${this.coinCount} coins!!`;
			this.coinCount = 0;
			console.log(msg);
		} else {
			console.log('Good luck next time!!');
		}
	}
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
