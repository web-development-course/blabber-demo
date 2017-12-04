$(document).ready(function() {
  $('.blab-send-button').click(function() {
    var clonned = $('#empty-blab').clone();
    $(clonned).find('.blab-email').html('clonned');
    $('#empty-blab').after(clonned);
  });
});
