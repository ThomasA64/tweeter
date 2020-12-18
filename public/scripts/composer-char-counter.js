$(document).ready(function () {
  // --- our code goes here ---
  const TweetTextArea = document.getElementById("taTweet");
  console.log(TweetTextArea);
  const RemainingTweetChars = document.getElementById("counterChar");

  const MaxText = 140;

  TweetTextArea.addEventListener("keyup", () => {
    const remainingText = MaxText - TweetTextArea.value.length;

    const colour = remainingText <= 0 ? "red" : null;

    RemainingTweetChars.textContent = `${remainingText}`;
    RemainingTweetChars.style.color = colour;
  });
});
