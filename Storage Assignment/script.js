// Get values from Local Storage
let localScore = localStorage.getItem("localScore");

// Get values from Session Storage
let sessionScore = sessionStorage.getItem("sessionScore");

// If value doesn't exist, initialize it to 0
if(localScore === null){
    localScore = 0;
}

if(sessionScore === null){
    sessionScore = 0;
}

// Display the scores
document.getElementById("localScore").textContent = localScore;
document.getElementById("sessionScore").textContent = sessionScore;

// Function to increment both scores
function incrementScore(){

    localScore++;
    sessionScore++;

    // Save updated values
    localStorage.setItem("localScore", localScore);
    sessionStorage.setItem("sessionScore", sessionScore);

    // Update UI
    document.getElementById("localScore").textContent = localScore;
    document.getElementById("sessionScore").textContent = sessionScore;

}