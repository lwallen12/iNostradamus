$('#getEvents').on('click', function(){

const txtEntry = document.getElementById('numbOfAppends');
var appendVal = txtEntry.value;
 
//window.alert(appendVal);
//todo GET request to store JSON object in mem

    i = 1;
    while (i <= appendVal) {
        //todo for each Event in JSON object, append a <p> tag with the date and title, with a button that opens a form
        //todo for each form dynamically created, make a post request
        //todo provide some sort of communication to user that shows when an event has been made a prediction. 

        var message = ("Here!" + i);

        $('#appendMe').append('<p>' + message + `<p>


        <button class="open-button" onclick="openForm()">Open Form</button>

<div class="form-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <h1>Fill out your prediction</h1>

    <label>Who Will Win?</label><br></br>
    <button id='Home'>Home Team</button><button id='Visitor'>Visitor Team<b><br></button></b> </br>

    <label for="email"><b>Winner Score:</b></label>
    <input type="text" placeholder="Enter Winner Score" name="email" required>

    <label for="psw"><b>Loser Score:</b></label>
    <input type="password" placeholder="Enter Loser Score" name="psw" required>

    <button type="submit" class="btn">Save</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Cancel</button>
  </form>
</div>`);

i = i + 1;
    }


//This return false keeps the page from saying 'OHH,  lets redo everything and u don't see the prediction
//return false;

 });