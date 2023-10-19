document.addEventListener('DOMContentLoaded', function () {
    // Question 2
    var myTest1 = 'This is a string';

    // Question 3
    var studentNum = '200542631';
    var question3Text = document.getElementById('myStudentId');
    if (question3Text) {
        question3Text.textContent = studentNum;
    }

    // Question 4
    var question4Button = document.querySelector('.question4Button');
    var question4Text = document.querySelector('.question4Para');
    if (question4Button && question4Text) {
        question4Button.addEventListener('click', toggleLight);
    }

    function toggleLight() {
        if (question4Button.textContent === 'turn on') {
            question4Button.textContent = 'turn off';
            question4Text.textContent = 'The light is on.';
        } else {
            question4Button.textContent = 'turn on';
            question4Text.textContent = 'The light is off.';
        }
    }

    // Question 5
    var question5a = 1;
    var question5b = 'I am writing Test1';
    var question5c = question5a.toString() + question5b;

    // Question 6
    var question6 = "I will finish the test in 2 hours.";
    question6 = question6.replace('in 2 hours.', 'SOON!');
    question6 = question6.replace('finish', 'conclude');
    console.log(question6);

    // Question 7
    var question7 = ['one', 'two', 'three', 'four', 'I', 'declare', 'thumb', 'war'];
    var question7Answer = question7.join(', ') + '!';
    console.log(question7Answer);

    // Question 8
    var question8 = [ 'pink','orange', 'yellow', 'green', 'blue', 'violet'];
    question8.pop(); 
    question8.unshift('red'); 

    // Question 9
    var timeOfDay;
    var meal;
    switch (timeOfDay) {
        case 'morning':
            meal = 'breakfast';
            break;
        case 'afternoon':
            meal = 'lunch';
            break;
        case 'evening':
            meal = 'dinner';
            break;
        default:
            meal = 'no meal';
    }

    // Question 10
    var ingredients = ['ingredient1', 'ingredient2', 'ingredient3'];
    var i = 0;
    while (i < ingredients.length) {
        console.log(ingredients[i]);
        i++;
    }

    // Question 11
    var question11Para = document.querySelector('.question11Para');
    if (question11Para) {
        question11Para.textContent = greeting('Christy');
    }

    function greeting(name) {
        return `Hello, ${name}. How are you today?`;
    }

    // Question 12
    var question12Div = document.getElementById('question12');
    if (question12Div) {
        var image = document.createElement('img');
        image.src = 'img1.jpg';
        question12Div.appendChild(image);
    }

    // Question 13
    function question13Fun() {
        console.log('<button id="question13">Go!</button>');
    }
    var question13Btn = document.querySelector('#question13');
    if (question13Btn) {
        question13Btn.addEventListener('click', question13Fun);
    }

    // Question 14
    let question14 = ["flower", 25, [2, 3, 6], true];
    console.log(question14[2][1]); 

    // Question 15
    function disableEventListener() {
        clearInterval(intervalId);
    }

    let intervalId;
    var question15BtnA = document.querySelector('#question15a');
    var question15BtnB = document.querySelector('#question15b');
    if (question15BtnA && question15BtnB) {
        question15BtnA.addEventListener('click', () => {
            intervalId = setInterval(() => {
                console.log("I am infinite!");
            }, 1000);
        });
        question15BtnB.addEventListener('click', disableEventListener);
    }

    // Question 16
    var employeeArray = [
        "200465123: Francoise Rautenstrauch",
        "200465124: Kendra Loud",
        "200465125: Lourdes Bauswell",
        "200465126: Hannah Edmison",
        "200465127: Tom Loeza"
    ];

    var tfoot = document.querySelector('table tfoot');
    if (tfoot) {
        employeeArray.forEach(employee => {
            var [id, name] = employee.split(': ');
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td1.textContent = name;
            td2.textContent = id;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tfoot.appendChild(tr);
        });
    }
});
