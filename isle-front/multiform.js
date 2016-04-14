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

if($(this).parent().hasClass("part2")==false)  
{
   $('.active').next().addClass('active');
    
}   
        
});
$(".pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
$(this).parent().prev().fadeIn('slow');
$(this).parent().css({
'display': 'none'
});
// Removing Class Active To Show Steps Backward;

if($(this).parent().prev().hasClass("part2")==false)  
{
  $('.active:last').removeClass('active');
    
}


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
           participantFunction();
               
        }
        else
        {
            $("#innerRole").empty();
            participantFunction();

        }
    }


    if(elem.hasClass("Presenter")==true)
    {
      
      $("#roleSpecific").css({'display': 'block'});
        var eleLength = $("#innerRole").length;
        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
          presenterFunction();
        }

        else
        {
              $("#innerRole").empty();
              presenterFunction();
        }
              
      }

     if(elem.hasClass("Researcher")==true)
      {
          $("#roleSpecific").css({'display': 'block'});

        var eleLength = $("#innerRole").length;
        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
          researcherFunction();
        }

        else
        {
              $("#innerRole").empty();
              researcherFunction();
        }
      

      }


        if(elem.hasClass("Maker")==true)
    {
      
      $("#roleSpecific").css({'display': 'block'});
        var eleLength = $("#innerRole").length;
        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
          makerFunction();
        }

        else
        {
              $("#innerRole").empty();
              makerFunction();
        }
              
      }
     




        if(elem.hasClass("Leader")==true)
        {
      
      $("#roleSpecific").css({'display': 'block'});
        var eleLength = $("#innerRole").length;
        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
          leaderFunction();
        }

        else
        {
              $("#innerRole").empty();
              leaderFunction();
        }
              
      }

    if(elem.hasClass("Volunteer")==true)
      {
          $("#roleSpecific").css({'display': 'block'});

        var eleLength = $("#innerRole").length;

        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
             volunteerFunction();
        }

        else
        {
              $("#innerRole").empty();
              volunteerFunction();
        }
      

      }


if(elem.hasClass("Club")==true)
      {
          $("#roleSpecific").css({'display': 'block'});

        var eleLength = $("#innerRole").length;

        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
             clubFunction();
        }

        else
        {
              $("#innerRole").empty();
              clubFunction();
        }
      

      }

if(elem.hasClass("Team")==true)
      {
          $("#roleSpecific").css({'display': 'block'});

        var eleLength = $("#innerRole").length;

        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
             teamFunction();
        }

        else
        {
              $("#innerRole").empty();
              teamFunction();
        }
      

      }

  if(elem.hasClass("Coop")==true)
      {
          $("#roleSpecific").css({'display': 'block'});

        var eleLength = $("#innerRole").length;

        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
             coopFunction();
        }

        else
        {
              $("#innerRole").empty();
              coopFunction();
        }
      

      }

  if(elem.hasClass("Employment")==true)
      {
          $("#roleSpecific").css({'display': 'block'});

        var eleLength = $("#innerRole").length;

        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
             coopFunction();
        }

        else
        {
              $("#innerRole").empty();
              coopFunction();
        }
      

      }

 if(elem.hasClass("Internship")==true)
      {
          $("#roleSpecific").css({'display': 'block'});

        var eleLength = $("#innerRole").length;

        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
             internshipFunction();
        }

        else
        {
              $("#innerRole").empty();
               internshipFunction();
        }
      

      }




   if(opt=="Other Opportunity Type")
     {
        $("#otherOpportunityText").css({'display': 'block'});
         $("#roleSpecific").css({'display': 'block'});
          var eleLength = $("#innerRole").length;


        if (eleLength<1)
        {
          $("#roleSpecific").append("<div id='innerRole'></div>");
              otherRoleFunction();
        }

        else
        {
              $("#innerRole").empty();
                otherRoleFunction();
        }

     }    
  else
  {
    $("#otherOpportunityText").css({'display': 'none'});
 }



$("input[name='researcherRole']").click(function() { 

  var rsValue = $("input[name='researcherRole']:checked").val();
  

if(rsValue=="Other Researcher")
{
   $("#otherResearcherText").css({'display': 'block'});
   
}
else{

  $("#otherResearcherText").css({'display': 'none'});
  
}


});


$("input[name='participantRole']").click(function() { 

  var rsValue = $("input[name='participantRole']:checked").val();
  

if(rsValue=="Other participant")
{
   $("#otherRParticipantText").css({'display': 'block'});
   
}
else{

  $("#otherRParticipantText").css({'display': 'none'});
  
}


});


 }); <!-- studentRole-->





$("input[name='applicationDueDate']").click(function() { 

  if($("input[name=applicationDueDate]:checked").val()=="Yes")
  {
     $("#pickDate").prop( "disabled", false );
  }
  else
  {
    $("#pickDate").prop( "disabled", true);
  }

  
  });


$("input[name='additionalDetails']").click(function() { 

  if($("input[name=additionalDetails]:checked").val()=="URL")
  {
     $("#url").prop( "disabled", false );
  }
  else
  {
    $("#url").prop( "disabled", true);
  }

  
  });


$("input[name='specificDuration']").click(function() { 

  

  if($("input[name=specificDuration]:checked").val()=="Yes")
  {
     $("#opportunityDuration").css({'display': 'block'});

     }
  else
  {
     $("#opportunityDuration").css({'display': 'none'});
  }



    $("input[name='recurOpportunity']").click(function() { 

      
      if($("input[name=recurOpportunity]:checked").val()=="Yes")
      {
              $("#recurQuestion").css({'display': 'block'});
              alert($("#durationBeginDate").val());
       }
      else
      {
              $("#recurQuestion").css({'display': 'none'});
       }

  });

  
  });



});<!-- doc ready-->



