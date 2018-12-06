$(function () {

  var $entries = $('#entries')

  $.ajax({
     type: 'GET',
     url: 'https://rnm99ngfe7.execute-api.us-east-1.amazonaws.com/prod/entries',
     success: function(data) {
       $.each(data, function(i, message) {
       	$entries.append('<li>message: '+ message.message +'</li>');
           
      });  
    }
  });
});