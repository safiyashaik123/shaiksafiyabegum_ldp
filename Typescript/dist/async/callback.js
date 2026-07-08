"use strict";
function download(callback) {
    console.log("Downloading...");
    setTimeout(() => {
        callback();
    }, 2000);
}
download(() => {
    console.log("Download Completed");
});
