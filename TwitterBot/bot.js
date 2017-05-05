var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);


// TWEET JEROME HARDAWAY ONLY
var trollJerome = function() {
  'use strict';
  var params = {
    q: ('@JeromeHardaway')
  }

  Twitter.post('statuses/update', {status: '@JeromeHardaway Does my TwitterBot work?'}, function(err, data, response) {
    if (!err) {
      console.log('Jerome Trolled!');
    }

    if (err) {
      console.log('FAILED TO TROLL JEROME');
    }
  })
}
trollJerome();
setInterval(trollJerome, 3000000);

// RETWEETING
var retweet = function() {
  'use strict';
  var params = {
    q: '#nodejs, #Nodejs',
    result_type: 'recent',
    lang: 'en'
  }

  Twitter.get('search/tweets', params, function(err, data) {
    if (!err) {
      var retweetID = data.statuses[0].id_str;
      Twitter.post('statuses/retweet/:id', {
        id: retweetID
      }, function(err, response) {
        if (response) {
          console.log('Retweeted!!!');
        }

        if (err) {
          console.log('Something went wrong while RETWEETING... Duplication maybe...');
        }
      });
    }

    else {
      console.log('Something went wrong while SEARCHING...');
    }
  });
}

retweet();
setInterval(retweet, 3000000);
