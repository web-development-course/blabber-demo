$(document).ready(function(){
  $('.blab-send-button').click(function() {
    //read the values in the inputs
    var content = ($('.blab-content-input').val());
    var email = ($('.blab-email-input').val());

    //create a new blab (maybe clone?)
    var blab = $('#empty-blab').clone();
    $('#empty-blab').before(blab);
    //set the values from the inputs to the new blab
    //add the blab to the html
  });
})
