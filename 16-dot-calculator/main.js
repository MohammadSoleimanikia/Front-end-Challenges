window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn").addEventListener("click", () => {
    let input = document.querySelector(".input").value;
    let result = document.querySelector(".result");
    let dots = 0;

    for (let char of input) {
      if (obj.hasOwnProperty(char)) {
        dots += parseInt(obj[char]);
      }
    }

    result.innerText = dots;
  });
});
