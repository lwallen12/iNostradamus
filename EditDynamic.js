var j = 101;
var k = 1001;

var appendVal = 0;

$('#getEvents').on('click', function(){

    //const txtEntry = document.getElementById('numbOfAppends');
    
     
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

        $.ajax({
                        type: 'GET',
                        url:  completeURL,


                        success: function(data){

                                //console.log(data);
                                data.Events.forEach(function(game){
                                    appendVal++;
                                    console.log(game.Title);
                                    console.log(game.Event_ID);
                                    window.alert(appendVal);



                            })

                               //window.alert(appendVal); //return false;
                                window.alert(appendVal);
                                    while (i <= appendVal) {
                                        //todo for each Event in JSON object, append a <p> tag with the date and title, with a button that opens a form
                                        //todo for each form dynamically created, make a post request
                                        //todo provide some sort of communication to user that shows when an event has been made a prediction. 
                                window.alert(appendVal);
                                        var message = ("Here!" + i);

                                        $('#appendMe').append('<p>' + message + `<p> <button id=`+i+` class="open-button" onclick="openForm(this.id)">Open Form</button>

                                            <div class="form-popup" id=`+j+`>
                                                <form action="/action_page.php" class="form-container">
                                                <h1>Fill out your prediction</h1>

                                                <label>Who Will Win?</label><br></br>
                                                <div>
                                                  <input type="checkbox" onclick="unCheckt2()" id="team1" name="team1" value="HOU">
                                                  <label for="team">Astros</label>
                                                
                                                  <input type="checkbox" onclick="unCheckt1()" id="team2" name="team2" value="DAL">
                                                  <label for="team2">Rangers</label>
                                                </div>
                                                <br></br>

                                                <label for="email"><b>Winner Score:</b></label>
                                                <input type="text" placeholder="Enter Winner Score" name="email" required>

                                                <label for="psw"><b>Loser Score:</b></label>
                                                <input type="password" placeholder="Enter Loser Score" name="psw" required>

                                                <input type="checkbox" id="ot"></input>
                                                <label for="ot">Will there be extra innings?</label>
                                                <br></br>

                                                <button type="submit" class="btn">Save</button>
                                                <button id=`+k+` type="button" class="btn cancel" onclick="closeForm(this.id)">Cancel</button>
                                              </form>
                                            </div>


                                      `);
                                j++;
                                k++;
                                i = i + 1;
                                    }
                            }
                        
                    });



    i = 1;
    window.alert(appendVal);
    while (i <= appendVal) {
        //todo for each Event in JSON object, append a <p> tag with the date and title, with a button that opens a form
        //todo for each form dynamically created, make a post request
        //todo provide some sort of communication to user that shows when an event has been made a prediction. 
window.alert(appendVal);
        var message = ("Here!" + i);

        $('#appendMe').append('<p>' + message + `<p> <button id=`+i+` class="open-button" onclick="openForm(this.id)">Open Form</button>

            <div class="form-popup" id=`+j+`>
                <form action="/action_page.php" class="form-container">
                <h1>Fill out your prediction</h1>

                <label>Who Will Win?</label><br></br>
                <div>
                  <input type="checkbox" onclick="unCheckt2()" id="team1" name="team1" value="HOU">
                  <label for="team">Astros</label>
                
                  <input type="checkbox" onclick="unCheckt1()" id="team2" name="team2" value="DAL">
                  <label for="team2">Rangers</label>
                </div>
                <br></br>

                <label for="email"><b>Winner Score:</b></label>
                <input type="text" placeholder="Enter Winner Score" name="email" required>

                <label for="psw"><b>Loser Score:</b></label>
                <input type="password" placeholder="Enter Loser Score" name="psw" required>

                <input type="checkbox" id="ot"></input>
                <label for="ot">Will there be extra innings?</label>
                <br></br>

                <button type="submit" class="btn">Save</button>
                <button id=`+k+` type="button" class="btn cancel" onclick="closeForm(this.id)">Cancel</button>
              </form>
            </div>


      `);
j++;
k++;
i = i + 1;
    }


//This return false keeps the page from saying 'OHH,  lets redo everything and u don't see the prediction
//return false;

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