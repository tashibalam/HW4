let arr = [];

let startBtn = document.querySelector("#start");
let swapBtn = document.querySelector("#swap");

startBtn.addEventListener("click", startSwap, false);
swapBtn.addEventListener("click", doSwap, false);

function startSwap() {
  for (let i = 0; i < 3; i++) {
    arr.push(prompt("Enter a word"));
  }

  for (let i = 0; i < arr.length; i++) {
    document.getElementById("words").innerHTML += "<li>" + arr[i] + "</li>";
  }

  document.getElementById("swap").style.visibility = "visible";
}

function swapLetters(word) {
  return word.charAt(word.length - 1) + word.substring(1,word.length - 1) + word.charAt(0);
}

function doSwap() {
 let arr2 = arr.map(x => swapLetters(x));
 for (let i = 0; i < arr2.length; i++) {
      document.getElementById("swapped-words").innerHTML += "<li>" + arr2[i] + "</li>"
  }

  document.getElementById("reverse").style.display = "block";
  document.getElementById("regular").style.display = "none";
  document.getElementById("swapped-words").style.fontFamily = "Impact, Charcoal, sans-serif";
  document.getElementById("swapped-words").style.fontSize = "30px";
}