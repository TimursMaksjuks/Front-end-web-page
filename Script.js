let quiz = document.getElementById("test");

quiz.addEventListener("submit", function(event) {

    event.preventDefault();
    
    let first_radio = document.getElementById("radio1").checked;
    let second_radio = document.getElementById("radio2").checked;
    let third_radio = document.getElementById("radio3").checked;
    let fourth_radio = document.getElementById("radio4").checked;
    
    let text_for_errors = "";

    if (first_radio == false && second_radio == false && third_radio == false && fourth_radio == false) {
        text_for_errors += "Please choose radio box\n";
    }


    let name = document.getElementById("fullname").value;

    if (name.trim() == "") {
    text_for_errors += "Please write full name\n";
}
    else if (/[^a-zA-Z\s]/.test(name)) {
    text_for_errors += "Please write full name using letters only\n";
}


    let birth_year = document.getElementById("age").value;

    if (birth_year == "") {
        text_for_errors += "Please write birth year\n";
    } else if (age <= 1900 || age >= 2000) {
        text_for_errors += "Birth year must be between 1900 and 2000\n";
    }
    
    let first_checkbox = document.getElementById("checkbox1").checked;

    let second_checkbox = document.getElementById("checkbox2").checked;
    let third_checkbox = document.getElementById("checkbox3").checked;
    let fourth_checkbox = document.getElementById("checkbox4").checked;
    
    if (first_checkbox == false && second_checkbox == false && third_checkbox == false && fourth_checkbox == false) {
        text_for_errors += "Please choose one checkbox at least\n";
    }
    
    
    if (text_for_errors != "") {
        alert(text_for_errors);
    }
      else {
        quiz.action = "https://www.w3schools.com/action_page.php";
        quiz.submit();
    }
});