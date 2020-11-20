/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

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
let $tweet = 
  `<article class="tweet"> <header class="artTweets"> 
  <h3> ${data.user.name} </h3>
</div>
<div>
  <h4>${data.user.handle}</h4>
</div>
 </header>
 <section>
 ${data.content.text}
</section>
<footer>${data.user.created_at}</footer>
</article>`
return $tweet;
};


// Form submittion using JQuery:
const loadTweets =  function () {
  $.get("/tweets/").then (function (tweets) {
    renderTweets(tweets)
  });
}

// If statement to make sure it doesn't submit if over 140 characters or under 1 (empty).
// Also a function to convert the series of numbers to an actual date. 
$(function () {
  const tForm = $('#tweetForm');
  tForm.submit(function (ev) {
    ev.preventDefault();
      $.ajax({
          type: tForm.attr('method'),
          url: tForm.attr('action'),
          data: tForm.serialize(),
          success: function (data) {
              loadTweets();
          }
      });
  });
});

loadTweets();

}); // document.ready ending curly brace here.

// // Form submittion using JQuery:

// const loadTweets =  function () {
//   $.get("/tweets/").then (function (tweets) {
//     renderTweets(tweets)
//   });
// }

// $(function () {
//   const tForm = $('#tweetForm');
//   tForm.submit(function (ev) {
//     ev.preventDefault();
//       $.ajax({
//           type: tForm.attr('method'),
//           url: tForm.attr('action'),
//           data: tForm.serialize(),
//           success: function (data) {
//               loadTweets();
//           }
//       });
//   });
// });




// $(function() {
//   const $button = $('#load-more-posts');
//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');
//     $.ajax('more-posts.html', { method: 'GET' })
//     .then(function (morePostsHtml) {
//       console.log('Success: ', morePostsHtml);
//       $button.replaceWith(morePostsHtml);
//     });
//   });
// });
