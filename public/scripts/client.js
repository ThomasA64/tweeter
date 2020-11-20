
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

const renderTweets = function(tweets) {
  console.log(tweets)
  for (const tweet of tweets) {
    console.log("insideforloop")
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
        <figure>
          <img src="${data.user.avatars}" alt="${data.user.name}'s Avatar" />
        </figure>
        <h3> ${data.user.name} </h3>
        <div>
          <h4>${data.user.handle}</h4>
        </div>
      </header>
      <section>
      ${data.content.text}
      </section>
      <footer>${created_at.toLocaleDateString()} at ${created_at.toLocaleTimeString()}</footer>
  </article>`
return $tweet;
};


// Form submittion using JQuery:
const loadTweets =  function () {
  $.get("/tweets/").then (function (tweets) {
    renderTweets(tweets)
  });
}

const showError = (msg) => {
  let $error = `
    <div class="Error">
      <p>${msg}
    </div>
  `;
  // I still need to take $error and I need to insert it around form
}


$('#showForm').click(() => {
  $('.new-tweet').toggleClass('visible');
})
// this is to toggle the new-tweet form on the click on a button.  

$(function () {
  const tForm = $('#tweetForm');
  tForm.submit(function (ev) {
    const textArea = tForm.find('textarea');

    ev.preventDefault();
    if( textArea.val().length <= 140 && textArea.val().length > 0){ // If statement to make sure it doesn't submit if over 140 characters or under 1 (empty).
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
    } else {
      showError();
    }
      
  });
});

loadTweets();

}); // document.ready ending curly brace here.

