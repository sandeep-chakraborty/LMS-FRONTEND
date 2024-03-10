document.addEventListener("DOMContentLoaded", function () {
  const actionButtons = document.querySelectorAll(".btn-action");
  actionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const action = this.getAttribute("data-action");
      const row = this.closest("tr");
      const statusCell = row.querySelector("td:nth-child(3)");
      const approveButton = row.querySelector(".btn-success");
      const rejectButton = row.querySelector(".btn-danger");

      if (action === "approve") {
        statusCell.textContent = "Approved";
        approveButton.textContent = "Approved";
        rejectButton.style.display = "none";
        alert("Leave request approved.");
      } else if (action === "reject") {
        statusCell.textContent = "Rejected";
        rejectButton.textContent = "Rejected";
        approveButton.style.display = "none";
        alert("Leave request rejected.");
      }
    });
  });
});
