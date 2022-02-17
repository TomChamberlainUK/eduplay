$(document).ready(function() {

//.....Message Popups.....//

	//Hide on startup
	$("#message-popup").hide();
	$("#credits").hide();
	$("#level-2popup").hide();
		$("#char02a").hide();
		$("#char02c").hide();
	//Level 2 popup
	$("#test-button").click(function() {
		$("#message-popup").fadeIn();
		$("#level-2popup").show();
		if ($("#reactant01-imagea").hasClass("visible") && $("#reactant02-imageb").hasClass("visible")) {
			$("#char02a").delay(1000).fadeIn("slow");
			$("#level-2").addClass("correct")
			$("#lvl02-msg04a").show();
		}
		else {
			$("#char02c").delay(1000).fadeIn("slow");
			$("#lvl02-msg04b").show();
			$("#level-2").removeClass("correct");
		}
	});
	//Close popup
	$("#popup-close").click(function() {
		$("#message-popup").fadeOut(function() {
			if ($("#hints-popup").hasClass("active")) {
				$("#hints-popup").removeClass("active");
				$("#lvl01-hint").hide();
				$("#lvl02-hint").hide();
				$("#lvl06-hint").hide();
			}
			if ($("#level-2popup").hasClass("active")) {
				if ($("#level-2").hasClass("correct")) {
					$("#chatbox").addClass("2d-a");
					$("#level-2popup").removeClass("active")
				}
				else {
					$("#chatbox").addClass("2d-b");
					$("#level-2popup").removeClass("active")
				}
				$("#level-2popup").removeClass("active")
				$("#instructions").show();
				$("#half-fade").fadeIn("slow");
				$("#worm").animate({top: 500}, "slow");
				$("#chatbox").animate({right: 20}, "slow");
			}
			else if ($("#level-6popup").hasClass("active1")) {
				$("#level-6popup").removeClass("active1");
				$("#lvl06-msg02").hide();
				$("#lvl06-msg03").show();
				$("#quiz-q1a1").hide();
				$("#quiz-q1a2").hide();
				$("#quiz-q1a3").hide();
				$("#quiz-q1a4").hide();
				$("#quiz-q2a1").show();
				$("#quiz-q2a2").show();
				$("#quiz-q2a3").show();
				$("#quiz-q2a4").show();
				$("#quiz-a1").removeClass("q1");
				$("#quiz-a2").removeClass("q1");
				$("#quiz-a3").removeClass("q1");
				$("#quiz-a4").removeClass("q1");
				$("#quiz-a1").addClass("q2");
				$("#quiz-a2").addClass("q2");
				$("#quiz-a3").addClass("q2");
				$("#quiz-a4").addClass("q2");
			}
			else if ($("#level-6popup").hasClass("active2")) {
				$("#level-6popup").removeClass("active2");
				$("#lvl06-msg03").hide();
				$("#lvl06-msg04").show();
				$("#quiz-q2a1").hide();
				$("#quiz-q2a2").hide();
				$("#quiz-q2a3").hide();
				$("#quiz-q2a4").hide();
				$("#quiz-q3a1").show();
				$("#quiz-q3a2").show();
				$("#quiz-q3a3").show();
				$("#quiz-q3a4").show();
				$("#quiz-a1").removeClass("q2");
				$("#quiz-a2").removeClass("q2");
				$("#quiz-a3").removeClass("q2");
				$("#quiz-a4").removeClass("q2");
				$("#quiz-a1").addClass("q3");
				$("#quiz-a2").addClass("q3");
				$("#quiz-a3").addClass("q3");
				$("#quiz-a4").addClass("q3");
			}
			else if ($("#level-6popup").hasClass("active3")) {
				$("#level-6popup").removeClass("active3");
				$("#lvl06-msg04").hide();
				$("#lvl06-msg05").show();
				$("#quiz-q3a1").hide();
				$("#quiz-q3a2").hide();
				$("#quiz-q3a3").hide();
				$("#quiz-q3a4").hide();
				$("#quiz-q4a1").show();
				$("#quiz-q4a2").show();
				$("#quiz-q4a3").show();
				$("#quiz-q4a4").show();
				$("#quiz-a1").removeClass("q3");
				$("#quiz-a2").removeClass("q3");
				$("#quiz-a3").removeClass("q3");
				$("#quiz-a4").removeClass("q3");
				$("#quiz-a1").addClass("q4");
				$("#quiz-a2").addClass("q4");
				$("#quiz-a3").addClass("q4");
				$("#quiz-a4").addClass("q4");
			}
			else if ($("#level-6popup").hasClass("active4")) {
				$("#level-6popup").removeClass("active4");
				$("#lvl06-msg05").hide();
				$("#lvl06-msg06").show();
				$("#quiz-q4a1").hide();
				$("#quiz-q4a2").hide();
				$("#quiz-q4a3").hide();
				$("#quiz-q4a4").hide();
				$("#quiz-q5a1").show();
				$("#quiz-q5a2").show();
				$("#quiz-q5a3").show();
				$("#quiz-q5a4").show();
				$("#quiz-a1").removeClass("q4");
				$("#quiz-a2").removeClass("q4");
				$("#quiz-a3").removeClass("q4");
				$("#quiz-a4").removeClass("q4");
				$("#quiz-a1").addClass("q5");
				$("#quiz-a2").addClass("q5");
				$("#quiz-a3").addClass("q5");
				$("#quiz-a4").addClass("q5");
			}
			else if ($("#level-6popup").hasClass("active5")) {
				$("#quiz-q5a1").hide();
				$("#quiz-q5a2").hide();
				$("#quiz-q5a3").hide();
				$("#quiz-q5a4").hide();
				$("#quiz-a1").removeClass("q5");
				$("#quiz-a2").removeClass("q5");
				$("#quiz-a3").removeClass("q5");
				$("#quiz-a4").removeClass("q5");
				$("#chatbox").removeClass("6b");
				$("#chatbox").addClass("6c");
				$("#lvl06-msg06").hide();
				$("#lvl06-msg07").show();
				$("#footnote").show();
			}
			$("#credits").hide();
			$("#level-2popup").hide();
				$("#char02a").hide();
				$("#char02c").hide();
				$("#char02b").show();
			$("#level-6popup").hide();
				$("#q1-a").hide();
				$("#q2-a").hide();
				$("#q3-a").hide();
				$("#q4-a").hide();
				$("#q5-a").hide();	
				$("#q1-b").hide();
				$("#q2-b").hide();
				$("#q3-b").hide();
				$("#q4-b").hide();
				$("#q5-b").hide();
		});
	});
	
//.....Chat Popups.....//
	
	//Instructions cycle
	//Hide on startup
	$("#quiz-answers").hide();
	$("#lvl01-msg01").hide();
	$("#lvl01-msg02").hide();
	$("#lvl01-msg03").hide();
	$("#lvl01-msg04").hide();
	$("#lvl02-msg01").hide();
	$("#lvl02-msg02").hide();
	$("#lvl02-msg03").hide();
	$("#lvl02-msg04a").hide();
	$("#lvl02-msg04b").hide();
	$("#lvl02-msg05").hide();
	$("#lvl02-msg06").hide();
	$("#lvl06-msg01").hide();
	$("#lvl06-msg02").hide();
	$("#lvl06-msg03").hide();
	$("#lvl06-msg04").hide();
	$("#lvl06-msg05").hide();
	$("#lvl06-msg06").hide();
	$("#lvl06-msg07").hide();
	$("#chatbox").click(function() {
		//Instructions 1a
		if ($(this).hasClass("1a")){
			$(this).removeClass("1a");
			$(this).addClass("1b");
			$("#lvl01-msg01").hide();
			$("#lvl01-msg02").show();
		}
		//Instructions 1b
		else if ($(this).hasClass("1b")){
			$(this).removeClass("1b");
			$(this).addClass("1c");
			$("#half-fade").fadeOut("slow");
			$("#worm").animate({top: 768}, "slow");
			$("#chatbox").animate({right: -767}, "slow", function() {
				$("#parasol-open").addClass("clickable");
				$("#instructions").hide();
			});
		}
		//Instructions 1c
		else if ($(this).hasClass("1c")){
			$(this).removeClass("1c");
			$(this).addClass("1d");
			$("#half-fade").fadeOut("slow");
			$("#worm").animate({top: 768}, "slow");
			$("#chatbox").animate({right: -767}, "slow" ,function() {
				$("#watering-can").addClass("clickable");
				$("#instructions").hide();
			});
		}
		//Instructions 1d
		else if ($(this).hasClass("1d")){
			$(this).removeClass("1d");
			$(this).addClass("2a");
			$("#half-fade").fadeOut("slow");
			$("#worm").animate({top: 768}, "slow");
			$("#chatbox").animate({right: -767}, "slow", function() {
				$("#progress1").removeClass("hidden");
				$("#progress1").addClass("visible");
				$("#lvl01-ind").addClass("lvl-complete");
				$("#instructions").hide();
				$("#black-transition").fadeIn(function() {
					$("#level-1").removeClass("active-page");
					$("#level-select").addClass("active-page2");
					$("#black-transition").fadeOut();
				});
			});
		}
		//Instructions 2a
		else if ($(this).hasClass("2a")){
			$(this).removeClass("2a");
			$(this).addClass("2b");
			$("#lvl02-msg01").hide();
			$("#lvl02-msg02").show();
		}
		//Instructions 2b
		else if ($(this).hasClass("2b")){
			$(this).removeClass("2b");
			$(this).addClass("2c");
			$("#half-fade").fadeOut("slow");
			$("#worm").animate({top: 768}, "slow");
			$("#chatbox").animate({right: -767}, "slow", function() {
				$("#instructions").hide();
				$("#lvl02-msg02").hide();
			});
		}
		//Instructions 2c
		else if ($(this).hasClass("2c")){
			$(this).removeClass("2c");
			$("#half-fade").fadeOut("slow");
			$("#worm").animate({top: 768}, "slow");
			$("#chatbox").animate({right: -767}, "slow", function() {
				$("#instructions").hide();
				$("#lvl02-msg03").hide();
			});
		}
		//Instructions 2d-a
		else if ($(this).hasClass("2d-a")){
			$(this).removeClass("2d-a");
			$(this).addClass("2e");
			$("#lvl02-msg04a").hide();
			$("#lvl02-msg05").show();
		}
		//Instructions 2d-b
		else if ($(this).hasClass("2d-b")){
			$("#black-transition").fadeIn(function() {
				$("#product01a").hide();
				$("#product02a").hide();
				$("#liquids").hide();
				$("#gases").show();
				$("#carbon-dioxide").show();
				$("#oxygen").show();
				$("#hydrogen").show();
				$("#acid").show();
				$("#water").show();
				$("#oil").show();
				$("#instructions").hide();
				$("#reactant01-imagea").addClass("hidden");
				$("#reactant01-imagea").removeClass("visible");
				$("#reactant01-imageb").addClass("hidden");
				$("#reactant01-imageb").removeClass("visible");
				$("#reactant01-imagec").addClass("hidden");
				$("#reactant01-imagec").removeClass("visible");
				$("#reactant02-imagea").addClass("hidden");
				$("#reactant02-imagea").removeClass("visible");
				$("#reactant02-imageb").addClass("hidden");
				$("#reactant02-imageb").removeClass("visible");
				$("#reactant02-imagec").addClass("hidden");
				$("#reactant02-imagec").removeClass("visible");
				$("#level-02").removeClass("correct");
				$("#lvl01-msg01").hide();
				$("#lvl01-msg02").hide();
				$("#lvl01-msg03").hide();
				$("#lvl01-msg04").hide();
				$("#lvl02-msg01").hide();
				$("#lvl02-msg02").hide();
				$("#lvl02-msg03").hide();
				$("#lvl02-msg04a").hide();
				$("#lvl02-msg04b").hide();
				$("#lvl02-msg05").hide();
				$("#lvl02-msg06").hide();
				$("#chatbox").removeClass("1a, 1b, 1c, 1d, 2a, 2b, 2c, 2e, 2f");
				$("#chatbox").removeClass("2d-a");
				$("#chatbox").removeClass("2d-b");
				$("#chatbox").addClass("2a");
				$("#lvl02-msg01").show();
				$("#black-transition").fadeOut(function() {
					$("#instructions").show();
					$("#half-fade").fadeIn("slow");
					$("#worm").animate({top: 500}, "slow");
					$("#chatbox").animate({right: 20}, "slow");
				});
			});
		}
		//Instructions 2e
		else if ($(this).hasClass("2e")){
			$(this).removeClass("2e");
			$(this).addClass("2f");
			$("#half-fade").fadeOut("slow");
			$("#worm").animate({top: 768}, "slow");
			$("#chatbox").animate({right: -767}, "slow", function() {
				$("#instructions").hide();
				$("#lvl02-msg05").hide();
				$("#lvl02-msg06").show();
				$("#product01a").fadeIn();
				$("#product02a").fadeIn(function() {
					$("#instructions").show();
					$("#half-fade").fadeIn("slow");
					$("#worm").animate({top: 500}, "slow");
					$("#chatbox").animate({right: 20}, "slow");
				});
			});
		}
		//Instruction 2f
		else if ($(this).hasClass("2f")){
			$(this).removeClass("2f");
			$(this).addClass("6a");
			$("#half-fade").fadeOut("slow");
			$("#worm").animate({top: 768}, "slow");
			$("#chatbox").animate({right: -767}, "slow", function() {
				$("#lvl02-msg06").show();
				$("#progress2").removeClass("hidden");
				$("#progress2").addClass("visible");
				$("#lvl02-ind").addClass("lvl-complete");
				$("#instructions").hide();
				$("#black-transition").fadeIn(function() {
					$("#level-1").removeClass("active-page");
					$("#level-select").addClass("active-page2");
					$("#black-transition").fadeOut();
				});
			});
		}
		//Instructions 6a
		else if ($(this).hasClass("6a")){
			$(this).removeClass("6a");
			$(this).addClass("6b");
			$("#footnote").hide();
			$("#lvl06-msg01").hide();
			$("#lvl06-msg02").show();
			$("#quiz-q1a1").show();
			$("#quiz-q1a2").show();
			$("#quiz-q1a3").show();
			$("#quiz-q1a4").show();
			$("#quiz-a1").addClass("q1");
			$("#quiz-a2").addClass("q1");
			$("#quiz-a3").addClass("q1");
			$("#quiz-a4").addClass("q1");
		}
		//Instructions 6b
		else if ($(this).hasClass("6c")){
			$(this).removeClass("6c");
			$("#lvl06-msg07").hide();
			$("#footnote").show();
			$("#progress6").removeClass("hidden");
			$("#progress6").addClass("visible");
			$("#lvl06-ind").addClass("lvl-complete");
			$("#black-transition").fadeIn(function() {
				$("#instructions").hide();
				$("#level-6").removeClass("active-page");
				$("#level-select").addClass("active-page2");
				$("#black-transition").fadeOut();
			});
		}
	});
	
	
//.....In Game Menu.....//
	
	//Hide fade on startup
	$("#background-fade").hide();
	//In game menu toggle
	$("#expand").click(function(event) {
		$("#background-fade").fadeToggle();
		event.preventDefault();
		if ($(this).hasClass("open")){
			$("#menu").animate({left: -250});
			$(this).removeClass("open");
		}
		else {
			$("#menu").animate({left: 0});
			$(this).addClass("open");
		}
	return false;
	});
	
	//Menu button
	$("#menu-btn").click(function() {
		$("#black-transition").fadeIn(function() {
			$("#footnote").show();
			$("#quiz-answers").hide();
			$("#lvl01-msg01").hide();
			$("#lvl01-msg02").hide();
			$("#lvl01-msg03").hide();
			$("#lvl01-msg04").hide();
			$("#lvl02-msg01").hide();
			$("#lvl02-msg02").hide();
			$("#lvl02-msg03").hide();
			$("#lvl02-msg04a").hide();
			$("#lvl02-msg04b").hide();
			$("#lvl02-msg05").hide();
			$("#lvl02-msg06").hide();
			$("#lvl06-msg01").hide();
			$("#lvl06-msg02").hide();
			$("#lvl06-msg03").hide();
			$("#lvl06-msg04").hide();
			$("#lvl06-msg05").hide();
			$("#lvl06-msg06").hide();
			$("#lvl06-msg07").hide();
			$("#splash-screen").removeClass("active-page2");
			$("#main-menu").removeClass("active-page2");
			$("#level-select").addClass("active-page2");
			$("#level-1").removeClass("active-page");
			$("#level-2").removeClass("active-page");
			$("#level-3").removeClass("active-page");
			$("#level-4").removeClass("active-page");
			$("#level-5").removeClass("active-page");
			$("#level-6").removeClass("active-page");
			$("#end-game").removeClass("active-page");
			$("#menu").animate({left: -250});
			$("#expand").removeClass("open");
			$("#background-fade").fadeOut();
			$("#black-transition").fadeOut();
		});
	});
	
	//Hint button
	$("#lvl01-hint").hide();
	$("#lvl02-hint").hide();
	$("#lvl06-hint").hide();
	$("#hint-btn").click(function() {
		$("#message-popup").fadeIn();
		$("#hints-popup").addClass("active");
		$("#hints-popup").show();
		if ($("#level-1").hasClass("active-page")) {
			$("#lvl01-hint").show();
		}
		else if ($("#level-2").hasClass("active-page")) {
			$("#lvl02-hint").show();
		}
		else if ($("#level-6").hasClass("active-page")) {
			$("#lvl06-hint").show();
		}
	});
	
	//Reset Button
	$("#reset-btn").click(function() {
		//Close menu
		$("#menu").animate({left: -250});
		$("#expand").removeClass("open");
		$("#background-fade").fadeToggle();
		//Reset open page
		//Level 1
		if ($("#level-1").hasClass("active-page")) {
			$("#black-transition").fadeIn(function() {
				$("#char01a").hide();
				$("#char01b").hide();
				$("#parasol-open").removeClass("clickable");
				$("#watering-can").removeClass("clickable");
				$("#parasol-open").removeClass("hidden");
				$("#parasol-shade").removeClass("hidden");
				$("#parasol-closed").removeClass("visible");
				$("#parasol-closed").addClass("hidden");
				$("#watering-cana").removeClass("hidden");
				$("#watering-canb").addClass("hidden");
				$("#watering-canb").removeClass("visible");
				$("#char01a").hide()
				$("#char01b").hide();
				$("#char01c").show();
				$("#half-fade").removeClass("hidden");
				$("#lvl01-msg01").hide();
				$("#lvl01-msg02").hide();
				$("#lvl01-msg03").hide();
				$("#lvl01-msg04").hide();
				$("#lvl02-msg01").hide();
				$("#lvl02-msg02").hide();
				$("#lvl02-msg03").hide();
				$("#lvl02-msg04a").hide();
				$("#lvl02-msg04b").hide();
				$("#lvl02-msg05").hide();
				$("#lvl02-msg06").hide();
				$("#chatbox").removeClass("1a, 1b, 1c, 1d, 2a, 2b, 2c, 2e, 2f, 3a, 3b, 3c");
				$("#chatbox").removeClass("2d-a");
				$("#chatbox").removeClass("2d-b");
				$("#chatbox").addClass("1a")
				$("#lvl01-msg01").show();
				$("#instructions").hide();
				$("#black-transition").fadeOut(function() {
					$("#instructions").show();
					$("#half-fade").fadeIn("slow");
					$("#worm").animate({top: 500}, "slow");
					$("#chatbox").animate({right: 20}, "slow");
				});
			});
		}
		//Level 2
		else if ($("#level-2").hasClass("active-page")) {
			$("#black-transition").fadeIn(function() {
				$("#product01a").hide();
				$("#product02a").hide();
				$("#liquids").hide();
				$("#gases").show();
				$("#carbon-dioxide").show();
				$("#oxygen").show();
				$("#hydrogen").show();
				$("#acid").show();
				$("#water").show();
				$("#oil").show();
				$("#instructions").hide();
				$("#reactant01-imagea").addClass("hidden");
				$("#reactant01-imagea").removeClass("visible");
				$("#reactant01-imageb").addClass("hidden");
				$("#reactant01-imageb").removeClass("visible");
				$("#reactant01-imagec").addClass("hidden");
				$("#reactant01-imagec").removeClass("visible");
				$("#reactant02-imagea").addClass("hidden");
				$("#reactant02-imagea").removeClass("visible");
				$("#reactant02-imageb").addClass("hidden");
				$("#reactant02-imageb").removeClass("visible");
				$("#reactant02-imagec").addClass("hidden");
				$("#reactant02-imagec").removeClass("visible");
				$("#level-02").removeClass("correct");
				$("#half-fade").removeClass("hidden");
				$("#lvl01-msg01").hide();
				$("#lvl01-msg02").hide();
				$("#lvl01-msg03").hide();
				$("#lvl01-msg04").hide();
				$("#lvl02-msg01").hide();
				$("#lvl02-msg02").hide();
				$("#lvl02-msg03").hide();
				$("#lvl02-msg04a").hide();
				$("#lvl02-msg04b").hide();
				$("#lvl02-msg05").hide();
				$("#lvl02-msg06").hide();
				$("#chatbox").removeClass("1a, 1b, 1c, 1d, 2a, 2b, 2c, 2e, 2f, 3a, 3b, 3c");
				$("#chatbox").removeClass("2d-a");
				$("#chatbox").removeClass("2d-b");
				$("#chatbox").addClass("2a");
				$("#lvl02-msg01").show();
				$("#black-transition").fadeOut(function() {
					$("#instructions").show();
					$("#half-fade").fadeIn("slow");
					$("#worm").animate({top: 500}, "slow");
					$("#chatbox").animate({right: 20}, "slow");
				});
			});
		}
		else if ($("#level-6").hasClass("active-page")) {
			$("#black-transition").fadeIn(function() {
				$("#level-select").removeClass("active-page2");
				$("#level-6").addClass("active-page");
				$("#quiz-answers").show();
				$("#level-6popup").hide();
				$("#level-6popup").removeClass("active1");
				$("#level-6popup").removeClass("active2");
				$("#level-6popup").removeClass("active3");
				$("#level-6popup").removeClass("active4");
				$("#level-6popup").removeClass("active5");
				$("#quiz-a1").removeClass("q1");
				$("#quiz-a1").removeClass("q2");
				$("#quiz-a1").removeClass("q3");
				$("#quiz-a1").removeClass("q4");
				$("#quiz-a1").removeClass("q5");
				$("#quiz-q1a1").hide();
				$("#quiz-q1a2").hide();
				$("#quiz-q1a2").hide();
				$("#quiz-q1a4").hide();
				$("#quiz-q2a1").hide();
				$("#quiz-q2a2").hide();
				$("#quiz-q2a3").hide();
				$("#quiz-q2a4").hide();
				$("#quiz-q3a1").hide();
				$("#quiz-q3a2").hide();
				$("#quiz-q3a3").hide();
				$("#quiz-q3a4").hide();
				$("#quiz-q4a1").hide();
				$("#quiz-q4a2").hide();
				$("#quiz-q4a3").hide();
				$("#quiz-q4a4").hide();
				$("#quiz-q5a1").hide();
				$("#quiz-q5a2").hide();
				$("#quiz-q5a3").hide();
				$("#quiz-q5a4").hide();
				$("#q1-a").hide();
				$("#q2-a").hide();
				$("#q3-a").hide();
				$("#q4-a").hide();
				$("#q5-a").hide();
				$("#q1-b").hide();
				$("#q2-b").hide();
				$("#q3-b").hide();
				$("#q4-b").hide();
				$("#q5-b").hide();
				$("#half-fade").addClass("hidden");
				$("#lvl01-msg01").hide();
				$("#lvl01-msg02").hide();
				$("#lvl01-msg03").hide();
				$("#lvl01-msg04").hide();
				$("#lvl02-msg01").hide();
				$("#lvl02-msg02").hide();
				$("#lvl02-msg03").hide();
				$("#lvl02-msg04a").hide();
				$("#lvl02-msg04b").hide();
				$("#lvl02-msg05").hide();
				$("#lvl02-msg06").hide();
				$("#chatbox").removeClass("1a, 1b, 1c, 1d, 2a, 2b, 2c, 2e, 2f, 3a, 3b, 3c");
				$("#chatbox").removeClass("2d-a");
				$("#chatbox").removeClass("2d-b");
				$("#chatbox").addClass("3a");
				$("#lvl06-msg01").show();
				$("#black-transition").fadeOut(function() {
					$("#instructions").show();
					$("#half-fade").fadeIn("slow");
					$("#worm").animate({top: 500}, "slow");
					$("#chatbox").animate({right: 20}, "slow");
				});
			});
		}
	});	
	
	
//.....Splash Page.....//

	//Start animation
	$("#black-transition").delay(500).fadeOut().delay(1500).fadeIn(function() {
		$("#splash-screen").removeClass("active-page2");
		$("#main-menu").addClass("active-page2");
		$("#black-transition").delay(500).fadeOut();
	});

//.....Main Menu.....//

	//Start button
	$("#start-btn").click(function() {
		$("#black-transition").fadeIn(function() {
			$("#main-menu").removeClass("active-page2");
			$("#level-select").addClass("active-page2");
			$("#black-transition").fadeOut();
		});
	});
	
	//Credits Button
		//Open credits
		$("#credits-btn").click(function() {
			$("#message-popup").fadeIn();
			$("#credits").show();
		});
		
	
//.....Level Select.....//
	
	$("#lvl01").click(function() {
		$("#select-level").fadeIn();
		$("#lvl01").removeClass("selected");
		$("#lvl02").removeClass("selected");
		$("#lvl03").removeClass("selected");
		$("#lvl04").removeClass("selected");
		$("#lvl05").removeClass("selected");
		$("#lvl06").removeClass("selected");
		$(this).addClass("selected");
		$("#lvl01-info").removeClass("hidden");
		$("#lvl01-info").addClass("visible");
		$("#lvl02-info").removeClass("visible");
		$("#lvl02-info").addClass("hidden");
		$("#lvl03-info").removeClass("visible");
		$("#lvl03-info").addClass("hidden");
		$("#lvl04-info").removeClass("visible");
		$("#lvl04-info").addClass("hidden");
		$("#lvl05-info").removeClass("visible");
		$("#lvl05-info").addClass("hidden");
		$("#lvl06-info").removeClass("visible");
		$("#lvl06-info").addClass("hidden");
		$("#ls-highlight").animate({top: 112});
	});
	
	$("#lvl02").click(function() {
		$("#select-level").fadeIn();
		$("#lvl01").removeClass("selected");
		$("#lvl02").removeClass("selected");
		$("#lvl03").removeClass("selected");
		$("#lvl04").removeClass("selected");
		$("#lvl05").removeClass("selected");
		$("#lvl06").removeClass("selected");
		$(this).addClass("selected");
		$("#lvl01-info").removeClass("visible");
		$("#lvl01-info").addClass("hidden");
		$("#lvl02-info").removeClass("hidden");
		$("#lvl02-info").addClass("visible");
		$("#lvl03-info").removeClass("visible");
		$("#lvl03-info").addClass("hidden");
		$("#lvl04-info").removeClass("visible");
		$("#lvl04-info").addClass("hidden");
		$("#lvl05-info").removeClass("visible");
		$("#lvl05-info").addClass("hidden");
		$("#lvl06-info").removeClass("visible");
		$("#lvl06-info").addClass("hidden");
		$("#ls-highlight").animate({top: 208});
	});
	
	$("#lvl03").click(function() {
		$("#select-level").fadeOut();
		$("#lvl01").removeClass("selected");
		$("#lvl02").removeClass("selected");
		$("#lvl03").removeClass("selected");
		$("#lvl04").removeClass("selected");
		$("#lvl05").removeClass("selected");
		$("#lvl06").removeClass("selected");
		$(this).addClass("selected");
		$("#lvl01-info").removeClass("visible");
		$("#lvl01-info").addClass("hidden");
		$("#lvl02-info").removeClass("visible");
		$("#lvl02-info").addClass("hidden");
		$("#lvl03-info").removeClass("hidden");
		$("#lvl03-info").addClass("visible");
		$("#lvl04-info").removeClass("visible");
		$("#lvl04-info").addClass("hidden");
		$("#lvl05-info").removeClass("visible");
		$("#lvl05-info").addClass("hidden");
		$("#lvl06-info").removeClass("visible");
		$("#lvl06-info").addClass("hidden");
		$("#ls-highlight").animate({top: 304});
	});
	
	$("#lvl04").click(function() {
		$("#select-level").fadeOut();
		$("#lvl01").removeClass("selected");
		$("#lvl02").removeClass("selected");
		$("#lvl03").removeClass("selected");
		$("#lvl04").removeClass("selected");
		$("#lvl05").removeClass("selected");
		$("#lvl06").removeClass("selected");
		$(this).addClass("selected");
		$("#lvl01-info").removeClass("visible");
		$("#lvl01-info").addClass("hidden");
		$("#lvl02-info").removeClass("visible");
		$("#lvl02-info").addClass("hidden");
		$("#lvl03-info").removeClass("visible");
		$("#lvl03-info").addClass("hidden");
		$("#lvl04-info").removeClass("hidden");
		$("#lvl04-info").addClass("visible");
		$("#lvl05-info").removeClass("visible");
		$("#lvl05-info").addClass("hidden");
		$("#lvl06-info").removeClass("visible");
		$("#lvl06-info").addClass("hidden");
		$("#ls-highlight").animate({top: 400});
	});
	
	$("#lvl05").click(function() {
		$("#select-level").fadeOut();
		$("#lvl01").removeClass("selected");
		$("#lvl02").removeClass("selected");
		$("#lvl03").removeClass("selected");
		$("#lvl04").removeClass("selected");
		$("#lvl05").removeClass("selected");
		$("#lvl06").removeClass("selected");
		$(this).addClass("selected");
		$("#lvl01-info").removeClass("visible");
		$("#lvl01-info").addClass("hidden");
		$("#lvl02-info").removeClass("visible");
		$("#lvl02-info").addClass("hidden");
		$("#lvl03-info").removeClass("visible");
		$("#lvl03-info").addClass("hidden");
		$("#lvl04-info").removeClass("visible");
		$("#lvl04-info").addClass("hidden");
		$("#lvl05-info").removeClass("hidden");
		$("#lvl05-info").addClass("visible");
		$("#lvl06-info").removeClass("visible");
		$("#lvl06-info").addClass("hidden");
		$("#ls-highlight").animate({top: 496});
	});
	
	$("#lvl06").click(function() {
		$("#select-level").fadeIn();
		$("#lvl01").removeClass("selected");
		$("#lvl02").removeClass("selected");
		$("#lvl03").removeClass("selected");
		$("#lvl04").removeClass("selected");
		$("#lvl05").removeClass("selected");
		$("#lvl06").removeClass("selected");
		$(this).addClass("selected");
		$("#lvl01-info").removeClass("visible");
		$("#lvl01-info").addClass("hidden");
		$("#lvl02-info").removeClass("visible");
		$("#lvl02-info").addClass("hidden");
		$("#lvl03-info").removeClass("visible");
		$("#lvl03-info").addClass("hidden");
		$("#lvl04-info").removeClass("visible");
		$("#lvl04-info").addClass("hidden");
		$("#lvl05-info").removeClass("visible");
		$("#lvl05-info").addClass("hidden");
		$("#lvl06-info").removeClass("hidden");
		$("#lvl06-info").addClass("visible");
		$("#ls-highlight").animate({top: 592});
	});
		
	$("#select-level").click(function() {
		//Level01
		if ($("#lvl01").hasClass("selected")) {
			$("#black-transition").fadeIn(function() {
				$("#splash-screen").removeClass("active-page2");
				$("#main-menu").removeClass("active-page2");
				$("#level-select").removeClass("active-page2");
				$("#level-2").removeClass("active-page");
				$("#level-3").removeClass("active-page");
				$("#level-4").removeClass("active-page");
				$("#level-5").removeClass("active-page");
				$("#level-6").removeClass("active-page");
				$("#end-game").removeClass("active-page");
				$("#level-1").addClass("active-page");
				$("#parasol-open").removeClass("clickable");
				$("#watering-can").removeClass("clickable");
				$("#parasol-open").removeClass("hidden");
				$("#parasol-shade").removeClass("hidden");
				$("#parasol-closed").removeClass("visible");
				$("#parasol-closed").addClass("hidden");
				$("#watering-cana").removeClass("hidden");
				$("#watering-canb").addClass("hidden");
				$("#watering-canb").removeClass("visible");
				$("#char01a").hide()
				$("#char01b").hide();
				$("#char01c").show();
				$("#half-fade").removeClass("hidden");
				$("#footnote").show();
				$("#quiz-answers").hide();
				$("#lvl01-msg01").hide();
				$("#lvl01-msg02").hide();
				$("#lvl01-msg03").hide();
				$("#lvl01-msg04").hide();
				$("#lvl02-msg01").hide();
				$("#lvl02-msg02").hide();
				$("#lvl02-msg03").hide();
				$("#lvl02-msg04a").hide();
				$("#lvl02-msg04b").hide();
				$("#lvl02-msg05").hide();
				$("#lvl02-msg06").hide();
				$("#lvl06-msg01").hide();
				$("#lvl06-msg02").hide();
				$("#lvl06-msg03").hide();
				$("#lvl06-msg04").hide();
				$("#lvl06-msg05").hide();
				$("#lvl06-msg06").hide();
				$("#lvl06-msg07").hide();
				$("#chatbox").removeClass("1a, 1b, 1c, 1d, 2a, 2b, 2c, 2e, 2f, 3a, 3b, 3c");
				$("#chatbox").removeClass("2d-a");
				$("#chatbox").removeClass("2d-b");
				$("#chatbox").addClass("1a")
				$("#lvl01-msg01").show();
				$("#instructions").hide();
				$("#black-transition").fadeOut(function() {
					$("#instructions").show();
					$("#half-fade").fadeIn("slow");
					$("#worm").animate({top: 500}, "slow");
					$("#chatbox").animate({right: 20}, "slow");
				});
			});
		}
		//Level02
		else if ($("#lvl02").hasClass("selected")) {
			$("#black-transition").fadeIn(function() {
				$("#splash-screen").removeClass("active-page2");
				$("#main-menu").removeClass("active-page2");
				$("#level-select").removeClass("active-page2");
				$("#level-1").removeClass("active-page");
				$("#level-3").removeClass("active-page");
				$("#level-4").removeClass("active-page");
				$("#level-5").removeClass("active-page");
				$("#level-6").removeClass("active-page");
				$("#end-game").removeClass("active-page");
				$("#level-2").addClass("active-page");
				$("#product01a").hide();
				$("#product02a").hide();
				$("#liquids").hide();
				$("#gases").show();
				$("#carbon-dioxide").show();
				$("#oxygen").show();
				$("#hydrogen").show();
				$("#acid").show();
				$("#water").show();
				$("#oil").show();
				$("#instructions").hide();
				$("#reactant01-imagea").addClass("hidden");
				$("#reactant01-imagea").removeClass("visible");
				$("#reactant01-imageb").addClass("hidden");
				$("#reactant01-imageb").removeClass("visible");
				$("#reactant01-imagec").addClass("hidden");
				$("#reactant01-imagec").removeClass("visible");
				$("#reactant02-imagea").addClass("hidden");
				$("#reactant02-imagea").removeClass("visible");
				$("#reactant02-imageb").addClass("hidden");
				$("#reactant02-imageb").removeClass("visible");
				$("#reactant02-imagec").addClass("hidden");
				$("#reactant02-imagec").removeClass("visible");
				$("#level-02").removeClass("correct");
				$("#half-fade").removeClass("hidden");
				$("#footnote").show();
				$("#quiz-answers").hide();
				$("#lvl01-msg01").hide();
				$("#lvl01-msg02").hide();
				$("#lvl01-msg03").hide();
				$("#lvl01-msg04").hide();
				$("#lvl02-msg01").hide();
				$("#lvl02-msg02").hide();
				$("#lvl02-msg03").hide();
				$("#lvl02-msg04a").hide();
				$("#lvl02-msg04b").hide();
				$("#lvl02-msg05").hide();
				$("#lvl02-msg06").hide();
				$("#lvl06-msg01").hide();
				$("#lvl06-msg02").hide();
				$("#lvl06-msg03").hide();
				$("#lvl06-msg04").hide();
				$("#lvl06-msg05").hide();
				$("#lvl06-msg06").hide();
				$("#lvl06-msg07").hide();
				$("#chatbox").removeClass("1a, 1b, 1c, 1d, 2a, 2b, 2c, 2e, 2f, 3a, 3b, 3c");
				$("#chatbox").removeClass("2d-a");
				$("#chatbox").removeClass("2d-b");
				$("#chatbox").addClass("2a");
				$("#lvl02-msg01").show();
				$("#black-transition").fadeOut(function() {
					$("#instructions").show();
					$("#half-fade").fadeIn("slow");
					$("#worm").animate({top: 500}, "slow");
					$("#chatbox").animate({right: 20}, "slow");
				});
			});
		}
		//Level03
		else if ($("#lvl03").hasClass("selected")) {
		}
		//Level04
		else if ($("#lvl04").hasClass("selected")) {
		}
		//Level05
		else if ($("#lvl05").hasClass("selected")) {
		}
		//Level06
		else if ($("#lvl06").hasClass("selected")) {
			$("#black-transition").fadeIn(function() {
				$("#splash-screen").removeClass("active-page2");
				$("#main-menu").removeClass("active-page2");
				$("#level-select").removeClass("active-page2");
				$("#level-1").removeClass("active-page");
				$("#level-2").removeClass("active-page");
				$("#level-3").removeClass("active-page");
				$("#level-4").removeClass("active-page");
				$("#level-5").removeClass("active-page");
				$("#end-game").removeClass("active-page");
				$("#level-6").addClass("active-page");
				$("#quiz-answers").show();
				$("#level-6popup").hide();
				$("#level-6popup").removeClass("active1");
				$("#level-6popup").removeClass("active2");
				$("#level-6popup").removeClass("active3");
				$("#level-6popup").removeClass("active4");
				$("#level-6popup").removeClass("active5");
				$("#quiz-a1").removeClass("q1");
				$("#quiz-a1").removeClass("q2");
				$("#quiz-a1").removeClass("q3");
				$("#quiz-a1").removeClass("q4");
				$("#quiz-a1").removeClass("q5");
				$("#quiz-q1a1").hide();
				$("#quiz-q1a2").hide();
				$("#quiz-q1a2").hide();
				$("#quiz-q1a4").hide();
				$("#quiz-q2a1").hide();
				$("#quiz-q2a2").hide();
				$("#quiz-q2a3").hide();
				$("#quiz-q2a4").hide();
				$("#quiz-q3a1").hide();
				$("#quiz-q3a2").hide();
				$("#quiz-q3a3").hide();
				$("#quiz-q3a4").hide();
				$("#quiz-q4a1").hide();
				$("#quiz-q4a2").hide();
				$("#quiz-q4a3").hide();
				$("#quiz-q4a4").hide();
				$("#quiz-q5a1").hide();
				$("#quiz-q5a2").hide();
				$("#quiz-q5a3").hide();
				$("#quiz-q5a4").hide();
				$("#q1-a").hide();
				$("#q2-a").hide();
				$("#q3-a").hide();
				$("#q4-a").hide();
				$("#q5-a").hide();
				$("#q1-b").hide();
				$("#q2-b").hide();
				$("#q3-b").hide();
				$("#q4-b").hide();
				$("#q5-b").hide();
				$("#half-fade").addClass("hidden");
				$("#lvl01-msg01").hide();
				$("#lvl01-msg02").hide();
				$("#lvl01-msg03").hide();
				$("#lvl01-msg04").hide();
				$("#lvl02-msg01").hide();
				$("#lvl02-msg02").hide();
				$("#lvl02-msg03").hide();
				$("#lvl02-msg04a").hide();
				$("#lvl02-msg04b").hide();
				$("#lvl02-msg05").hide();
				$("#lvl02-msg06").hide();
				$("#lvl06-msg01").hide();
				$("#lvl06-msg02").hide();
				$("#lvl06-msg03").hide();
				$("#lvl06-msg04").hide();
				$("#lvl06-msg05").hide();
				$("#lvl06-msg06").hide();
				$("#lvl06-msg07").hide();
				$("#chatbox").removeClass("1a, 1b, 1c, 1d, 2a, 2b, 2c, 2e, 2f, 3a, 3b, 3c");
				$("#chatbox").removeClass("2d-a");
				$("#chatbox").removeClass("2d-b");
				$("#chatbox").addClass("6a");
				$("#lvl06-msg01").show();
				$("#black-transition").fadeOut(function() {
					$("#instructions").show();
					$("#half-fade").fadeIn("slow");
					$("#worm").animate({top: 500}, "slow");
					$("#chatbox").animate({right: 20}, "slow");
				});
			});
		}
	});
	
	
//.....Level 1.....//

	//Parasol click
	$("#parasol-open").click(function() {
		if ($(this).hasClass("clickable")){
			$(this).removeClass("clickable");
			$(this).addClass("hidden");
			$("#parasol-shade").addClass("hidden");
			$("#parasol-closed").removeClass("hidden");
			$("#parasol-closed").addClass("visible");
			$("#char01b").show();
			$("#char01c").fadeOut("slow", function() {
				$("#instructions").show();
				$("#half-fade").fadeIn("slow");
				$("#worm").animate({top: 500}, "slow");
				$("#chatbox").animate({right: 20}, "slow");
				$("#lvl01-msg02").hide();
				$("#lvl01-msg03").show();
			});
		}
	});
	//Watering can click
	$("#watering-can").click(function() {
		if ($(this).hasClass("clickable")){
			$(this).removeClass("clickable");
			$("#watering-cana").addClass("hidden");
			$("#watering-canb").removeClass("hidden");
			$("#watering-canb").addClass("visible");
			$("#char01a").show()
			$("#char01b").fadeOut("slow", function() {
				$("#instructions").show();
				$("#half-fade").fadeIn("slow");
				$("#worm").animate({top: 500}, "slow");
				$("#chatbox").animate({right: 20}, "slow");
				$("#lvl01-msg03").hide();
				$("#lvl01-msg04").show();
			});
		}
	});

	
//.....Level 2.....//

	$("#product01a").hide();
	$("#product02a").hide();
	//Hide liquids
	$("#liquids").hide();
	//Set gases to be draggable
	$(".draggable1").draggable( {
		//confines to screen
		containment: "parent",
		//highlight where to drop
		start: function(event, ui) {
			$(this).addClass("selected");
			$("#reactant01").addClass("pulsate");
		},
		stop: function(event, ui) {
			$(this).removeClass("selected");
			$("#reactant01").removeClass("pulsate");
		},
		stack: "#gases",
		revert: true,
	});
	//Set droppable space for gases
	$(".droppable1").droppable( {
		accept: (".draggable1"),
		drop: function(event, ui) {
			//Recognise dropped div
			if ($("#carbon-dioxide").hasClass("selected")) {
				$("#carbon-dioxide").hide();
				$("#reactant01-imagea").removeClass("hidden");
				$("#reactant01-imagea").addClass("visible");
				$("#gases").fadeOut();
				$("#liquids").fadeIn();
			};
			if ($("#oxygen").hasClass("selected")) {
				$("#oxygen").hide();
				$("#reactant01-imageb").removeClass("hidden");
				$("#reactant01-imageb").addClass("visible");
				$("#gases").fadeOut();
				$("#liquids").fadeIn();
			};
			if ($("#hydrogen").hasClass("selected")) {
				$("#hydrogen").hide();
				$("#reactant01-imagec").removeClass("hidden");
				$("#reactant01-imagec").addClass("visible");
				$("#gases").fadeOut();
				$("#liquids").fadeIn();
			};
			$("#lvl02-msg03").show();
			$("#instructions").show(function() {
				$("#half-fade").fadeIn("slow");
				$("#worm").animate({top: 500}, "slow");
				$("#chatbox").animate({right: 20}, "slow");
			});
		},
	});
	
	//Set liquids to be draggable
	$(".draggable2").draggable( {
		//confines to screen
		containment: "parent",
		//highlight where to drop
		start: function(event, ui) {
			$(this).addClass("selected");
			$("#reactant02").addClass("pulsate");
		},
		stop: function(event, ui) {
			$(this).removeClass("selected");
			$("#reactant02").removeClass("pulsate");
		},
		stack: "#liquids",
		revert: true,
	});
	//Set droppable space for liquids
	$(".droppable2").droppable( {
		accept: (".draggable2"),
		drop: function(event, ui) {
			//Recognise dropped div
			if ($("#acid").hasClass("selected")) {
				$("#acid").hide();
				$("#reactant02-imagea").removeClass("hidden");
				$("#reactant02-imagea").addClass("visible");
				$("#liquids").fadeOut();
			};
			if ($("#water").hasClass("selected")) {
				$("#water").hide();
				$("#reactant02-imageb").removeClass("hidden");
				$("#reactant02-imageb").addClass("visible");
				$("#liquids").fadeOut();
			};
			if ($("#oil").hasClass("selected")) {
				$("#oil").hide();
				$("#reactant02-imagec").removeClass("hidden");
				$("#reactant02-imagec").addClass("visible");
				$("#liquids").fadeOut();
			};
			$("#instructions").delay(500).show(function() {
				$("#message-popup").fadeIn();
				$("#level-2popup").show();
				if ($("#reactant01-imagea").hasClass("visible") && $("#reactant02-imageb").hasClass("visible")) {
					$("#char02a").delay(1000).fadeIn("slow");
					$("#level-2").addClass("correct");
					$("#level-2popup").addClass("active");
					$("#lvl02-msg04a").show();
				}
				else {
					$("#char02c").delay(1000).fadeIn("slow");
					$("#level-2popup").addClass("active");
					$("#lvl02-msg04b").show();
					$("#level-2").removeClass("correct");
				}
				
			});
		},
	});

		
//.....Level 6.....//
	
	//hide on startup
	$("#level-6popup").hide();
	$("#quiz-q1a1").hide();
	$("#quiz-q1a2").hide();
	$("#quiz-q1a3").hide();
	$("#quiz-q1a4").hide();
	$("#quiz-q2a1").hide();
	$("#quiz-q2a2").hide();
	$("#quiz-q2a3").hide();
	$("#quiz-q2a4").hide();
	$("#quiz-q3a1").hide();
	$("#quiz-q3a2").hide();
	$("#quiz-q3a3").hide();
	$("#quiz-q3a4").hide();
	$("#quiz-q4a1").hide();
	$("#quiz-q4a2").hide();
	$("#quiz-q4a3").hide();
	$("#quiz-q4a4").hide();
	$("#quiz-q5a1").hide();
	$("#quiz-q5a2").hide();
	$("#quiz-q5a3").hide();
	$("#quiz-q5a4").hide();
	$("#q1-a").hide();
	$("#q2-a").hide();
	$("#q3-a").hide();
	$("#q4-a").hide();
	$("#q5-a").hide();
	$("#q1-b").hide();
	$("#q2-b").hide();
	$("#q3-b").hide();
	$("#q4-b").hide();
	$("#q5-b").hide();
	
	$("#quiz-a1").click(function() {
		if ($(this).hasClass("q1")) {
			$("#level-6popup").addClass("active1");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q1-b").show();
		}
		else if ($(this).hasClass("q2")) {
			$("#level-6popup").addClass("active2");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q2-a").show();
		}
		else if ($(this).hasClass("q3")) {
			$("#level-6popup").addClass("active3");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q3-b").show();
		}
		else if ($(this).hasClass("q4")) {
			$("#level-6popup").addClass("active4");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q4-b").show();
		}
		else if ($(this).hasClass("q5")) {
			$("#level-6popup").addClass("active5");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q5-b").show();
		}
	});
	
	$("#quiz-a2").click(function() {
		if ($(this).hasClass("q1")) {
			$("#level-6popup").addClass("active1");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q1-a").show();
		}
		else if ($(this).hasClass("q2")) {
			$("#level-6popup").addClass("active2");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q2-b").show();
		}
		else if ($(this).hasClass("q3")) {
			$("#level-6popup").addClass("active3");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q3-b").show();
		}
		else if ($(this).hasClass("q4")) {
			$("#level-6popup").addClass("active4");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q4-b").show();
		}
		else if ($(this).hasClass("q5")) {
			$("#level-6popup").addClass("active5");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q5-b").show();
		}
	});
	
	$("#quiz-a3").click(function() {
		if ($(this).hasClass("q1")) {
			$("#level-6popup").addClass("active1");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q1-b").show();
		}
		else if ($(this).hasClass("q2")) {
			$("#level-6popup").addClass("active2");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q2-b").show();
		}
		else if ($(this).hasClass("q3")) {
			$("#level-6popup").addClass("active3");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q3-b").show();
		}
		else if ($(this).hasClass("q4")) {
			$("#level-6popup").addClass("active4");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q4-b").show();
		}
		else if ($(this).hasClass("q5")) {
			$("#level-6popup").addClass("active5");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q5-a").show();
		}
	});
	
	$("#quiz-a4").click(function() {
		if ($(this).hasClass("q1")) {
			$("#level-6popup").addClass("active1");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q1-b").show();
		}
		else if ($(this).hasClass("q2")) {
			$("#level-6popup").addClass("active2");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q2-b").show();
		}
		else if ($(this).hasClass("q3")) {
			$("#level-6popup").addClass("active3");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q3-a").show();
		}
		else if ($(this).hasClass("q4")) {
			$("#level-6popup").addClass("active4");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q4-a").show();
		}
		else if ($(this).hasClass("q5")) {
			$("#level-6popup").addClass("active5");
			$("#message-popup").fadeIn();
			$("#level-6popup").show();
			$("#q5-b").show();
		}
	});
});