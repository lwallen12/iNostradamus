
//var entryTag = document.getElementById('winner');
//var userTag = document.getElementById('winner');
var winnerTag = document.getElementById('winner');
var loserTag = document.getElementById('winner');
var numberTag = document.getElementById('winner');
var mvpTag = document.getElementById('winner');
var stealerTag = document.getElementById('winner');
var homerTag = document.getElementById('winner');
var whyTag = document.getElementById('winner');
var commentTag = document.getElementById('winner');


const myDropDown = document.querySelector('select');
var myData;

$('#iClickNow').on('click', function(){
	var myPar = document.querySelector('p');
    var myDropDownPick = myDropDown.options[myDropDown.selectedIndex].value;
    var baseURL = 'https://rnm99ngfe7.execute-api.us-east-1.amazonaws.com/prod/-pythongetparam?userID=';
    var completeURL = baseURL + myDropDownPick;
    //all variables work!

    $.ajax({
                type: 'GET',
                url:  completeURL,


                success: function(data){

						myData = data.Predictions;

                    }
                
            });
	var myEntryID = myData[0].EntryID;
	var myUserID = myData[0].myUserID;

	var myWSWinner = myData[1].WSWinner;
	var mySecondPlace = myData[1].SecondPlace;
	var myNumberGames = myData[1].NumberGames;
	var myMVP = myData[1].MVP;
	var myTacoStealer = myData[1].TacoStealer;
	var myMostHomers = myData[1].MostHomers;
	var myWhy = myData[1].Why;
	var myComments = myData[1].Comments;


	winnerTag.innerText = myWSWinner;
	loserTag.innerText = mySecondPlace;
	numberTag.innerText = myNumberGames;
	mvpTag.innerText = myMVP;
	stealerTag.innerText = myTacoStealer;
	homerTag.innerText = myMostHomers;
	whyTag.innerText = myWhy;
	commentTag.innerText = myComments;

    
myPar.innerText = myDropDownPick;

 });