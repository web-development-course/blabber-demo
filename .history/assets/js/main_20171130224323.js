$(document).ready(function() {
  $('.blab-send-button').click(function() {
    var clonned = $('#empty-blab').clone();
    $(clonned).find('.blab-email').html($('.blab-email-input').val());
    $(clonned).find('.blab-content').html($('.blab-email-content').text());
    $('#empty-blab').after(clonned);
  });
});
