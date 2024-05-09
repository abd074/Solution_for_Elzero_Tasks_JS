let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let url6 = "https://www.elzeroacademy.org:9086/paper.jsx?id=100&cat=topics";

// let re = /((http)s?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/gi; // Write Your Pattern Here
let re = /((http)s?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\D+\w+\D+)?/gi;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
