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
  $('#tweets-container').prepend(createTweetElement(tweet))
});
};

const createTweetElement = function(tweet) {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  const $tweet = `<article>
  <header>
    <div class="tweet-user">
      <div class="user-profile">
        <img src=${escape(tweet.user.avatars)}>
        <span style="margin-left: 0.5em;">${escape(tweet.user.name)}</span>
      </div>
      <span class="user-tag">${escape(tweet.user.handle)}</span>
      </div>
      <br>
      <span class="past-tweets">${escape(tweet.content.text)}</span>
  </header>
  <footer>
    <span class="time-ago">${escape(timeago.format(tweet.created_at))}</span>
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
  }).then((response) => { // success 
    renderTweets(response)
  });
};
 
$(document).ready(function() { // document.ready make that the code only function when the document is ready
  $('form').submit(function(event) { // prevents from taking to a next page which was /tweets
    event.preventDefault(); // preventing from going to /tweets
    let textarea = $('textarea').val();

    if (textarea.length > 140) {
      const errorMsg = $(this).parent().find(".long-text-area");
      errorMsg.css('visibility', 'visible').slideDown(200).fadeOut(3000);

    } else if (textarea.length <= 0) {
      const errorMsg = $(this).parent().find(".empty-error-msg");
      errorMsg.css('visibility', 'visible').slideDown(200).fadeOut(3000);
      
    } else {
      $.ajax('/tweets', {
        method: "POST",
        data: $(this).serialize(), // data as query 
      }).then(() => {
        $('textarea').val(''); // remove text from textarea
        $('output').text(140); // reset the counter to 140 
        $.get('/tweets', (serverResponse) => {
          const newTweet = [serverResponse.slice(-1).pop()];
          renderTweets(newTweet);
          // console.log('serverResponse:', serverResponse);
        });
      });
    };
  });
  loadTweets()
});