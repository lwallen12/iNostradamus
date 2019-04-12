//var j = 101;
//var k = 1001;

//var appendVal = 0;

$('#getEvents').on('click', function(){


    //Sorry these variables have silly names
    //I did this to tie each of the controls on a form together for one event
    
    var i = 1; //signifies a unique game within the JSON Event
    var j = 101; //unique id of a form
    var k = 1001; //unqique id cancel button
    var v = 2001; //team one check box
    var w = 3001; //team two check box
    var x = 4001; //winer score input
    var y = 5001; //loser score input
    var z = 6001; //Overtime check box
    var a = 7001; //event id label
    var b = 8001; //game title label
    var c = 9001; //Month label
    var s = 10001; //submit button
    

    var appendVal = 0;

    //window.alert(appendVal);
    //todo GET request to store JSON object in mem
    const teamdd = document.getElementById('teamdd');
    const monthdd = document.getElementById('monthdd');

    var baseURL = 'https://rnm99ngfe7.execute-api.us-east-1.amazonaws.com/prod/SelectMLBEvent?'
    var home_TeamParam = 'Home_Team=' + teamdd.options[teamdd.selectedIndex].value;
    var visitor_TeamParam = '&Visitor_Team=' + teamdd.options[teamdd.selectedIndex].value;
    var month_DateParam = '&Month_Date=' + monthdd.options[monthdd.selectedIndex].value;

    //window.alert(home_TeamParam);

    var completeURL = baseURL + home_TeamParam + visitor_TeamParam + month_DateParam;

    //window.alert(completeURL);


        /* Passes the above URL with paramaters to the the API in a get request */

        $.ajax({
                        type: 'GET',
                        url:  completeURL,

                        //On success, two lopps are kicked off, one to count how many events are in the GET request
                        // the other to then append a form. (May have to create an inner loop so the form is dynamic).
                        success: function(data){
                                    $('#appendMe').html('');


                                //console.log(data);

                                //For everything in data.Events (we'll call each thing game), increment the append value, log and alert some stuff. For now
                                data.Events.forEach(function(game){
                                    appendVal++;
                                    console.log(game.Title);
                                    console.log(game.Event_ID);
                                    var Event_ID = game.Event_ID;//Event_ID
                                    var Home_Team = game.Home_Team;
                                    var Visitor_Team = game.Visitor_Team;
                                    var Title = game.Title;//Title
                                    var Month_Date = game.Month_Date;//Month_Date
                                    var EST_Start = game.EST_Start;//EST_Start
                                    var MLB_Date = game.MLB_Date;
                                   // window.alert(MLB_Date);

                                    //var niceDate = typeof MLB_Date;
                                    //window.alert(niceDate);

                                    //window.alert('In success function: ' + appendVal);
                                    //Should we add team freindly name?

                                    var MLB_Date_Time = game.MLB_Date;
                                    var Plain_MLB_Date = MLB_Date_Time.split(' ')[0];//MLB_Date

                                    var realDate = new Date(Plain_MLB_Date);

                                    var niceDate = realDate.toDateString("MMM, d")

                                   // window.alert("niceDate: " + niceDate);

                                    blah = 'HOU';

                                    //window.alert(Home_Team);

                                    //var message = game.Title + ': ' + MLB_Date;
                                    //window.alert('While appending forms: ' + appendVal);
                                        //var message = ("Here!" + i);

                                        $('#appendMe').append('<p><b>' + game.Title + `:</b> `+ niceDate + `<p> <button id=`+i+` class="open-button" onclick="openForm(this.id)">Make a Prediction</button>

                                            

                                        <!--First get each form by the form id
                                        2nd... use .children to get all the children, because we are all children of the great form
                                        3rd... narrow down into each type of heading thing
                                        4th... from there grab each element by its actual name-->

                                        
                                            <div class="form-popup" id=`+j+` Form>
                                                <form class="form-container">

                                                <!--Get this by getting maybe the first div? -->
                                             <div class="form-heading">
                                                <h1>Fill out your prediction</h1>


                                                
                                                <p><b>Event ID: </b><label id="EventID">` + Event_ID + `</label></p>
                                                <p><b>Title: </b><label id="EventTitle" value=`+Title+`>` + Title + `</label></p>
                                                <p><b>Date: </b><label id="GameDate">`+ niceDate + `</label></p>
                                                <p><b>Start: </b><label id="StartDate">` + EST_Start + `</label>
                                                <p hidden id=Month>`+Month_Date+`</p>
                                             </div>

                                                <br></br>

                                                <img src="teamicons/`+Visitor_Team+`.png" class="team-icon" alt="Visitor">
                                                <label>Who Will Win?</label>
                                                <img src="teamicons/`+Home_Team+`.png" class="team-icon" alt="Home">
                                                <br></br>

                                                <!--Get this by name?-->
                                                <div name="CheckBoxes">                          
                                                  <input type="checkbox" onclick="unCheckt2()" id="HomeCheck" name="team1" value=`+Home_Team+`>
                                                  <label for="team">`+Home_Team+`</label>
                                                
                                                  <input type="checkbox" onclick="unCheckt1()" id="VisitorCheck" name="team2" value=`+Visitor_Team+`>
                                                  <label for="team2">`+Visitor_Team+`</label>
                                                </div>
                                                <br></br>

                                                <label for="email"><b>Winner Score:</b></label>
                                                <input id="WinnerScore" type="text" placeholder="Enter Winner Score" name="email">


                                                <label for="psw"><b>Loser Score:</b></label>
                                                <input id="LoserScore" type="text" placeholder="Enter Loser Score">
                                                <br></br>

                                                <input id="OTCheck" type="checkbox"></input>
                                                <label id="ottt"><b>Check here if there will be extra innings</b></label>
                                                <br></br>
                                                <!--submit had s-->
                                                <button id=`+s+` class="btn" type="button" onclick="submitPrediction(this.id)"; return="false";>Save</button>
                                                <button id=`+k+` type="button" class="btn cancel" onclick="closeForm(this.id)">Close</button>
                                            
                                              </form>
                                            </div>


                                      `);
                                    j++;
                                    k++;
                                    v++;
                                    w++;
                                    x++;
                                    y++;
                                    z++;
                                    s++;
                                    a++;
                                    b++;
                                    c++;
                                    i = i + 1;
                                })

                                $(".form-popup").css("border", "3px solid black");

                                //appends a static form
                                
                               //window.alert(appendVal); //return false;
                               
                                    
                            } //closes off the entire success function

                                                    
                    }); //closes off ajax function


 });

/* ***This shows the data in memory!

var completeURL = 'https://rnm99ngfe7.execute-api.us-east-1.amazonaws.com/prod/SelectMLBEvent?Home_Team=HOU&Visitor_Team=HOU&Month_Date=July';

$.ajax({
                type: 'GET',
                url:  completeURL,


                success: function(data){

                        //console.log(data);
                        data.Events.forEach(function(game){
                        console.log(game.Title);
                        console.log(game.Event_ID);
                    })


                    }
                
            }); */


            