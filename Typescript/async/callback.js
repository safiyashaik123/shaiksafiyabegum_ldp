function download(callback) {
    console.log("Downloading...");
    setTimeout(function () {
        callback();
    }, 2000);
}
download(function () {
    console.log("Download Completed");
});
