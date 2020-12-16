var name = prompt('Enter your name,please:');

function printName(name) {
    alert("Hello " + name);
}
printName(name);
var age = prompt('Enter your age,please:');
var youth = "Welcome to youth Services";
var Teen = "Welcome to Teen Services";

function printage(age) {
    if (age > 20) {
        alert(youth);
    }
    else if (age < 20) {
        alert(Teen);
    }
}
printage(age);
var hobbies = prompt('Please ,choos only one hobby between these :(reading, photographing ,drawin,yoga)');
//var reading = prompt('Moving to the reading webpages,Please wait... ');
//var photographing = prompt('Moving to the photographing webpages,Please wait... ');
//var drawin = prompt('Moving to the drawin webpages,Please wait ');
//var yoga = prompt('Moving to the yoga webpages,Please wait... ');

function hobby(hobbies) {
    if (hobbies == "reading") {
        alert("Moving to the reading webpages,Please wait...")
    } else if (hobbies == "photographing") {
        alert("Moving to the photographing webpages,Please wait...");
    } else if (hobbies == "Moving to the drawing webpages,Please wait...") {
        alert(drawin);
    }
    else {
        alert("Moving to the yoga webpages,Please wait...");
    }
}
hobby(hobbies);