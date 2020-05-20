
var contactId = document.getElementById('contact');
var contactIdx = contactId.firstChild.nodeValue;
contactIdx = contactIdx.replace('For any enquiries you can','Enquiries?');
contactId.firstChild.nodeValue = contactIdx; 
$(document).ready(function() {
    $("h1").click(function(){
        alert("Thanks for visiting the website");});
    $("details").css("background-color","white");
    $("li:first").width(100);
});

