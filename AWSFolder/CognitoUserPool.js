var poolData = {
    UserPoolId : 'us-east-1_yrcRCQ0db', // your user pool id here
    ClientId : '59grpehu7g5qdmk10gnm1k10e3' // your app client id here
};


var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
    Username : '', // your username here
    Pool : userPool
};