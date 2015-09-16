//Problem: It look Horrid in smaller browser widths and therefore small devices.




//Hide the text links and swap them out with a more appropriate navigation


//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  
  //Create an option
  var $option = $("<option></option>");
  
  //Deal with seceted options depending on current page

if ($anchor.parent().hasClass("selected")) {
$option.prop("selected", true);
}
  
  //Option's value is the href
  $option.val($anchor.attr("href"));
  //Options text is the text of link
  $option.text($anchor.text());
  
  //Append option to select
  $select.append($option);
});


////GO BUTTON: Create a button to click to go to selects locations
//
//var $button = $("<button>Go</button>");
//$("#menu").append($button);

//Bind change the lister to select
$select.change(function() {

  //Go to selects location
  window.location = $select.val();
});


















