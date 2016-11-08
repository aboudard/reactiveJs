function nextCallback(data) {
    console.log(data);
}

function errorCallback(err) {
    console.error(err);
}

function completeCallback() {
    console.info("done");
}

function giveMeData(nextCb, errorCb, completeCb) {
    [10, 20, 30].forEach(nextCb);
}

giveMeData(nextCallback, errorCallback, completeCallback);