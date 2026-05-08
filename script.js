const analyzeBtn =
document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", () => {

    const userInput =
    document.getElementById("userInput").value;

    const responseBox =
    document.getElementById("responseBox");

    if(userInput.trim() === ""){

        responseBox.innerHTML =
        "Please describe your lifestyle.";

        return;

    }

    responseBox.innerHTML =
    "AI is analyzing your lifestyle...";

    setTimeout(() => {

        responseBox.innerHTML = `

        <h2>AI Recommendations</h2>

        <br>

        ✔ Improve sleep timing

        <br><br>

        ✔ Increase protein intake

        <br><br>

        ✔ Drink more water

        <br><br>

        ✔ Add cardio workouts

        <br><br>

        ✔ Reduce sugar intake

        <br><br>

        ✔ Maintain consistent workouts

        <br><br>

        ✔ Improve stress management

        `;

    },2000);

});
