$(document).ready(function(){
  $('.blab-send-button').click(function() {
    //read the values in the inputs
    var content = ($('.blab-content-input').val());
    var email = ($('.blab-email-input').val());

    //create a new blab (maybe clone?)
    var newBlab = $('#empty-blab').clone();

    //remove the sample blab
    $(newBlab).attr('id', 'new-blab');

    //set the values from the inputs to the new blab
    $(newBlab).find('.blab-time').html((new Date()).toString());
    $(newBlab).find('.blab-email').html(email);
    $(newBlab).find('.blab-content').html(content);
    $(newBlab).find('.blab-image img')
    .attr('src', 'https://email2pic.herokuapp.com/gravatar/' + email);

    //make the buttons works
    $(newBlab).find('.delete-blab').click(function() {
      $(newBlab).remove();
    });
    $(newBlab).find('.upvote-blab').click(function() {
      var currentUpvotes = Number($(newBlab).find('.blab-upvotes').html());
      currentUpvotes++;
      $(newBlab).find('.blab-upvotes').html(currentUpvotes);
    });

    //add the blab to the html
    $('#empty-blab').before(newBlab);
  });
})
