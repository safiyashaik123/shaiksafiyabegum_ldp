console.log("Program Started");

let downloadPromise = new Promise(function(resolve, reject){

    console.log("Downloading File...");

    let downloadSuccess = true;

    setTimeout(function(){

        if(downloadSuccess){

            resolve("Download Completed");

        }

        else{

            reject("Download Failed");

        }

    },3000);

});

downloadPromise

.then(function(result){

    console.log(result);

})

.catch(function(error){

    console.log(error);

})

.finally(function(){

    console.log("Program Finished");

});