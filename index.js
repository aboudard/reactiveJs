var fetch = require('node-fetch');

console.log("ok test");

const tab = [12, 22, 32, 42, 52, 62];
tab.forEach(function(item) {
    console.log(item);
});

const res = fetch(
    'https://jsonplaceholder.typicode.com/users/1'
).then(r => r.json());

function successCb(value) {
    console.log(`value :  ${value}`);
}

function errorCb(err) {
    console.error(err);
}

res.then(successCb, errorCb);