const winnerTag = document.getElementById('winner');
const loserTag = document.getElementById('loser');
const numberTag = document.getElementById('gameNumber');
const mvpTag = document.getElementById('mvp');
const stealerTag = document.getElementById('stealer');
const homerTag = document.getElementById('homer');
const whyTag = document.getElementById('why');
const commentTag = document.getElementById('comment');



$('#iClickNow').on('click', function(){
    const myDropDown = document.querySelector('select');
    var myDropDownPick = myDropDown.options[myDropDown.selectedIndex].value;
    var baseURL = 'https://rnm99ngfe7.execute-api.us-east-1.amazonaws.com/prod/-pythongetparam?userID=';
    var completeURL = baseURL + myDropDownPick;
    var myData;
    //all variables work!
    

    $.ajax({
                type: 'GET',
                url:  completeURL,


                success: function(data){

                        myData = data.Predictions;

                        //the two variables declared below are not used, but will be here for reference
                        var myEntryID = myData[0].EntryID;
                        var myUserID = myData[0].UserName;


                        winnerTag.innerText = ('World Series Winner: ' + myData[1].WSWinner);
                        loserTag.innerText = ('World Series Loser: ' + myData[1].SecondPlace);
                        numberTag.innerText = ('Number of Games: ' + myData[1].NumberGames);
                        mvpTag.innerText = ('MVP: ' + myData[1].MVP);
                        stealerTag.innerText = ('Taco Stealer: ' + myData[1].TacoStealer);
                        homerTag.innerText = ('Most Homers: ' + myData[1].MostHomers);
                        whyTag.innerText = ('Why: ' + myData[1].Why);
                        commentTag.innerText = ('Comments: ' + myData[1].Comments);


                    }
                
            });

//This return false keeps the page from saying 'OHH,  lets redo everything and u don't see the prediction
return false;

 });