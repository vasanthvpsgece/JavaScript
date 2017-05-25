/* Attaching a function or object to a jQuery object */

$.myCustomMethod = function() {
					    alert("This is displayed by custom jQuery method");
					}
					
/* Attaching a object to a jQuery object */

$.myCustomObject = {
	show: function (){ alert('hi'); }
}

/******************************************************************************
Modifying html content and html tags.

$("selector").text("Text to be replaced")
$("selector").html("html code to be replaced")
$("selector").prepend("text/html content to be added before selector")
$("selector").append("text/html content to be added after selector")
*******************************************************************************/
$(function() { alert('jQuery works!'); 
			   $("#para1").text("This text is a Replaced one with jQuery");
			   $("#para2").html("<b>This is my Second paragraph</b>");
			   $("#para1").prepend("<h2>This Header 2 is added by jQuery prepend</h2>");
			   $("#para1").append("<h3>This Header 3 is added by jQuery append</h3>");
			  }
  )
