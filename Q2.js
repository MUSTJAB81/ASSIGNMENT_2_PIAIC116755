
var mathNumber = prompt("Enter Math Marks");
var engNumber = prompt("Enter English Marks")
var sciNumber = prompt ("Enter Science Marks")

var sum = Number(mathNumber) + Number(engNumber) + Number(sciNumber)

var percentage = sum/300*100


if(percentage>=80){
    document.write("PERCENTAGE % =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",+percentage)
    document.write("<br>");
    document.write("<br>");
    document.write("GRADE = A-ONE")
    document.write("<br>");
    document.write("<br>");
    document.write("REMARKS = EXCELLENT");
    }
    else if(percentage>=70){
    document.write("PERCENTAGE % =",+percentage)
    document.write("<br>");
    document.write("<br>");
    document.write("GRADE = A")
    document.write("<br>");
    document.write("<br>");
    document.write("REMARKS = GOOD");
    }
    else if(percentage>=60){
     document.write("PERCENTAGE % =",+percentage)
    document.write("<br>");
    document.write("<br>");
    document.write("GRADE = B")
    document.write("<br>");
    document.write("<br>");
    document.write("REMARKS = YOU NEED TO IMPROVE");
    }
else{
    document.write("PERCENTAGE % =",+percentage)
    document.write("<br>");
    document.write("<br>");
    document.write("FAIL");
    document.write("<br>");
    document.write("<br>");
    document.write("REMARKS = SORRY");
}