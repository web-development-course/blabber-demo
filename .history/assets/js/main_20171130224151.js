$(document).ready(function() {
  $('.blab-send-button').click(function(e) {
    e.preventDefault();
    var clonned = $('#empty-blab').clone();
    $(clonned).find('.blab-email').html($('.blab-email-input').val());
    $('#empty-blab').after(clonned);
  });
});
