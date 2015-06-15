# Slack Invite
Automatically invite people to slack by email.

### Slack is Awesome..but...
But it's API does not include a way to invite new users to your group, so here's a solution.

### Usage

```
var slack-invite = require('slack-invite');

slack-invite({
    email: me@example.com, // set your email to invite here
    channels: 'C03QX9GTF', // set your auto joined channels here
    token: 'xoxp-325435234766' // set your token here
}, function(response){
    console.log(response);
});
```
