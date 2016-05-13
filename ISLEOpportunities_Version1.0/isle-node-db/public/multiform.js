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


//Display all course information option based on User Selection for the basics web page.
$("input[name='OppType']").click(function() { 

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


// Tooltip Text and Logic for Dimension page

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



//Location Parameter logic on requirements page

$("input[name='location']").click(function() { 

  var lValue = $("input[name='location']:checked").val();
  

if(lValue=="Off-Campus")
{
   $("#offcampusText").css({'display': 'block'});
   
}
else{

   $("#offcampusText").css({'display': 'none'});
   $("#offcampusText").val("");
  
}


});

//GPA Parameter logic on requirements page

$("input[name='gparequirement']").click(function() { 

  var lValue = $("input[name='gparequirement']:checked").val();
   
   

if(lValue=="Minimum GPA")
{

   $("#gparequirementNumber").css({'display': 'block'});
   
}
else{

   $("#gparequirementNumber").css({'display': 'none'});
   $("#gparequirementNumber").val("");
  
}


});

//Academic level logic on requirements page

$("input[name='academiclevel']").click(function() { 

  var lValue = $("input[name='academiclevel']:checked").val();
   

if(lValue=="other")
{

    $("#otherTextAL").prop( "disabled", false );
   
}

//if($(this).is( ":checked" ) == false)
//{
  //$("#otherTextAL").val("");
//}

 
});



//Application Due Date logic on requirements page


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


//Additional details logic on requirements page
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


//Specific Duration Logic on requirements page
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
              
       }
      else
      {
              $("#recurQuestion").css({'display': 'none'});
       }

  });

  
  });


// Logic for academic major on requirements page.
$("input[name='academicmajor']").click(function() { 

  if($("input[name=academicmajor]:checked").val()=="restrictedmajors")

  {
      
     $("input[name=academicmajornames]").prop( "disabled", false );

  }
  else
  {

     $("input[name=academicmajornames]").prop( "disabled", true );
  }

  
  });


// Logic for other requirements on requirements page.
$("input[name='otherrequirement']").click(function() { 

  if($("input[name=otherrequirement]:checked").val()=="Other Requirements")

  {
      
     $("#otherrequirementdetails").prop( "disabled", false );

  }
  else
  {

     $("#otherrequirementdetails").prop( "disabled", true );
     $("#otherrequirementdetails").val("");
  }

  
  });



});<!-- doc ready-->

