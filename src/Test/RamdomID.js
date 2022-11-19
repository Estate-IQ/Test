const randId = document.querySelector(".rand-id");
const btn = document.querySelector(".generate");

// Generate Pseudo Random String, if safety is important use dedicated crypto/math library for less possible collisions!
function generateID(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

// randId.value = generateID(6)

btn.addEventListener("keydown", () => {
  randId.value = generateID(6);
});
