var infoTables = {
 "september": [
   {"match": "1","date": "9/01","team1": "U1","team2": "U4","location": "AJ Katzenmaier","time": "9:30 a.m.","status": "end","score1": 4, "score2": 2},
   {"match": "2","date": "9/01","team1": "U3","team2": "U2","location": "Greenbay","time": "1:00 p.m.","status": "end","score1": 2,"score2": 3},
   {"match": "3","date": "9/08","team1": "U5","team2": "U6","location": "Howard A Yeager","time": "9:30 a.m.","status": "end","score1": 3,"score2": 5},
   {"match": "4","date": "9/08","team1": "U6","team2": "U1","location": "Marjorie P Hart","time": "1:00 p.m.","status": "end","score1": 2,"score2": 3},
   {"match": "5","date": "9/15","team1": "U2","team2": "U4","location": "North","time": "9:30 a.m.","status": "end","score1": 3,"score2": 3},
   {"match": "6","date": "9/15","team1": "U3","team2": "U5","location": "AJ Katzenmaier","time": "1:00 p.m.","status": "end","score1": 3,"score2": 2},
   {"match": "7","date": "9/22","team1": "U1","team2": "U3","location": "South","time": "9:30 a.m.","status": "end","score1": 6,"score2": 4},
   {"match": "8","date": "9/22","team1": "U3","team2": "U2","location": "Howard A Yeager","time": "1:00 p.m.","status": "end","score1": 4,"score2": 4},
   {"match": "9","date": "9/29","team1": "U4","team2": "U5","location": "Greenbay","time": "9:30 a.m.","status": "suspended","score1": null,"score2": null},
 ],
 "october": [
   {"match": "10","date": "10/06","team1": "U2","team2": "U5","location": "Marjorie P Hart","time": "9:30 a.m.","status": "to be played"},
   {"match": "11","date": "10/06","team1": "U1","team2": "U6","location": "South","time": "1:00 p.m.","status": "to be played"},
   {"match": "12","date": "10/13","team1": "U3","team2": "U4","location": "Howard A Yeager","time": "9:30 a.m.","status": "to be played"},
   {"match": "13","date": "10/13","team1": "U5","team2": "U1","location": "Greenbay","time": "1:00 p.m.","status": "to be played"},
   {"match": "14","date": "10/20","team1": "U6","team2": "U3","location": "North","time": "9:30 a.m.","status": "to be played"},
   {"match": "15","date": "10/20","team1": "U2","team2": "U4","location": "Marjorie P Hart","time": "1:00 p.m.","status": "to be played"},
   {"match": "16","date": "10/27","team1": "U3","team2": "U1","location": "AJ Katzenmaier","time": "9:30 a.m.","status": "to be played"},
   {"match": "17","date": "10/27","team1": "U3","team2": "U5","location": "Howard A Yeager","time": "1:00 p.m.","status": "to be played"},
 ],
}

//VUE
var app = new Vue({
  el: '#app',
  data: {
	info: infoTables,
  }
});


function carouselOut(){
	$(".btn-home").click(function(){
		$(".carousel").hide()
	})
}
carouselOut();

function hidePages(){
	$("a[href='#home-NYSL']").click(function(){
		$("#home-NYSL").show();
		$("#info-NYSL").hide();
		$("#location-NYSL").hide();
		$("#chats-NYSL").hide();
		$("nav").removeClass("bg-light").removeClass("bg-nav")
		$("nav").addClass("navbar-home");
		$("h1").show();
		$(".myAccordion").removeClass("show");
	})
	$("a[href='#info-NYSL']").click(function(){
		$("#info-NYSL").show();
		$("#home-NYSL").hide();
		$("#location-NYSL").hide();
		$("#chats-NYSL").hide();
		$("nav").removeClass("navbar-home");
		$("nav").addClass("bg-light").addClass("bg-nav");
		$("h1").hide();
	})
	$("a[href='#location-NYSL']").click(function(){
		$("#location-NYSL").show();
		$("#home-NYSL").hide();
		$("#info-NYSL").hide();
		$("#chats-NYSL").hide();
		$("nav").removeClass("navbar-home");
		$("nav").addClass("bg-light").addClass("bg-nav");
		$("h1").hide();
	})
}
hidePages();

window.onresize = function (event) {
  			applyOrientation();
		}
		function applyOrientation() {
  			if (window.innerHeight > window.innerWidth) {
   				
				$(".carousel").hide(); 
			}
  			else {
				$(".carousel").show();
				$("a[href='#home-NYSL']").click(function(){
					$(".carousel").show();
					$(".myAccordion").removeClass("show");
				})
    			}
 		}	

