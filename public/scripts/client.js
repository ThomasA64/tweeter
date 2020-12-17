
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

const renderTweets = function(tweets) {
  console.log(tweets)
  for (const tweet of tweets) {
    const newTweet = createTweetElement(tweet)
    
    $(".tweetContainer").append(newTweet)
  }
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
};

const createTweetElement = function(data) {
  let created_at = new Date(data.created_at);
  let $tweet = 
    `<article class="tweet">
      <header class="artTweets"> 
      <div class="user">  
      <figure>
          <img src="${data.user.avatars}" alt="${data.user.name}'s Avatar" />
        </figure>
        <h4> ${data.user.name} </h4>
        </div>
        <div class="showOnHover">
          <h4>${data.user.handle}</h4>
        </div>
      </header>
      <section class="tweeterText">
      ${data.content.text}
      </section>
      <footer class = "newTweetFooter">
      <div>
      ${moment(created_at).fromNow()}
      </div>
      <div class ="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
      </div>
      </footer>
  </article>`
return $tweet;
};

// ${created_at.toLocaleDateString()} at ${created_at.toLocaleTimeString()}


// Form submittion using JQuery:
const loadTweets =  function () {
  $.get("/tweets/").then (function (tweets) {
    renderTweets(tweets)
  });
}

const showError = (msg) => {
  let $error = `
    <div class="Error">
      <p>${msg}</p>
    </div>
  `;
  $('.error').append($error).slidedown()
} 


$('#showForm').click(() => {
  $('.new-tweet').toggleClass('visible');
})
// this is to toggle the new-tweet form on the click on a button.  

$(function () {
  const tForm = $('#tweetForm');
  tForm.submit(function (ev) {
    $('.error').empty()
    const textArea = tForm.find('textarea');

    ev.preventDefault();
     // If statement to make sure it doesn't submit if over 140 characters or under 1 (empty).
    if( textArea.val().length > 140) {
      showError('Your tweet has exceeded 140 characters!')
    } else if (textArea.val().length === 0) {
      showError('Your tweet is empty!')
    }
      else {
      $.ajax({
      type: tForm.attr('method'),
      url: tForm.attr('action'),
      data: tForm.serialize(),
      success: function (data) {
          //loadTweets();
          const newTweet = createTweetElement(data);
          $(".tweetContainer").prepend(newTweet);
          textArea.val('')      
      }
  });
    }
      
  });
});

loadTweets();

}); // document.ready ending curly brace here.

