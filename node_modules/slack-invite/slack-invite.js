var request = require('request');
var addSlackMember = function(options, callback){
    var email               = options.email,
        time                = new Date().getTime(),
        slack_team          = options.team,
        autojoinChannels    = options.channels,
        authToken           = options.token,
        inviteUrl = 'https://' + slack_team + '.slack.com/api/users.admin.invite?t=' + time;


    request.post(inviteUrl, {
        form: {
            email: email,
            channels: autojoinChannels,
            token: authToken,
            set_active: true,
            _attempts: 1
        }
    }, function(err,httpResponse,body){
        callback(httpResponse);
    });
}

module.exports = addSlackMember;
