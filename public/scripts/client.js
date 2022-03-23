/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
tweets.forEach((tweet) => {
  $('#tweets-container').append(createTweetElement(tweet))
})
}

const createTweetElement = function(tweet) {
  const $tweet = `<article>
  <header>
    <div class="tweet-user">
      <div class="user-profile">
        <img src="https://i.imgur.com/nlhLi3I.png">
        <span style="margin-left: 0.5em;">Rhoda Jacobs</span>
      </div>
      <span class="user-tag">@MrsJacobs</span>
      </div>
      <br>
      <span class="past-tweets">Hello World!</span>
  </header>
  <footer>
    <span class="time-ago">10 days ago</span>
    <div>
      <i class="fa-solid fa-flag tweet-icons"></i>
      <i class="fa-solid fa-retweet icon tweet-icons"></i>
      <i class="fa-solid fa-heart tweet-icons"></i>
    </div>
  </footer>
</article>`;
  return $tweet;
}

renderTweets(data);

// const $tweet = createTweetElement(tweetData);
// console.log($tweet); // to see what it looks like
// to add it to the page so we can make sure it's got all the right elements, classes, etc.
// $('#tweets-container').append($tweet); 
