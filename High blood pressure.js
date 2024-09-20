
document.addEventListener("DOMContentLoaded", function() {
    const dietTable = document.getElementById("dietTable");

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Define the diet plan data
    const dietPlan = {
        "Monday": { breakfast: "Oatmeal", lunch: "steamed vegetables", dinner: "Quinoa salad with chickpeas" },
        "Tuesday": { breakfast: "2 apple", lunch: "Chicken and vegetable stir-fry", dinner: "Baked cod with roasted sweet potatoes" },
        "Wednesday": { breakfast: "Greek yogurt", lunch: "1 boul rice", dinner: "Vegetarian chili with brown rice" },
        "Thursday": { breakfast: "banana, and almond milk", lunch: "Tuna salad with mixed greens", dinner: "Grilled chicken with quinoa and roasted vegetables" },
        "Friday": { breakfast: "eggsmtomatoes", lunch: "wheat pasta with marinara sauce", dinner: "Grilled shrimp skewers with grilled vegetables" },
        "Saturday": { breakfast: "2 apple", lunch: "Veggie burger with whole wheat bun", dinner: "Roasted chicken with mashed sweet potatoes" },
        "Sunday": { breakfast: "Whole grain fruit", lunch: "Greek salad with grilled chicken", dinner: "Salmon with asparagus and quinoa" }
    };

    // Populate the table with diet plan data
    days.forEach((day, index) => {
        const row = dietTable.insertRow(-1);
        const dayCell = row.insertCell(0);
        dayCell.textContent = day;

        for (let i = 1; i <= 3; i++) {
            const mealCell = row.insertCell(i);
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Enter meal";
            // Set the value of the input field from the diet plan data
            input.value = dietPlan[day][Object.keys(dietPlan[day])[i - 1]];
            mealCell.appendChild(input);
        }
    });
});

