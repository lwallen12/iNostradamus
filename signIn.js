var authenticationData = {
        Username : '...', // your username here
        Password : '...', // your password here
    };
    
var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
 
var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var accessToken = result.getAccessToken().getJwtToken();
        },
 
        onFailure: function(err) {
            alert(err);
        },
        mfaRequired: function(codeDeliveryDetails) {
            var verificationCode = prompt('Please input verification code' ,'');
            cognitoUser.sendMFACode(verificationCode, this);
        }
    });