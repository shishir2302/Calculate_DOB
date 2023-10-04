function getDOB() {
    
    let data = document.getElementById("selectdob").value;

    let dob = new Date(data);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    let now = new Date(document.getElementById("selectdate").value);
    // console.log(now);
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;

    if (yearDiff < 0) {
        console.log("invalid date");
    } 
    else if (monthDiff > 0) {
        console.log(yearDiff);
    } 
    else if (monthDiff == 0 && dateDiff >= 0) {
        console.log(yearDiff);
    } 
    else {
        yearDiff = yearDiff - 1;
        if (monthDiff <= 0) {
            if (dateDiff > 0) {
                monthDiff = 12 + monthDiff;
            } else {
                monthDiff = 11 - monthDiff;
            }
        }
    }
    if (dateDiff < 0) {
        dateDiff = 30 + dateDiff;
        monthDiff -= 1;
    }

    // Show calculated age
    if (yearDiff < 0) {
        document.getElementById("age").innerHTML = "Invalid Date";
    } else {
        document.getElementById("age").innerHTML =
            "Your current Age is <br>" +
            yearDiff +
            " years <br> " +
            monthDiff +
            " months <br>" +
            dateDiff +
            " days";
    }
}