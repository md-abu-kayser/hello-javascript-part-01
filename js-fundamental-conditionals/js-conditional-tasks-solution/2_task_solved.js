const weight = 68; // kg
const height = 1.72; // meter

const bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("BMI:", bmi.toFixed(2));
  console.log("You are underweight.");
} else {
  if (bmi <= 24.9) {
    console.log("BMI:", bmi.toFixed(2));
    console.log("You are normal.");
  } else {
    if (bmi <= 29.9) {
      console.log("BMI:", bmi.toFixed(2));
      console.log("You are overweight.");
    } else {
      console.log("BMI:", bmi.toFixed(2));
      console.log("You are obese.");
    }
  }
}
