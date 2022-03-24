/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
tweets.forEach((tweet) => {
  $('#tweets-container').append(createTweetElement(tweet))
});
};

const createTweetElement = function(tweet) {
  const $tweet = `<article>
  <header>
    <div class="tweet-user">
      <div class="user-profile">
        <img src="https://i.imgur.com/nlhLi3I.png">
        <span style="margin-left: 0.5em;">${tweet.user.name}</span>
      </div>
      <span class="user-tag">${tweet.user.handle}</span>
      </div>
      <br>
      <span class="past-tweets">${tweet.content.text}</span>
  </header>
  <footer>
    <span class="time-ago">${timeago.format(tweet.created_at)}</span>
    <div>
      <i class="fa-solid fa-flag tweet-icons"></i>
      <i class="fa-solid fa-retweet icon tweet-icons"></i>
      <i class="fa-solid fa-heart tweet-icons"></i>
    </div>
  </footer>
</article>`;
  return $tweet;
}

const loadTweets = function() {
  $.ajax('/tweets', {
    method: "GET", // brings the obj as response 
    dataType: "json", 
  }).then((response) => { 
    renderTweets(response)
  });
};
 
$(document).ready(function() { // document.ready make that the code only function when the document is ready
  $('form').submit(function(event) { // prevents from taking to a next page which was /tweets
    event.preventDefault(); // preventing from going to /tweets
    let textarea = $('textarea').val();
    
    if (textarea.length > 140) {
      alert('Too many characters!');
    } else if (textarea.length <= 0) {
      alert('Tweet cannot be empty!') 
    } else {
      $.ajax('/tweets', {
        method: "POST",
        data: $(this).serialize(),
      });
    }
  });
  loadTweets()
});