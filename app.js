//  Chapther no  14: (Array)

//  Qno: 1
//  let studentName = [];

// Qno: 2
// let studentNamesArray = {
//     names: []
// };

// Qno: 3
// let stringsArray = ["SMIT", "Institute"];

// Qno: 4
// let num = [5,7,8];

// Qno: 5
// let boolean = [true , false];

// Qno: 6
// let mixedArray = ["Hammad" , 20, true ];

// Qno: 7
// let qualificationPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write( `<h1>Qualifications:</h1><br>1) ${qualificationPak[0]}<br>2) ${qualificationPak[1]}<br>3) ${qualificationPak[2]}<br>4) ${qualificationPak[3]}<br>5) ${qualificationPak[4]}<br>6) ${qualificationPak[5]}<br>7) ${qualificationPak[6]}<br>8) ${qualificationPak[7]}`) ;

// Qno: 8
// let studentNames = ["Michael", "John", "Tony"];
// let studentScores = [];
// // Get scores for each student
// for (let i = 0; i < studentNames.length; i++) {
//     let score = +prompt(`Enter score for ${studentNames[i]} (out of 500):`);
//     studentScores.push(score);
// }
// // Display scores and percentages
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / 500) * 100;
//     console.log(`${studentNames[i]} scored ${studentScores[i]} out of 500, ${percentage.toFixed(2)}%`);
// }

// Qno: 9

// A)
// var colors = ["Red", "Green", "Blue"];
// document.write("<h2>Initial Array:</h2>");
// document.write(colors.join(", ") + "<br>");
// B)

// var  colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// document.write("<h2>Array after adding color to beginning:</h2>");
// colors.unshift(colorToAddBeginning);
// document.write(colors.join(", ") + "<br>");
// var  colorToAddEnd = prompt("Enter a color to add to the end:");
// document.write("<h2>Array after adding color to end:</h2>");
// colors.push(colorToAddEnd);
// document.write(colors.join(", ") + "<br>");
// C)

// var  colorToAddMiddle = prompt("Enter a first  color to add in the middle:");
// var  colorToAddMiddle2 = prompt("Enter a second color to add in the middle:");
// document.write("<h2>Array after adding two more colors:</h2>");
// colors.splice(2, 0, colorToAddMiddle, colorToAddMiddle2);
// document.write(colors.join(", ") + "<br>");
// D)

// colors.shift();
// document.write("<h2>Array after deleting the first color:</h2>");
// document.write(colors.join(", ") + "<br>");
//  E)

// colors.pop();
// document.write("<h2>Array after deleting the last color:</h2>");
// document.write(colors.join(", ") + "<br>");
// F)

// var indexToAdd = +prompt("Enter the index(In Numbers) where you want to add the color:");
// let colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<h2>Array after adding color at specific index:</h2>");
// document.write(colors.join(", ") + "<br>");
// G)

// var indexToDelete = +prompt("Enter the index(In Numbers) where you want to delete the color:");
// var numberToDelete = +prompt("Enter the number of colors you want to delete:");
// colors.splice(indexToDelete, numberToDelete);
// document.write("<h2>Array after deleting color at specific index:</h2>");
// document.write(colors.join(", ") + "<br>");

// Qno:  10
// var scores = [320, 230, 480, 120];
// document.write("<h2>Score of Students:</h2>");
// document.write(scores.join(", ") + "<br>");
// document.write("<h2>Ordered Scores of Students:</h2>");
// scores.sort();
// document.write(scores.join(", ") + "<br>");

// Qno: 11
// var  cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<h2>Cities List:</h2>");
// document.write(cities.join(", ") + "<br>");
// var selectedCities = cities.slice(2, 4);
// document.write("<h2>Selected Cities List:</h2>");
// document.write(selectedCities.join(", ") + "<br>");

// Qno: 12
// var array = ["This", "is", "my", "cat"];
// document.write("<h2>Array:</h2>");
// document.write(array.join(" ") + "<br>");
// var string = array.join(" ");
// document.write("<h2>String:</h2>");
// document.write(string);

// Qno: 13
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h2>Devices:</h2>");
// document.write(devices.join(", ") + "<br>");
// document.write("<h2>Out:</h2>");
// var out = devices.shift();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.shift();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.shift();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.shift();
// document.write(out);

// Qno: 14
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h2>Devices:</h2>");
// document.write(devices.join(", ") + "<br>");
// document.write("<h2>Out:</h2>");
// var out = devices.pop();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.pop();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.pop();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.pop();
// document.write(out);

// Qno: 15
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write(phoneManufacturers)