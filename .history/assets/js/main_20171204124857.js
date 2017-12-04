$(document).ready(function(){
  $('.blab-send-button').click(function() {
    //read the values in the inputs
    var content = ($('.blab-content-input').val());
    var email = ($('.blab-email-input').val());

    //create a new blab (maybe clone?)
    var newBlab = $('#empty-blab').clone();

    //set the values from the inputs to the new blab
    $(newBlab).attr('id', 'new-blab');
    $(newBlab).find('.blab-email').html(email);
    $(newBlab).find('.blab-content').html(content);
    $(newBlab).find('.blab-image img')
    .attr('src', 'https://email2pic.herokuapp.com/gravatar/' + email);
    //add the blab to the html
    //remove the sample blab

    $('#empty-blab').before(newBlab);
  });
})
