
var questions = [

    'Hello am John Doe, Whats your name ?',

    'Where are you from?',
         
    'What\'s your age?',

    

     
    'It was nice talking you :)'

];

var number=0
var output = document.querySelector('#result');
output.innerHTML = questions[0]
var inputBox=document.querySelector('#ans');
var chatBox = document.querySelector('#chatbox');

function showResponse(){
	var input = inputBox.value;
	if(inputBox.value===""){
		alert("please type a message")
	}else{
		if(number===0){
			output.innerHTML=`<p>Hello ${input} nice meeting you</p>`
			inputBox.value=""
			inputBox.setAttribute("placeholder", "John typing");
			number++
			setTimeout(changeQuestion, 4000)
		}else if(number===1){
			output.innerHTML=`<p>${input} is an awesome place</p>`
			inputBox.value=""
			inputBox.setAttribute("placeholder", "John typing");
			++number
			setTimeout(changeQuestion, 4000)

		}else if(number===2){
			output.innerHTML=`<p>it means you are born in ${2020-input}</p>`
			inputBox.value=""
			inputBox.setAttribute("placeholder", "John typing");
			++number
			setTimeout(changeQuestion, 4000)

		}
	}
}
function changeQuestion(){
	inputBox.setAttribute("placeholder", "Enter your response");
	output.innerHTML=questions[number];
	if(number===3){
		output.innerHTML=`It was nice talking to you :)`;
		inputBox.value="";
		document.querySelector(".input").style.display="none"
	}
}
 function submitMessage(){
 	showResponse();
 }
 