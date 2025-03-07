function characterCode(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reversedAlphabet = alphabet.split("").reverse().join("");
  const uppercaseAlphabet = alphabet.toUpperCase();
  const reversedUppercaseAlphabet = uppercaseAlphabet
    .split("")
    .reverse()
    .join("");

  let result = "";
  for (let char of str) {
    if (alphabet.includes(char)) {
      result += reversedAlphabet[alphabet.indexOf(char)];
    } else if (uppercaseAlphabet.includes(char)) {
      result += reversedUppercaseAlphabet[uppercaseAlphabet.indexOf(char)];
    } else {
      result += char;
    }
  }
  return result;
}

function encryptText() {
  const inputtext = document.getElementById("input").value;
  const outputtext = characterCode(inputtext);
  document.getElementById("output").textContent = outputtext;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", encryptText);
