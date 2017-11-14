import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function(){

	let house = {
		bedrooms: 2,
		bathrooms: 1.5
	}

	let yearBuilt = '2013';
	let flooring = 'Maple';

	let newHouse = {
		...house,
		bedrooms:3,
		yearBuilt,
		flooring
	}

	console.log(newHouse);
	 // let numbers = [9, 99, 4, 56];

	 // let newNumbers = numbers.map((x) => x + 1);
	 // console.log(newNumbers);

	 // class Person {
	 // 	constructor(name = 'Anonymous', age = '0') {
	 // 		this.name = name;
	 // 		this.age = age;
	 // 	}

	 // 	getGreeting() {
	 // 		return `Hi, my name is ${this.name}.`
	 // 	}

	 // 	getDescription() {
	 // 		return `My name is ${this.name} and I am ${this.age} year(s) old.`
	 // 	}
	 // }

	 // class Programmer extends Person {
	 // 	constructor(name, age, preferredLanguage) {
	 // 		super(name, age);
	 // 		this.preferredLanguage = preferredLanguage;
	 // 	}

	 // 	getGreeting() {
	 // 		if(this.hasLanguage) {
	 // 			return `Hi, I am ${this.name}. I am a ${this.preferredLanguage} developer.`
	 // 		} else {
	 // 			super.getGreeting();
	 // 		}
	 // 	}

	 // 	hasLanguage() {
	 // 		return !!this.preferredLanguage;
	 // 	}
	 // }

	 // let me = new Programmer('Adnan', 29);

	 // console.log(me.getDescription());

	 // let someone = new Programmer('Anela', 30, 'PHP');
	 // console.log(someone.getGreeting());
});