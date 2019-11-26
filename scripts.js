// Write your JavaScript code here.
// Remember to pay attention to page loading!

// Checks for All Elements Loaded
window.addEventListener("load", function () {
    this.console.log("Window Has Loaded");

    let flightStatusElem = this.document.getElementById("flightStatus");
    let shuttleBackgroundElem = this.document.getElementById("shuttleBackground");
    let rocketElem = this.document.getElementById("rocket");
    let spaceShuttleHeightElem = this.document.getElementById("spaceShuttleHeight");
    let takeoffElem = this.document.getElementById("takeoff");
    let landingElem = this.document.getElementById("landing");
    let missionAbortElem = this.document.getElementById("missionAbort");

    let upElem = this.document.getElementById("upbtn");
    let downElem = this.document.getElementById("downbtn");
    let x = 0; //centers rocket
    let rightElem = this.document.getElementById("rightbtn");
    let leftElem = this.document.getElementById("leftbtn");

    takeoffElem.addEventListener("click", function () {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatusElem.innerText = "Shuttle in flight.";
            shuttleBackgroundElem.style.backgroundColor = "blue";
            spaceShuttleHeightElem.innerText = 10000;
        }
    });

    landingElem.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        landed("The shuttle has landed");
    });

    missionAbortElem.addEventListener("click", function () {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            landed("Mission aborted");
        }
    });

    upElem.addEventListener("click", function () {
        spaceShuttleHeightElem.innerText = Number(spaceShuttleHeightElem.innerText) + 10000;
        if (spaceShuttleHeightElem.innerText !== "0") {
            flightStatusElem.innerText = "Shuttle in flight.";
            shuttleBackgroundElem.style.backgroundColor = "blue";
        }
    });
    downElem.addEventListener("click", function () {
        if (spaceShuttleHeightElem.innerText !== "0") {
            spaceShuttleHeightElem.innerText = Number(spaceShuttleHeightElem.innerText) - 10000;
            if (spaceShuttleHeightElem.innerText === "0") {
                landed("The shuttle has landed");
            }
        }
    });
    rightElem.addEventListener("click",function(){
        if (spaceShuttleHeightElem.innerText !== "0" && x <= 250){
            rocketElem.style.transform = "translate("+String(x += 10) + "%,150%)";
        }
    });
    leftElem.addEventListener("click",function(){
        if (spaceShuttleHeightElem.innerText !== "0" && x >= -250){
            rocketElem.style.transform = "translate("+String(x -= 10) + "%,150%)";
        }
    });

    function landed(flightStatus) {
        rocketElem.style.paddingRight = "0px";
        rocketElem.style.paddingLeft = "0px";
        shuttleBackgroundElem.style.backgroundColor = "green";
        spaceShuttleHeightElem.innerText = 0;
        x = 0;
        flightStatusElem.innerText = flightStatus;
        rocketElem.style.transform = "translate(0%,150%)";
    }

});