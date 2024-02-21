const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
    const object=(JSON.parse(this.response));
    for (let i = 0; i < object.length; i++) {
        console.log(object[i].flag.png);
    }
    for (let i = 0; i < object.length; i++) {
        console.log(object[i].name.common);
        console.log(object[i].region.common);
        console.log(object[i].su-region.common);
    }

};
