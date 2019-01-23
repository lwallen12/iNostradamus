cognitoUser.confirmRegistration('123456', true, function(err, result) {
    if (err) {
        alert(err);
        return;
    }
    console.log('call result: ' + result);
});