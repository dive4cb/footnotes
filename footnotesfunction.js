/**
 *  Example Javascript for footnotes many to one footnote
 *  All classes and id can be named whatever, but for demo purposes this uses specific class names
 *  
 */

$(document).ready(function(event){
	$(".singleFoot").on("click", function(event){
		addReferenceBackToFoot($(this));
	});
});


function addReferenceBackToFoot($this){
	    var newRef = "#" + $this.attr("id");	
	    var footNoteRefClass= $this.attr("class").substr($this.attr("class").indexOf("footnote"));
	    $(".trueFoot").each(function(){
	    	 ($(this).hasClass(footNoteRefClass) ? $(this).attr("href" , newRef) :null);
	    });
	   
};