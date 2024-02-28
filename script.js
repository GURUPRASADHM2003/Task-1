const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  const object = JSON.parse(this.response);
  for (let i = 0; i < object.length; i++) {
    console.log(object[i].flag.png);
  }
};
