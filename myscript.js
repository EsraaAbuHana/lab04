var username = prompt('Enter your name,please:');

function printName(username) {
    alert("Hello " + username);
}
 printName(username);

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
var reading = prompt('Moving to the reading webpages,Please wait... ');
var photographing = prompt('Moving to the photographing webpages,Please wait... ');
var drawin = prompt('Moving to the drawin webpages,Please wait ');
var yoga = prompt('Moving to the yoga webpages,Please wait... ');

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


//for read 08 while for 
//
 let placetacke = promot('Please enter where you prefare to attend in the indoors or outdoors? ');
let numperson = prompt('For how many persons you want to book ?');

if (placetacke == 'indoors' || placetacke == 'outdoors') {
    alert(placetacke);
 }

//placetacke xyz T || T 
// t | t t
// t | f t
// f| t t 
// f|f f

// t & t t
// t& f f
// f&t f
// f&f f

// indoors
// f | T T
// while (placetacke != 'indoors' || placetacke != 'outdoors') {
//     placetacke = prompt('please choose only between center or outdoors ');
// }

// xyz
// T & T t 
// indoors
// f & T f
function checkorder() {
    let placetacke = prompt('Please enter where you prefare to attend in the indoors or outdoors? ');
    

    if (placetacke == 'indoors' || placetacke == 'outdoors') {
        alert(placetacke);
    }
    while (placetacke !== 'indoors' && placetacke !== 'outdoors') {
        placetacke = prompt('please choose only between indoors or outdoors ');
    }

    let place = '';
    if (placetacke === 'indors') {
        place = '<img src="https://bestonebest.com/wp-content/uploads/2019/09/%D9%84%D9%8A-%D9%84%D9%8A.jpg"/>';
    } else if (placetacke = 'outdoors') {
        place = '<img src="https://layalina.awicdn.com/site-images/sites/default/files/prod/album/a/4/324679/128252226693267dc10d48b51ddd8019f422c085-030819214147.jpg?preset=v3.0_1200xDYN&save-png=1&rnd=7.2.0&croptop=1"/>'
    }
document.write('<p>'+ place + '</p>');
}
checkorder();

 //let number = function () {
   //  let count = prompt('for how many persons you want to book?')
 //};

 //while (count == '' || isNaN(count)) {
   //  count = prompt('please,enter a number of persons')
 //}
 //return count;

 //let shownumper = function () {
     //let enrolled = number();
   //  let result = '';
 
 //for (let i = 0; i < enrolled; i++) {
  //   result = result +'<img src=https://www.fay3.com/render/1604344646/C4afOuxsNv.png>'+i;

//}}

//document.write('<p>'+result+'<p>');
//shownumper();
