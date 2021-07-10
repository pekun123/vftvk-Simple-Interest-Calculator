/* Function to compute interest */
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    /* Compose the display message for interest calculation */
    var mescom = "If you deposit " + principal + "," + "<br />" + " at an interest rate of " + rate + "." + "<br />" + "You will receive an amount of " + interest + "," + "<br />" + "in the year "+ year;
    /* Display the interest calculation message */ 
    document.getElementById("result").innerHTML = mescom;

}
/* Function to update rate */
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;

}
/* Function to check that the principal is over 0 and positive */
function principalCheck() {
    var fillNum = document.getElementById("principal").value;
    /* Check for positive number over 0 */
    if (Math.sign(fillNum) < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

}     