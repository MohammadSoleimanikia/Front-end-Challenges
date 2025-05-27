function encrypt(str, n) {
  n = n % 26; //if the number is greater that 25 it make sure the number is always be between 0 and 25
  let result = "";

  for (let char of str) {
    // the char is upper case 
    if (char >= "A" && char <= "Z") {
    // get asci number and decrease it by 65 to make it between 0 to 25
      let code = ((char.charCodeAt(0) - 65 + n) % 26) + 65;
      result += String.fromCharCode(code);
    } else if (char >= "a" && char <= "z") {
      let code = ((char.charCodeAt(0) - 97 + n) % 26) + 97;
      result += String.fromCharCode(code);
    } else {
      result += char;
    }
  }

  return result;
}

function decrypt(str, n) {
  n = n % 26;
  let result = "";

  for (let char of str) {
    if (char >= "A" && char <= "Z") {
      let code = ((char.charCodeAt(0) - 65 - n + 26) % 26) + 65;
      result += String.fromCharCode(code);
    } else if (char >= "a" && char <= "z") {
      let code = ((char.charCodeAt(0) - 97 - n + 26) % 26) + 97;
      result += String.fromCharCode(code);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(encrypt('abcz',1))
// export { encrypt, decrypt };
