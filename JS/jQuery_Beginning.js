
/**********************************************************************************
"jQuery" is a function that has a parameter called 'selector expression'
document is the selecter expression in below example.

jQuery(document) - will return a object of type jQuery with the context set to
					parameter passed (document object is returned in this case)
					
when the document object in DOM model of the web page is ready, the function 
defined with in the ready property will be executed.

symbol $ can be used instead of word jQuery
Also $(document).ready can be replaced with $

jQuery object is a array like structure which has all selected DOM objects using the
selectors passed in.
***********************************************************************************/
/* Type 1 */
jQuery(document).ready(function() {
						   alert("This Works!!");
					   }
					  );
					  
function readyDocument() {
    alert("This also works!!");
}

/* Type 2 */
$(document).ready(readyDocument());

/* Type 3 */
$(alert("Even this works!!!"));

/*********************************************************************************
Passing CSS Selector expressions. All returns objects of type jQuery.

$('#para1') - Selecting objects with id 'para1'
$('.class1') - Selecting objects with class 'class1'
$('p') - Selecting all objects for 'p' element
**********************************************************************************/
