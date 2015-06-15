var express = require('express');
var router = express.Router();
var slackInvite = require('slack-invite');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req,res){
  var email = req.body.email;
  slackInvite({
    email:email,
    token:'xoxp-6029521170-6029753424-6404695074-214d95',
    team:'StartUpCB'
  },function(response){
    console.log(response);
  });
  console.log(email);
});
module.exports = router;
