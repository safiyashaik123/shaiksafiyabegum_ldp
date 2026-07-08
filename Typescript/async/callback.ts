function download(callback: () => void) {

    console.log("Downloading...");

    setTimeout(() => {

        callback();

    },2000);

}

download(() => {

    console.log("Download Completed");

});