

function validateForm() {
    var x = document.forms["form"]["fullname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["form"]["email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    var z = document.forms["form"]["text"].value;
    if (z == "") {
        alert("Text must be filled out");
        return false;
    }
}


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

wait(9000);
