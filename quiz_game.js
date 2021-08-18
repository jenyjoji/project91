player1_name = localStorage.getItem("Player1");
player2_name = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


function send(){
    number1 = document.getElementById("first_number").value;
    number2 = document.getElementById("second_number").value;
    answer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + " X " + number2 +"</h4>";
    input_box = "<br> Answer : <input type='text' id='input_answer'> " 
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>"

    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
}

