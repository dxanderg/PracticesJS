function person(fullName, favColor) {
	this.name = fullName,
	this.favColor = favColor,
	this.greet = function(){
		console.log('Hey my name is ' + fullName + " and my favorite color is " +  favColor + ".")
	}
}

var jude = new person('Jude Sanchez', 'Blue')
jude.greet()

var charlize = new person('Charlize Theron', 'Pink')
charlize.greet()