export function resetPassword(username) {
    // const poolData = { UserPoolId: xxxx, ClientId: xxxx };
    // userPool is const userPool = new AWSCognito.CognitoUserPool(poolData);

    // setup cognitoUser first
    cognitoUser = new AWSCognito.CognitoUser({
        Username: username,
        Pool: userPool
    });

    // call forgotPassword on cognitoUser
    cognitoUser.forgotPassword({
        onSuccess: function(result) {
            console.log('call result: ' + result);
        },
        onFailure: function(err) {
            alert(err);
        },
        inputVerificationCode() { // this is optional, and likely won't be implemented as in AWS's example (i.e, prompt to get info)
            var verificationCode = prompt('Please input verification code ', '');
            var newPassword = prompt('Enter new password ', '');
            cognitoUser.confirmPassword(verificationCode, newPassword, this);
        }
    });
}

// confirmPassword can be separately built out as follows...  
function confirmPassword(username, verificationCode, newPassword) {
    cognitoUser = new AWSCognito.CognitoUser({
        Username: username,
        Pool: userPool
    });

    return new Promise((resolve, reject) => {
        cognitoUser.confirmPassword(verificationCode, newPassword, {
            onFailure(err) {
                reject(err);
            },
            onSuccess() {
                resolve();
            },
        });
    });
}




///////////////////
var sameUsername = $('userReset').val();
  var verificationCode = $('verify').val();
  var newPassword = $('newPAssword').val();

//
  var authenticationData = {
              Username : sameUsername,
              Password : 'Mypass123',
          };
        
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
//

  var poolData = {
              UserPoolId : _config.cognito.userPoolId, // Your user pool id here
              ClientId : _config.cognito.clientId, // Your client id here
          };
        
          var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

          console.log(userPool);
        
          var userData = {
              Username : sameUsername,
              Pool : userPool,
          };
        
          var cognitoUser = new AmazonCognitoIdentity.CognitoUserPool(userData);
	
		cognitoUser.confirmPassword(verificationCode, newPassword, {
		onSuccess: function (Data) {
  
			    console.log('Success: ' + Data);
	    
	    	       				   },
		onFailure: function (err)  
		{

	   			 console.log('Error: ' + err);
	     }
       
        
    });