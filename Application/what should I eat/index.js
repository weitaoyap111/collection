var time;
var trigger = 0;

function read_and_return_list(){
	return document.getElementById("FoodList").value.split(',');
}

function god_hand() {
	var names = read_and_return_list();
	var index = Math.floor(Math.random() * 1000 % names.length);
	var name = names[index];
	document.getElementById("result").innerHTML = name;
	document.getElementById("result").className = "alert alert-primary";
	time = window.setTimeout(god_hand, 100);
}

function draw(){
	document.getElementById("btn_change_x_location").innerHTML = "Stop";
	// document.getElementById("btn_change_location").disabled = true;
	if(trigger == 0)
	{
		god_hand();
		trigger += 1;
	}
	else
	{
		window.clearTimeout(time);
		document.getElementById("result").className = "alert alert-success";
		document.getElementById("btn_change_x_location").innerHTML = "Start (<s>My Location</s>)";
		// document.getElementById("btn_change_location").disabled = false;
		trigger = 0;
	}
}

var x = document.getElementById("demo");

function getLocation() {
	if(navigator.geolocation) 
	{
		navigator.geolocation.getCurrentPosition(get_place);
	} 
	else { 
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

