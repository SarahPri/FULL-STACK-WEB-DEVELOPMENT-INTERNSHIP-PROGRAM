//Output statements
//innerhtml
// function myFunc(){
//     var str = "Welcome to Ongozy Technology Program"
//     const  element = document.getElementById("myH");
//     element.innerHTML = str;
// }
//document.write()
// function myFunc(){
//     var str = "Welcome to Ongozy Technology Program"
//     document.write(str);
// }

//window alert
// function myFunc(){
//     var str = "Welcome to Ongozy Technology Program"
//     window.alert(str);
// }

//console log
// function myFunc(){
//     var str = "Welcome to Ongozy Technology Program"
//     console.log(str);
// }

//input statements
// var x = window.prompt("Enter your First Name")
// element = document.getElementById("myHeader");
// element.innerHTML = x;

//windows.confirm
element = document.getElementById("myH");
if(window.confirm("Do you want to proceed further ? ", "Ok", "Cancel")==true)
    element.innerHTML = "Welcome to Ongozy Technology";
else
element.innerHTML = "Please Come back later"