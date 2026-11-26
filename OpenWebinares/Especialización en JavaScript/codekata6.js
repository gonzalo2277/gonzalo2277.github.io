let phone = new RegExp(/\+34\s?([0-9]{3})\s?([0-9]{3})\s?([0-9]{3})\s?/);

let isValid = phone.exec("+34 600 512 322");

console.log(isValid !== null);