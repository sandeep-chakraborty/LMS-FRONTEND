document.addEventListener('DOMContentLoaded', function () {
    const leaveForm = document.getElementById('leaveForm');
    const leaveDateInput = document.getElementById('leaveDate');
    const leaveReasonInput = document.getElementById('leaveReason');
  
    leaveForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const selectedDate = new Date(leaveDateInput.value);
      const currentDate = new Date();
  
      if (selectedDate <= currentDate) {
        alert('Please select a future date for leave.');
        return;
      }
  
      if (selectedDate.getDay() === 0) { // Sunday has index 0
        alert('Sundays are not allowed for leave.');
        return;
      }
  
      const reason = leaveReasonInput.value;
      const wordCount = reason.split(/\s+/).length;
  
      if (wordCount < 100) {
        alert('Leave reason must be at least 100 words.');
        return;
      }
  
      // Logic to submit the form to the backend to be added here
      alert('Leave application submitted successfully.');
      leaveForm.reset();
    });
  });
  