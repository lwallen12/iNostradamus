function returnScore(Noster_ID) {

    

    var baseURL = 'https://rnm99ngfe7.execute-api.us-east-1.amazonaws.com/prod/readrunningnosterprofilescore?Noster_ID='
    var completeURL = baseURL + Noster_ID;
    

    $.ajax({
        type: 'GET',
        url:  completeURL,

        success:   function(data){
                   console.log(data.Score[0].Noster_ID);

                  //Currently, mistyped variable for totalscore in API Gateway
                   var totalScore = data.Score[0].Total_score;
                   var totalCount = data.Score[0].Total_Count;
                   var MLBScore = data.Score[0].MLB_Score;
                   var MLBCount = data.Score[0].MLB_Count;

                   console.log(totalScore);
                   

                   $('#TotalScoreVal').text(totalScore);
                   $('#TotalCount').text(totalCount);

                   $('#MLBScoreVal').text(MLBScore);
                   $('#MLBCount').text(MLBCount);
          }
        
    });



}


function printNothing() {
    alert('hi');
}