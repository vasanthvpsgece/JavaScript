$(function() {
	
	//By ID
	//$("#para1").addClass("highlight");
  
	//By Tag name
	//$("p").addClass("highlight");
	
	//By Class
	//$(".class1").addClass("highlight");
	
	//Combination
	//$("#para1, .class1").addClass("highlight");
	
	//Contains
	//$("li:contains('Two')").addClass("highlight");
	
	//next and prev element
	//$("li:contains('Two')").next().addClass("highlight");
	//$("li:contains('Two')").prev().addClass("highlight");
	
	//siblings and parent element
	//$("li:contains('Two')").siblings().addClass("highlight");
	//$("li:contains('Two')").parent().addClass("highlight");
	
	//select nth child
	//$("li:nth-child(2)").addClass("highlight");
	
	//Select using attribute
	//$("p[name='Vasanth']").addClass("highlight")
	//$("p[name!='Vasanth']").addClass("highlight")
	$("p").not("[name]").addClass("highlight");	// Using jQuery's "not" method to access attribute
  }
)