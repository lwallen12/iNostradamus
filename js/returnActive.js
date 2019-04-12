function returnActiveMLB(Noster_ID) { 

    

    //$('#loadActiveHere').append('<div class="loader"></div>');
    
    var baseURL = 'https://rnm99ngfe7.execute-api.us-east-1.amazonaws.com/prod/readactivemlb?Noster_ID=';
    var completeURL = baseURL + Noster_ID;

    //alert("Should be the Noster: " + Noster_ID);

    $.ajax({
        url: completeURL,
        type: "GET",
        success: function(result) {
                console.log(result);
                
                var i = 0;
                result.Events.forEach(function(prediction) {

                    var Event_ID = prediction.Event_ID;
                    var Event_Date = prediction.Event_Date;
                    var Winner = prediction.Winner;
                    var Loser = prediction.Loser;
                    var Winner_Score = prediction.Winner_Score;
                    var Loser_Score = prediction.Loser_Score;
                    //var OT = prediction.OT;
                    var Comments = prediction.Comments;
                    
                    $('#Clear').toggle();
                    $('#MLBSeeActivePred').toggle();

                    console.log(Event_ID);

                    $('#ActivePredictions').append(

                        `<br>
                        <div id=`+i+` class="disappear">
                            <label><b>Event ID:</b></label><label id='Event_ID'>`+Event_ID+`</label><br>
                            <label><b>Event Date:</b></label><label id='Event_ID'>`+Event_Date+`</label><br>
                            <label><b>Winner:</b></label><label id='Event_ID'>`+Winner+`</label><br>
                            <label><b>Loser:</b></label><label id='Event_ID'>`+Loser+`</label><br>
                            <label><b>Winner Score:</b></label><label id='Event_ID'>`+Winner_Score+`</label><br>
                            <label><b>Loser Score:</b></label><label id='Event_ID'>`+Loser_Score+`</label><br>
                            <label><b>Comments:</b></label><label id='Event_ID'>`+Comments+`</label><br>
                        </div>
                        <br>
                        <br>
                        
                        `

                    );

                i = i + 1;

                }) 
                

              }
      });
    
     // $('#loadActiveHere').remove();
    
};



function clearPreds() {
    $('#ActivePredictions').children().remove();

    $('#Clear').toggle();
    $('#MLBSeeActivePred').toggle();
}