function presenterFunction()
{
           var hdr = "<p>Role for your selection: <b> Presenter Role </b></p>"; 
              $("#innerRole").append(hdr);
}

function participantFunction()
{
               var hdr = "<p>Role for your selection: <b>Participant Role</b></p>";  
               var radioButton1 = "<input type='radio' name='participantRole' class='rad' value='Attendee' >Attendee <br />";
               var radioButton2 = "<input type='radio' name='participantRole' class='rad' value='Mentee' >Mentee <br />";
               var radioButton3 = "<input type='radio' name='participantRole' class='rad' value='Other participant' >Other participant <br />";
               var inputBox= "<input id='otherRParticipantText' class='text_field' name='participantRole' placeholder='Type here if Other selected for Participant Role' type='text' Mandatory hidden>";
             $("#innerRole").append(hdr,radioButton1,radioButton2,radioButton3,inputBox); 
}

function researcherFunction()
{
               var hdr = "<p>Role for your selection: <b> Researcher Role </b></p>";  
               var radioButton1 = "<input type='radio' name='researcherRole' class='rad' value='Lab Manager' >Lab Manager automatically selected engagement level = 3 - Generative Engagement <br />";
               var radioButton2 = "<input type='radio' name='researcherRole' class='rad' value='Research Assistant' >Research Assistant  automatically selected engagement = 2 - Active Engagement <br />";
               var radioButton3 = "<input type='radio' name='researcherRole' class='rad' value='Lab Assistant' >Lab Assistant automatically selected engagement = 2 - Active Engagement <br />";
               var radioButton4 = "<input type='radio' name='researcherRole' class='rad' value='Other Researcher' >Other researcher role (please specify) <br />";
              var inputBox= "<input id='otherResearcherText' class='text_field' name='researcherRole' placeholder='Type here if Other selected for Researcher Role' type='text' Mandatory hidden>";
             $("#innerRole").append(hdr,radioButton1,radioButton2,radioButton3,radioButton4,inputBox); 
}

function makerFunction()
{
           var hdr = "<p>Role for your selection: <b> Maker Role </b></p>"; 
              $("#innerRole").append(hdr);
}

function leaderFunction()
{
           var hdr = "<p>Role for your selection: <b> Leader Role </b></p>"; 
              $("#innerRole").append(hdr);
}

function volunteerFunction()
{
               var hdr = "<p>Role for your selection: <b>Volunteer Role</b></p>";  
               var radioButton1 = "<input type='radio' name='volunteerRole' class='rad' value='Volunteer Leader' > Volunteer Leader automatically selected level of engagement = 3 - Generative Engagement) <br />";
               var radioButton2 = "<input type='radio' name='volunteerRole' class='rad' value='Volunteer Participant' > Volunteer Participant automatically selected level of engagement = 2 - Active Engagement)  <br />";
               
             $("#innerRole").append(hdr,radioButton1,radioButton2); 
}

function clubFunction()
{
               var hdr = "<p>Role for your selection: <b>Club Role</b></p>";  
               var radioButton1 = "<input type='radio' name='clubRole' class='rad' value='Club Leader' >  Club Leader (automatically selected level of engagement = 3 - Generative Engagement) <br />";
               var radioButton2 = "<input type='radio' name='clubRole' class='rad' value='Club Participant' > Club Participant (automatically selected level of engagement = 2 - Active Engagement) <br />";
               
             $("#innerRole").append(hdr,radioButton1,radioButton2); 
}

function teamFunction()
{
               var hdr = "<p>Role for your selection: <b>Team Role</b></p>";  
               var radioButton1 = "<input type='radio' name='teamRole' class='rad' value='Team Leader' >  Team Leader (automatically selected level of engagement = 3 - Generative Engagement) <br />";
               var radioButton2 = "<input type='radio' name='teamRole' class='rad' value='Team Participant' > Team Participant (automatically selected level of engagement = 2 - Active Engagement) <br />";
               
             $("#innerRole").append(hdr,radioButton1,radioButton2); 
}

function coopFunction()
{
           var hdr = "<p>Role for your selection: <b> Co-op participant Role </b></p>"; 
              $("#innerRole").append(hdr);
}

function internshipFunction()
{
            var hdr = "<p>Role for your selection: <b> Intern Role </b></p>"; 
              $("#innerRole").append(hdr);

}

function otherRoleFunction()
{
               var hdr = "<p>Engagement level for <b> other role </b></p>";  
               var firstLine= "Indicate the PRIMARY level of student engagement involved in this opportunity. <br />";
               var radioButton1 = "<input type='radio' name='otherRole' class='rad' value='Receptive' > Receptive (examples: observe, listen, attend) <br />";
               var radioButton2 = "<input type='radio' name='otherRole' class='rad' value='Active' > Active  (examples: Serve, organize/coordinate, operate, implement, present, participate) <br />";
                var radioButton3 = "<input type='radio' name='otherRole' class='rad' value='Generative' > Generative (examples: Create, design, write, produce, lead, facilitate, teach, guide, mentor, solve) <br />";
             $("#innerRole").append(hdr,firstLine,radioButton1,radioButton2,radioButton3); 
     

}