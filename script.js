const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET","https://api.github.com/users/GURhttps://restcountries.com/v3.1/allUPRASADHM2003/following{/other_user}");
req.send();
req.onload = function () {
    const object=(JSON.parse(this.response));
    for (let i = 0; i < object.length; i++) {
        console.log(object[i].flag.png);
    }
    for (let i = 0; i < object.length; i++) {
        console.log(object[i].name.common);
        console.log(object[i].region.common);
        console.log(object[i].sub-region.common);
    }

};
