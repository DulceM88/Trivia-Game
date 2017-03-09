
var correct;
var wrong;
//interval used for timer object
var intervalId;
// array of objects, each object is a trivia question
var trivia = [
	{
	question: "what is benders twin brother named?",
	choices: ["flexo", " hermes"," Robot Devil"," calculon"],
	answer:0
	},
	{
	question:"Benders antenna has been used for which of the following: ",
	choices:["a beer pump lever"," a timer button for his internal digital camera"," a measure of his manhood"," all of the above"],
	answer:3	
	},
	{
	question: "who is the only member of the regular cast not to voice multiple characters?",
	choices: ["Billy West", "Matt Groening","Katy Segal","John DiMaggio "],
	answer:2
	},
	{
	question: " What is frys favorite song",
	choices: ["the final countdown", "walking on sunshine","safety dance","insane in the membrane"],
	answer:1
	},
	{
	question: "which of these characters has not appeared in every single episode of the show?:",
	choices: ["professor Farnsworth", "fry","Leela","Bender"],
	answer:0
	},
	{
	question: "which of these characters does Phil Lamar voice?",
	choices: ["Hermes Conrad", "Head of the ACLU","Antonio Calculon Jr.","All of the Above"],
	answer:3
	},
	{
	question: "what is the robot officer that says 'awww yeah' all the time named",
	choices: ["zapp", "http","URL","calculon"],
	answer:2
	},
	{
	question: "what is Kif's home planet?",
	choices: ["Amphibios 9", "Omocron Persei 8","eternium","Cygnus 5"],
	answer:0
	},
	{
	question: "What field does Amy Wong have a degree in?",
	choices: ["Engineering", "Applied Physics","History","Robo-American Studies"],
	answer:1
	},
	{
	question: "Whats benders middle name?",
	choices: ["Ray", "Lee","Jay","Bending"],
	answer:3
	}

];
//this will be our timer for the quiz, counts up every second from 0
var counter= {
	time: 0,
	//function which starts timer, sets interval for count
	start: function() {

    intervalId = setInterval(counter.count, 1000);
	},
	//function which adds 1 at each interval to the counter
	count: function() {
    	counter.time++;
	    var converted = counter.timeConverter(counter.time);
	    //console.log(converted);
	 //this displays our counter in our HTML
    $("#display").html(converted);
 	 },
    //converts the time from seconds to minutes
    timeConverter: function(t) {

	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	      minutes = "00";
	    }
	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
  }
}

//dynamically adds start text to button
$("#button1").html("start");
//event listener for button, triggers function to begin quiz if pressed
$("#button1").on("click", displayQuiz);


//function which displays full quiz
function displayQuiz(){
	
	//function call to start counter
	counter.start();
	//changes text in button to done
	$("#button1").html("Done");
	//loop which displays all questions and possible choices
	for(var i= 0; i<trivia.length; i++){
	var questionDiv= $("<div class= 'question'>").html(trivia[i].question);
	var choicesDiv= $("<div class= 'choices'>");//.html(trivia[i].choices);
	
	

	// attempted to create radio buttons for each array item inside the question object,
	//only one per question displays
	var choice = trivia[i].choices;
	console.log(choice);
	//console.log(trivia[0].choices[3]);
	//var which creates a list item tag, attaches value to radio button and creates radio button. 
	// also appends button to our html div for answer choices
	var choiceButton= $("<li><input type='radio' value= '"+ i + "'name='dynradio' />" + choice + "</li>").appendTo(choicesDiv);
	//appends our choices div to our question div
	questionDiv.append(choicesDiv);
	//displays full question with choices in html
	$("#slide-holder").append(questionDiv); 

	//event listener for button, triggers function which displays score 
	$("#button1").on("click",displayScore);
	}
	//timeout function which stops quiz after 3minutes
	var minute= (1000*60);
	setTimeout(displayScore, minute*3);
	
	
}

	

//function to evaluate user input  and display score 
function displayScore(){


	$("#button1").html("Try again?");
	$("#button1").on("click",displayQuiz);
	//this would display score 
	$("#slide-holder").html("you scored"+ correct+" correct! and "+ wrong +"incorrect");
	//appends picture of cast
	var ramaFan= $("<img class='img-responsive' src= 'assets/images/Futurama-cast.png'>");
	$("#slide-holder").append(ramaFan);
    }


