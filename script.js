
// Questions button alert
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("questionBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("If you have questions, contact me at:\nmoskin@cps.edu");
    });
  }
});
