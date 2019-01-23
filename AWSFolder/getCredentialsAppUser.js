AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    Logins: {
        'cognito-idp.us-east-1.amazonaws.com/us-east-1_XXXXXXXXX': 
 result.getIdToken().getJwtToken()
    }
});
 
AWS.config.credentials.get(function(err){
    if (err) {
        alert(err);
    }
});