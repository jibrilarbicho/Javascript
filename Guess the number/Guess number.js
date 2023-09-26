let rand = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".num").textContent = "?";
document.querySelector(".p").addEventListener("click", function () {
  let guess = Number(document.querySelector(".text").value);
  if (!guess) {
    document.querySelector(".gu").textContent = "please ENter the number";
  } else if (guess == rand) {
    document.querySelector(".gu").textContent = "Correct number";
    score++;
    document.querySelector(".sc").textContent = score;
    document.querySelector(".num").textContent = rand;
    document.querySelector("body").style.backgroundColor = "green";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".hi").textContent = highscore;
    }
  } else if (guess !== rand) {
    if (score > 1) {
      document.querySelector(".gu").textContent =
        guess > rand ? "📈To High" : "📉To Low";
      score--;
      document.querySelector(".sc").textContent = score;
    } else {
      document.querySelector(".gu").textContent = "You Loost the Game";
    }
  }
  // else if(guess>rand){
  //     document.querySelector(".gu").textContent="📈To High";
  //     score--;
  //     document.querySelector(".sc").textContent=score;

  // }
  // else if(guess<rand){
  //     document.querySelector(".gu").textContent="📉To Low";
  //     score--;
  //     document.querySelector(".sc").textContent=score;

  // }
});
document.querySelector(".agai").addEventListener("click", function () {
  rand = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".num").textContent = rand;
  document.querySelector(".text").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(192, 192, 39)";
  document.querySelector(".num").textContent = "?";
  document.querySelector(".sc").textContent = score;
});
