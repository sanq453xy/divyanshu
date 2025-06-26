const phrases = [
      'print("Hello World")',
      'cout << "Hello World";',
      'console.log("Hello World");'
    ];
    const txt = document.getElementById("typing-text");
    const cursor = document.querySelector(".cursor");
    let curPhrase = 0, curChar = 0, deleting = false;

    function type() {
      let current = phrases[curPhrase];
      if (deleting) {
        curChar--;
        if (curChar === 0) {
          deleting = false;
          curPhrase = (curPhrase + 1) % phrases.length;
        }
      } else {
        curChar++;
        if (curChar === current.length + 1) {
          deleting = true;
          setTimeout(type, 1000);
          return;
        }
      }
      txt.textContent = current.substring(0, curChar);
      setTimeout(type, deleting ? 50 : 100);
    }

    type();

document.getElementById("githubBtn").addEventListener("click", function () {
    window.open("https://github.com/sanq453xy/", "_blank");
  });
document.getElementById("linkedinBtn").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/divyanshukumar1051/", "_blank");
  });
document.getElementById("teleBtn").addEventListener("click", function () {
    window.open("https://t.me/sanq453xy", "_blank");
  });
