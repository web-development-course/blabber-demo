$(document).ready(function() {
  $('.blab-send-button').click(function() {
    var clonned = $('#empty-blab').clone();
    $('#empty-blab').after(clonned);
  });
});
