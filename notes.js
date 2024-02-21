

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET","https://api.github.com/users/GURUPRASADHM2https://restcountries.com/v3.1/all003/following{/other_user}");
req.send();
req.onload = function () {
    console.log(this.response);
};
