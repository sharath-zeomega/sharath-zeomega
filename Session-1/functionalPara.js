function rateOfIntrest(principle, rate, years) {
    if (years === void 0) { years = 1; }
    return (principle * rate * years) / 100;
}
console.log("Rate of Intrest " + rateOfIntrest(2000, 6, 3));
console.log("Rate of Intrest " + rateOfIntrest(2000, 6));
function fullName(fname, lname, mname) {
    if (mname)
        console.log(fname + " " + mname + " " + lname);
    else
        console.log(fname + " " + lname);
}
fullName('sonam', 'soni', 'nikunj');
fullName('sonam', 'soni');
