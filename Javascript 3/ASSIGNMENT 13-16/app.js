   
//1: Declare an empty array using JS literal notation to store
// student names in future.
var studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var objectNotat = new Array ();

//3. Declare and initialize a strings array.
var vegetables = [" Potato", " Onion", " Cucumber", " LadyFinger", " Peas"];

//4. Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5];



//5. Declare and initialize a boolean array.
var booleArray = [true, false, undefined, null, 0];


//6. Declare and initialize a mixed array.
var mixedArray = [10, "Hello World!", true,];


// //7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:
var qualifications = ["1) SSC" + "<br>" + "2) HSC" + "<br>" + "3) BCS" + "<br>" + "4) BS" + "<br>" + "5) BCOM" + "<br>" + "6) MS" + "<br>" + "7) M. Phil." + "<br>" + "8) PhD"];
document.write("<h1>Qualifications:</h1>")

document.write(qualifications + "<br>" + "<br>")

// 8:Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
   
var studentName = ["Michael" ,"John" ,"Tony"];
var score = [320,230,480];
var totalMarks = 500;

document.write("Score of ", studentName[0] , " is " , score[0] , " and percentage is ", (score[0]/totalMarks)*100 + "%" + "<br>")
document.write("Score of ", studentName[1] , " is " , score[1] , " and percentage is ", (score[1]/totalMarks)*100 + "%" + "<br>")
document.write("Score of ", studentName[2] , " is " , score[2] , " and percentage is ", (score[2]/totalMarks)*100 + "%" + "<br>" + "<br>" + "<br>")

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


var numbers = [320,230,480,120];
document.write("Sores of Students:" + numbers + "<br>")
document.write("Ordered Score of Student:" + numbers.sort());


//11: Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var citiesName = ["Karachi" ," Lahore" ,"Islamabad", "Quetta", "Peshawar"]
document.write("<h1>Cities list:</h1>")
document.write(citiesName + "<br>")

var selectedCities = citiesName.slice(2,4)
document.write("<h1>Selected Cities</h1>")
document.write(selectedCities)


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


var arr = ["This", "is",  "my",  "cat"];
var arrJoin = arr.join(" ");
document.write("<h1>Array:</h1>" + arr + "<br>");
document.write("<h1>Strings:</h1>" + arrJoin + "<br><br>");



// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var devices = ["keyboard" , "mouse", "printer" , "monitor"]
document.write("<h1>Devices</h1>" + devices + "<br>")

var out= devices.shift()
document.write("<h1>Out:</h1>" + out + "<br>");


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


var devicesLast = ["keyboard" , "mouse", "printer" , "monitor"]
document.write("<h1>Devices</h1>" + devicesLast + "<br>")

var out= devicesLast.pop()
document.write("<h1>Out:</h1>" + out + "<br><br><br>")




// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var manufacturers = ["Apple", "Samsung", "Motrolla" , "Nokia" , "Sony" , "Haier"];
document.write('<select>')
document.write('<option value = "' +manufacturers[0] + '">' + manufacturers[0] + '</option>' )
document.write('<option value = "' +manufacturers[1] + '">' + manufacturers[1] + '</option>' )
document.write('<option value = "' +manufacturers[2] + '">' + manufacturers[2] + '</option>' )
document.write('<option value = "' +manufacturers[3] + '">' + manufacturers[3] + '</option>' )
document.write('<option value = "' +manufacturers[4] + '">' + manufacturers[4] + '</option>' )
document.write('<option value = "' +manufacturers[5] + '">' + manufacturers[5] + '</option>' )

document.write('</select>' + "<br><br><br>")


// Initialize an array with color names
var colors = ["Red", "Green", "Blue"];
document.write("<b>Initial Colors:</b><br>" + colors.join(", ") + "<br><br>");

// a. Ask the user what color to add to the beginning & add that color
var colorBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorBeginning);
document.write("<b>After adding color to the beginning:</b><br>" + colors.join(", ") + "<br><br>");

// b. Ask the user what color to add to the end & add that color
var colorEnd = prompt("Enter a color to add to the end:");
colors.push(colorEnd);
document.write("<b>After adding color to the end:</b><br>" + colors.join(", ") + "<br><br>");

// c. Add two more colors to the beginning
colors.unshift("Purple", "Orange");
document.write("<b>After adding two colors to the beginning:</b><br>" + colors.join(", ") + "<br><br>");

// d. Delete the first color in the array
colors.shift();
document.write("<b>After deleting the first color:</b><br>" + colors.join(", ") + "<br><br>");

// e. Delete the last color in the array
colors.pop();
document.write("<b>After deleting the last color:</b><br>" + colors.join(", ") + "<br><br>");

// f. Ask the user at which index to add a color & color name
var indexToAdd = (prompt("Enter the index at which you want to add a color:"));
var colorToAddAtIndex = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("<b>After adding color at index " + indexToAdd + ":</b><br>" + colors.join(", ") + "<br><br>");

// g. Ask the user at which index to delete color(s) & how many colors
var indexToDelete = (prompt("Enter the index from which you want to delete color(s):"));
var numberOfColorsToDelete = (prompt("Enter the number of colors you want to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<b>After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ":</b><br>" + colors.join(", ") + "<br><br>");

