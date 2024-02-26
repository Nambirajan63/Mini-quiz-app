
var correct_que = 0;
var wrong_que = 0;
var attempt_que = 0;


var form_1 = document.getElementById('form-1');
var main_1 = document.getElementById('main-1');
var main_2 = document.getElementById('main-2');
var result_page = document.getElementById('result-page');

var timer1 = document.getElementById('timer-1');
var timer2 = document.getElementById('timer-2');
var time = 3*60;

function updateTime(){
    var minutes = Math.floor(time/60);
    var seconds = time % 60;
    timer1.textContent = minutes.toString().padStart(2,'0') + ':' + seconds.toString().padStart(2,'0');
    timer2.textContent = minutes.toString().padStart(2,'0') + ':' + seconds.toString().padStart(2,'0');
}

function decrementTime(){
    if (time>0){
        time--;
        updateTime();
        setTimeout(decrementTime,1000);
    } else {
        alert("This session closed");
        window.close();
    }
}


function select_ans(ans) {
    if (ans == "correct") {
        document.body.style.backgroundColor = "green";
        correct_que++;
        attempt_que++;
    }
    else {
        document.body.style.backgroundColor = "red";
        wrong_que++;
        attempt_que++;
    }
}

function btn_submit() {
    alert("You have to attempt all questions and if you don't then zero mark will be considered for that question.");

    var user_name = document.getElementById('form-user-name').value;
    var user_id = document.getElementById('form-user-id').value;
    
    document.body.style.height = "100%";
    form_1.style.display = "none";
    main_1.style.display = "flex";

    document.getElementById('user-id').innerHTML = user_id;
    document.getElementById('user-name').innerHTML = user_name;

    decrementTime();
};



function next_btn() {
   
    var user_name = document.getElementById('form-user-name').value;
    var user_id = document.getElementById('form-user-id').value;

    document.body.style.height = "100%";
    main_1.style.display = "none";
    main_2.style.display = "flex";
    window.scrollTo(0, 0);

    document.getElementById('user-id-2').innerHTML = user_id;
    document.getElementById('user-name-2').innerHTML = user_name;    

    decrementTime();

};

function result() {
    if (correct_que >= 8){
        alert("You have passed the test,click the result button below to view your result");
    }
    else {
        alert("You have failed the test,click the result button below to view your result");
    }

    var user_name = document.getElementById('form-user-name').value;
    var user_id = document.getElementById('form-user-id').value;

    document.body.style.height = "100vh";
    main_1.style.display = "none";
    main_2.style.display = "none";
    result_page.style.display = "flex";

    document.getElementById('result-user-name').innerHTML = user_name;
    document.getElementById('result-user-id').innerHTML = user_id;
    document.getElementById('correct-que').innerHTML = correct_que; 
    document.getElementById('wrong-que').innerHTML = wrong_que;
    document.getElementById('attempted-que').innerHTML = attempt_que;
    
    if (correct_que >= 8) {
        document.getElementById('status').innerHTML = "Passed";
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "red";
        document.getElementById('status').innerHTML = "Failed";
    }
};