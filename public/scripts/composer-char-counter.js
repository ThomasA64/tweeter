

// $(".taTweet").onkeyup()

// const CharCounter = function(char) {
//   const length = char.value.length;
//   if (length >= 140) {
//     char.value = char.value.substring(0,140);
//   } else {
//     $(".taTweet").text(140-length);
//   }
// };


// {/* <form action="http://localhost:8080/tweets/" method="POST">
//           <label for="tweet-text"></label>
//           <textarea maxlength="140" class = "taTweet" name="text" placeholder= "What are you humming about?"id="tweet-text"></textarea>
//           <div class ="bottomcontainer">
//             <button type="submit">Tweet</button>
//             <output name="counter" class="counter" for="tweet-text">140</output>characters remaining
//           </div>
//         </form>

// <form> */}
  
//   <!-- remember to markup your forms properly using labels! -->
//   <label for="textareaChars">No more than 100 characters</label>

//   <textarea id="textareaChars" maxlength="100"></textarea>
  
//   <span id="chars">100</span> characters remaining
  
// </form>


// const maxTweetlength = 140;
// $(".taTweet").keyup(function() {
//   let length = $(this).val().length;
//   let length = maxTweetlength-length;
//   $(".counter").text(length);
// });

/*  <form action="http://localhost:8080/tweets/" method="POST">
          <label for="tweet-text"></label>
          <textarea id ="taTweet" name="text" placeholder= "What are you humming about?">
          </textarea>
          <div class ="bottomcontainer">
            <button type="submit">Tweet</button>
            <output name="counter" id="counterChar" for="tweet-text">140</output>
          </div>
        </form> */

$(document).ready(function() {
  // --- our code goes here ---
  const TweetTextArea = document.getElementById("taTweet");
  console.log(TweetTextArea);
  const RemainingTweetChars = document.getElementById("counterChar");
  
  const MaxText = 140;
  
  TweetTextArea.addEventListener('keyup', () => {
      const remainingText = (MaxText - TweetTextArea.value.length);
  
      const colour = remainingText <= 0 ? 'red' : null;
  
      RemainingTweetChars.textContent = `${remainingText}`
      RemainingTweetChars.style.color = colour;
  })
});


