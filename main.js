function generateSerial() {

    document.getElementById("serial").remove();
    document.getElementById("sumEven").remove();
    document.getElementById("sumLessThanFive").remove();
    document.getElementById("printObject").remove();


    var randomSerial = [];
    for (var i = 0; i < 10; i++) {
        randomSerial.push(Math.floor(Math.random() * 10));
    }

    var sumEven = 0;
    var sumLessThanFive = 0;
    for (var i = 0; i < randomSerial.length; i++) {
        if (randomSerial[i] % 2 == 0) {
            sumEven += randomSerial[i];
        }
        if (i < 5) {
            sumLessThanFive += randomSerial[i];
        }
    }

    var serialElement = document.createElement("p");
    serialElement.id = "serial";
    var serialText = document.createTextNode("Serial: " + randomSerial.join(""));
    serialElement.appendChild(serialText);
    document.body.appendChild(serialElement);

    var sumEvenElement = document.createElement("p");
    sumEvenElement.id ="sumEven";
    var sumEvenText = document.createTextNode("Sum of Even numbers: " + sumEven);
    sumEvenElement.appendChild(sumEvenText);
    document.body.appendChild(sumEvenElement);

    var sumLessThanFiveElement = document.createElement("p");
    sumLessThanFiveElement.id = "sumLessThanFive";
    var sumLessThanFiveText = document.createTextNode("Sum of numbers less than index 5: " + sumLessThanFive);
    sumLessThanFiveElement.appendChild(sumLessThanFiveText);
    document.body.appendChild(sumLessThanFiveElement);


}
function printOb(){
    var user = {
        name : 'Ahmed',
        phone : '0992546813' ,
        age : 24,
        Email : 'ahmedmhmad021@gmail.com'

    }
    console.log(user);
    console.log(user.name);
    document.write("User Name is : " + user.name + "<br/>");
    console.log(user.phone);
    document.write("User Phone is : " + user.phone + "<br/>");
    console.log(user.age);
    document.write("User Age is : " + user.age + "<br/>");
    console.log(user.Email);
    document.write("User Email is : " + user.Email + "<br/>");
    // or
    console.log(user.name , user.phone , user.age , user.Email);
    document.write(user.name , user.phone , user.age , user.Email);
}