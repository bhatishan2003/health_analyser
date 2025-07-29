function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.querySelector('.mode-toggle');
  btn.textContent = document.body.classList.contains('dark-mode')
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}

function analyzeHealth() {
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const activity = document.getElementById("activity").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  if (!age || !gender || !activity || !height || !weight) {
    resultDiv.innerHTML = "<p>Please fill in all fields correctly.</p>";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters ** 2)).toFixed(1);
  let category = '';
  let recommendation = '';

  if (bmi < 18.5) {
    category = "Underweight";
    recommendation = "Increase your calorie intake with nutrient-rich foods and consult a healthcare professional.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    recommendation = "Maintain your routine with a healthy diet and regular exercise.";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    recommendation = "Try to increase your physical activity and monitor your eating habits.";
  } else {
    category = "Obese";
    recommendation = "Consult a doctor. Adopt a healthy lifestyle with consistent workouts and balanced meals.";
  }

  let activityAdvice = '';
  if (activity === 'low') {
    activityAdvice = "Try to incorporate light physical activity like walking, yoga, or stretches daily.";
  } else if (activity === 'moderate') {
    activityAdvice = "Good job! Stay consistent and gradually increase your workout duration.";
  } else {
    activityAdvice = "Excellent activity level. Make sure you're eating enough protein and staying hydrated.";
  }

  let ageAdvice = '';
  if (age < 18) {
    ageAdvice = "Ensure you're growing well — balanced nutrition and physical activity are important.";
  } else if (age >= 40) {
    ageAdvice = "Consider regular checkups for cholesterol, sugar levels, and blood pressure.";
  } else {
    ageAdvice = "Keep building healthy habits now to prevent problems later.";
  }

  resultDiv.innerHTML = `
    <p><strong>Your BMI:</strong> ${bmi}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Health Tip:</strong> ${recommendation}</p>
    <p><strong>Activity Tip:</strong> ${activityAdvice}</p>
    <p><strong>Age-Based Tip:</strong> ${ageAdvice}</p>
  `;
}
