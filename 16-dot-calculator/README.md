-   for fetch from json we use fetch and then response.json in a async function
-   for fetch from js file we add it in a script file before the main.js script and then use it

```js
document.querySelector(".btn").addEventListener("click", () => {
    let input = document.querySelector(".input").value;
    let result = document.querySelector(".result");
    let dots = 0;

    for (let char of input) {
        if (obj[char] !== undefined) {
            dots += parseInt(obj[char]);
        }
    }

    result.innerText = dots;
});
```
