$(document).ready(function() {
var count = 0; // To Count Blank Fields
/*------------ Validation Function-----------------*/
$(".submit_btn").click(function(event) {
var radio_check = $('.rad'); // Fetching Radio Button By Class Name
var input_field = $('.text_field'); // Fetching All Inputs With Same Class Name text_field & An HTML Tag textarea
var text_area = $('textarea');
// Validating Radio Button
if (radio_check[0].checked == false && radio_check[1].checked == false) {
var y = 0;
} else {
var y = 1;
}
// For Loop To Count Blank Inputs
for (var i = input_field.length; i > count; i--) {
if (input_field[i - 1].value == '' || text_area.value == '') {
count = count + 1;
} else {
count = 0;
}
}
// Notifying Validation
if (count != 0 || y == 0) {
alert("*All Fields are mandatory*");
event.preventDefault();
} else {
return true;
}
});
/*---------------------------------------------------------*/
$(".next_btn").click(function() { // Function Runs On NEXT Button Click
$(this).parent().next().fadeIn('slow');
$(this).parent().css({
'display': 'none'
});
// Adding Class Active To Show Steps Forward;
$('.active').next().addClass('active');
});
$(".pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
$(this).parent().prev().fadeIn('slow');
$(this).parent().css({
'display': 'none'
});
// Removing Class Active To Show Steps Backward;
$('.active:last').removeClass('active');
});
// Validating All Input And Textarea Fields
$(".submit_btn").click(function(e) {
if ($('input').val() == "" || $('textarea').val() == "") {
alert("*All Fields are mandatory*");
return false;
} else {
return true;
}
});


$(".optgrp").click(function() { 

$("#courseDetailsWithin").css({'display': 'none'});
$("#courseDetailsEntire").css({'display': 'block'});
$('input[name="sessionOpt"]').prop('checked', false);

 });

$("#withinCourse").click(function() { 

$("#courseDetailsEntire").css({'display': 'none'});
$("#courseDetailsWithin").css({'display': 'block'});
$('input[name="sessionOpt"]').prop('checked', false);

 });

$("#outsidecourse").click(function() { 

$("#courseDetailsEntire").css({'display': 'none'});
$("#courseDetailsWithin").css({'display': 'none'});

 });



$('[data-toggle="tooltip"]').tooltip();  


$("#dimension").mouseover(function() { 

	$("#infoText").css({'display': 'block'});

   $("#infoText").html("<h4> Intellectual Agility </h4> <p><span class='defText' >Intellectual agility describes the knowledge, skills, and behaviors needed to adaptively assess and respond to the environment, and to innovatively contribute to a specific discipline or field of study.</span></p> <h4>Global Mindset</h4><p><span class='defText'>Global mindset describes the knowledge, skills, and behaviors needed to live, work, and communicate with people whose background, experience, and perspectives and different from their own, and to consider the global impact of decisions.</span></p><h4>Social Consciousness and Commitment</h4><p><span class='defText'>Social Consciousness & Commitment describes the confidence, skills, and values to effectively recognize the needs of individuals, communities, and society, and to make a commitment to constructively engage in social action.</span>  </p><h4>Professional and Personal Effectiveness</h4><p><span class='defText'>Professional and personal effectiveness refers to the confidence, skills, behaviors and values to effectively discern life goals and shape ones personal and professional identities, to form relationships, and to achieve fulfillment. </span></p><h4>Well Being</h4><p><span class='defText'>The well-being dimension describes the knowledge, skills, and behaviors necessary to live a healthy, balanced, and fulfilling life.</span></p>"); });



$("#infoText").mouseover(function() { 

	$("#infoText").css({'display': 'block'});   


});


$("#infoText").mouseout(function() { 

	$("#infoText").css({'display': 'none'});   

});


$("input[name='studentRole']").click(function() { 

   var elem = $("input[name=studentRole]:checked");
   var opt=	$("input[name=studentRole]:checked").val();
    if(opt=="Other Attendee")
     {
        $("#otherLeaderText").css({'display': 'none'});
        $("#otherAttendeeText").css({'display': 'block'});
     }

  else if (opt=="Other Leader")
     {
  	    $("#otherAttendeeText").css({'display': 'none'});
        $("#otherLeaderText").css({'display': 'block'});
     }
     else
      {
        $("#otherAttendeeText").css({'display': 'none'});
        $("#otherLeaderText").css({'display': 'none'});

     }

   if(elem.hasClass("attendee")==true)
    {
      $("#roleSpecific").css({'display': 'block'});

        var eleLength = $("#innerRole").length;
          
       if (eleLength<1)
        {
              
           $("#roleSpecific").append("<div id='innerRole'></div>");
               var hdr = "<p>Role for your selection: Participant Role</p>";  
               var radioButton1 = "<input type='radio' name='participantRole' class='rad' value='Attendee' > <br />";
               var radioButton2 = "<input type='radio' name='participantRole' class='rad' value='Mentee' > <br />";
               var radioButton3 = "<input type='radio' name='participantRole' class='rad' value='Other participent ' > <br />";
             $("#innerRole").append(hdr,radioButton1,radioButton2,radioButton3); 
        }

         
    }



 });


});