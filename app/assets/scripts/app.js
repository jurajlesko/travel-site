import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobilMenu = new MobileMenu();

new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');




/*var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from "./modules/Person";

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " owes 0$ in taxes");
	}
}

alert("this is a 1f3");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Doe", "orange");
jane.greet();
jane.payTaxes();*/