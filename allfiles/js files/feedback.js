      // Function to submit feedback
      function submitFeedback() {
        const fullName = document.getElementById("fullName").value;
        const feedback = document.getElementById("feedback").value;

        if (fullName.trim() !== "" && feedback.trim() !== "") {
          const feedbackItem = {
            fullName: fullName,
            feedback: feedback,
          };
          saveFeedback(feedbackItem);
          displayFeedback(feedbackItem);
          clearForm();
        } else {
          alert("Please fill in all fields.");
        }
      }

      // Function to save feedback to local storage
      function saveFeedback(feedbackItem) {
        let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
        feedbacks.push(feedbackItem);
        localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
      }

      // Function to display feedback
      function displayFeedback(feedbackItem) {
        const feedbackList = document.getElementById("feedbackList");
        const feedbackElement = document.createElement("div");
        feedbackElement.classList.add("feedback");
        feedbackElement.innerHTML = `
            <h3>${feedbackItem.fullName}</h3>
            <p>${feedbackItem.feedback}</p>
        `;
        feedbackList.appendChild(feedbackElement);
      }

      // Function to clear the form after submitting feedback
      function clearForm() {
        document.getElementById("fullName").value = "";
        document.getElementById("feedback").value = "";
      }

      // Display previous feedbacks on page load
      window.onload = function () {
        const previousFeedbacks =
          JSON.parse(localStorage.getItem("feedbacks")) || [];
        previousFeedbacks.forEach((feedbackItem) => {
          displayFeedback(feedbackItem);
        });
      };