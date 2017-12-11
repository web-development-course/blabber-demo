function renderBlab(blabData) {
  //create a new blab (maybe clone?)
  var newBlab = $('#empty-blab').clone();

  //remove the sample blab
  $(newBlab).attr('id', blabData.id);

  //set the values from the inputs to the new blab
  $(newBlab).find('.blab-time').html(blabData.createdAt);
  $(newBlab).find('.blab-email').html(blabData.email);
  $(newBlab).find('.blab-content').html(blabData.content);
  $(newBlab).find('.blab-upvotes').html(blabData.upvotes);
  $(newBlab).find('.blab-image img')
  .attr('src', 'https://email2pic.herokuapp.com/gravatar/' + blabData.email);

  //make the buttons works
  $(newBlab).find('.delete-blab').click(function() {
    $(newBlab).remove();
    $.ajax({
      method: 'DELETE',
      url: '/blabs/' + $(newBlab).attr('id')
    })
  });
  $(newBlab).find('.upvote-blab').click(function() {
    var currentUpvotes = Number($(newBlab).find('.blab-upvotes').html());
    currentUpvotes++;
    $(newBlab).find('.blab-upvotes').html(currentUpvotes);
    $.ajax({
      method: 'PUT',
      url: '/blabs/' + $(newBlab).attr('id'),
      data: {
        upvotes: currentUpvotes
      }
    })
  });

  //add the blab to the html
  $('#empty-blab').before(newBlab);
}

$(document).ready(function(){

  $.get('/blabs', function(blabs) {
    for (var i = 0; i < blabs.length; i++) {
      renderBlab(blabs[i]);
    }
  })

  $('.blab-send-button').click(function() {
    //read the values in the inputs
    var content = ($('.blab-content-input').val());
    var email = ($('.blab-email-input').val());

    //send a POST request to the server - save the blab
    $.post('/blabs', {
      content: content,
      email: email,
      upvotes: 1
    }, function (savedBlab) {
      renderBlab(savedBlab);
    })
  });
})
