

         var API_URL = 'https://rnm99ngfe7.execute-api.us-east-1.amazonaws.com/prod/entries';
         var My_API = 'https://rnm99ngfe7.execute-api.us-east-1.amazonaws.com/prod/pythonwrite';
         $(document).ready(function(){
            $.ajax({
                type: 'GET',
                url:  My_API,


                success: function(data){
                    $('#entries').html('');



                    data.Items.forEach(function(blah){
                        $('#entries').append('<p>' + blah.message + '<p>');
                    })


                    data.Items.forEach(function(blah){
                        $('#entries2').append('<option>' + blah.message + '</option>');
                    })
                }
            });
         });


         $('#submitButton').on('click', function(){
         	$.ajax({
         		type: 'POST',
         		url: API_URL,
         		data: JSON.stringify({"message": $('#msg').val()}),
         		contentType: "application/json",


         		success: function(data){
         			location.reload();
         		}
         	});

         	return false;

         });

         
         $('#submitButton').on('click', function(){
            $.ajax({
                type: 'POST',
                url: My_API,
                data: JSON.stringify({"message": $('#msg').val()}),
                contentType: "application/json",


                success: function(data){
                    location.reload();
                }
            });

            return false;

         });

