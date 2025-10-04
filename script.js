// Future interactivity (animations, alerts, etc.)
console.log("Her Heaven website loaded successfully!");
const words = [
    "Asahi",          // English
    "అసాహి",         // Telugu
    "असाही",          // Hindi
    "அசாஹி",          // Tamil
    "അസാഹി",          // Malayalam
    "ಅಸಾಹಿ",          // Kannada
    "أساهي",         //arabic
    "Асахи",          //Russian
    "アサヒ",         //Japanese
    "아사히",          //Korean
    "Ασάχι",           //Greek
  ];

  let i = 0;      // word index
  let j = 0;      // letter index
  let currentWord = "";
  let isDeleting = false;

  const speed = 150; // typing speed
  const eraseSpeed = 100; // backspace speed
  const delay = 1000; // wait before deleting

  function type() {
    const display = document.getElementById("typewriter");

    if (!isDeleting && j <= words[i].length) {
      // typing
      currentWord = words[i].substring(0, j++);
      display.textContent = currentWord;
      setTimeout(type, speed);

    } else if (isDeleting && j >= 0) {
      // deleting
      currentWord = words[i].substring(0, j--);
      display.textContent = currentWord;
      setTimeout(type, eraseSpeed);

    } else if (!isDeleting && j > words[i].length) {
      // finished typing, pause before deleting
      isDeleting = true;
      setTimeout(type, delay);

    } else if (isDeleting && j < 0) {
      // move to next word
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, speed);
    }
  }

  // start the animation
  type();