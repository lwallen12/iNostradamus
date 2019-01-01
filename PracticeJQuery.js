


//Basic Get interaction with a jquery library
//https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js as the source file.


//This will log whatever is in the API as long as you have authority and the API has a GET method

$(document).ready(function(){
            $.ajax({
                type: 'GET',
                url:  myPracAPI,


                success: function(data){

						console.log(data);
                    
                }
            });
         });



//Post method,
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

            //Line is important, this basically says not to reload the page

            return false;

         });