document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            // Hide all other answers
            document.querySelectorAll(".faq-answer").forEach(ans => {
                if (ans !== answer) {
                    ans.style.display = "none";
                }
            });

            // Toggle the clicked answer
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});