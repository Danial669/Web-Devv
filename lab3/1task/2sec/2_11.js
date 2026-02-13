// Task 1
if (age >= 14 && age <= 90);

// Task 2
if (!(age >= 14 && age <= 90));

// Task 3
let username = prompt("Who's there?", '');
if (username = "Admin") {
    pas = prompt("Password: ");

    if (pas == "TheMaster") alert("Welcome!");
    else if (pas == '' || pas == null) alert("Canceled");
    else alert("Wrong password");
}
else if (username == '' || username == null) alert("Canceled");
else alert("I don't know you");