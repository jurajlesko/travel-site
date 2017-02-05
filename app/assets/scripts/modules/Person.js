class Person {
	constructor(fullname, favColor) {
		this.name = fullname;
		this.favoriteColor = favColor;
	}

	greet() {
		console.log("Hi there, my name is " + this.name + " nad my favorite color is " + this.favoriteColor + ".");
	}
}

export default Person;