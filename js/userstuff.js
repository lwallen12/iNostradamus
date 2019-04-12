//global variables to be accessed throughout the app
var nickname;
var email;
var cognitoUser;

var data = { 
        UserPoolId : _config.cognito.userPoolId,
            ClientId : _config.cognito.clientId
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
        cognitoUser = userPool.getCurrentUser();
        
       window.onload = function(){
        //$("document").ready(function() {
        if (cognitoUser != null) {
            cognitoUser.getSession(function(err, session) {
                if (err) {
                    alert(err);
                    return;
                }
                console.log('session validity: ' + session.isValid());
          //Set the profile info
          cognitoUser.getUserAttributes(function(err, result) {
            
            console.log(result);
            //document.getElementById("Title").innerHTML = "Well, it would seem that you do exist!"
            email = result[3].getValue();	
            nickname = result[2].getValue();

            Noster_ID = email;

            
            returnActiveMLB(email);
            returnScores(email);

            $('#Noster').append(email);
            $('#name').append(nickname);

          });			
          
            });
        }

        else {
          //window.alert("If this message goes off, I forgot to set the reload back to the homepage.");
          alert('User not logged in, returning you to the home screen.')
          window.location.replace("https://inostradamus.com");
        }
    
    }
      function signOut(){
          if (cognitoUser != null) {
              cognitoUser.signOut();	  
            }
      }

      