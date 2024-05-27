   
// Declare an empty array using JS literal notation to store
// student names in future.
var studentNames = ["Hani" , "Ayesha" ,"Areeba" ,"Fizza" , "Amna" ,"Maria"];


//3. Declare and initialize a strings array.
var vegetables = [" Potato", " Onion", " Cucumber", " LadyFinger", " Peas"];

document.write(vegetables + "<br>"  + "<br>") 


//4. Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5];
document.write(numbers + "<br>" + "<br>")


//5. Declare and initialize a boolean array.
var booleArray = [true, false, true, false, true];

document.write(booleArray + "<br>" + "<br>")


//6. Declare and initialize a mixed array.
var mixedArray = [10, "Hello World!", true,];

document.write(mixedArray)


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
document.write("Score of ", studentName[2] , " is " , score[2] , " and percentage is ", (score[2]/totalMarks)*100 + "%")

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var citiesName = ["Karachi" ," Lahore" ,"Islamabad", "Quetta", "Peshawar"]
document.write("<h1>Cities list:</h1>")
document.write(citiesName + "<br>")

var selectedCities = ["Islamabad" ,"Quetta"]

document.write("<h1> Selected cities list:</h1>")
document.write(selectedCities)







