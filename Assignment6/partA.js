var numEmployee = 0;
var hours = parseInt(prompt("How many hours did this employee work?\nEnter '-1' to exit."));
var employeePay = 0.0;
var overtime = 0;
var totalPay = 0.0;

function calculatePay() {
    while (hours >= 0) {
        if (hours <= 40) {
            employeePay = hours * 15;
        } else {
            overtime = hours - 40;
            employeePay = (40 * 15) + (overtime * 1.5 * 15);
        }
        
        numEmployee++;
        
        document.write("<tr>");
        document.write("<td>" + numEmployee + "</td>");
        document.write("<td>" + hours + "</td>");
        document.write("<td>$" + employeePay.toFixed(2) + "</td>");
        document.write("</tr>");
        
        totalPay += employeePay;
        
        hours = parseInt(prompt("How many hours did this employee work?\nEnter '-1' to exit."));
    }
}

function displayTotal() {
    document.write("<p>The total pay of all employees is $" + totalPay.toFixed(2) + ".</p>");
}