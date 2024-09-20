function calculateCalories() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activity = document.getElementById('activity').value;

    if (!age || !weight || !height || !activity) {
        alert("Please fill in all fields");
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const calories = bmr * activity;
    document.getElementById('result').innerText = `Daily Caloric Needs: ${calories.toFixed(2)} calories`;
}
