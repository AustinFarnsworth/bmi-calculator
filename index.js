function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi); 
}

var bmi = bmiCalculator(30, 1.8);

if (bmi < 18.5) {
    console.log("Your BMI is " + bmi + ", so you are underwieght")
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI is " + bmi + ", so you have a normal weight")
} else if (bmi > 24.9) {
    console.log("Youre BMI is " + bmi + ", so you are overweight")
};



console.log(bmi);

// var n = Math.random();
// n = Math.floor(n * 6) + 1;
// console.log(n);
