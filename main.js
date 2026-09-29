let count = 0;

document.getElementById("addButton").addEventListener("click", function () {
  count++;
  document.getElementById("count").textContent = count;
});
document.getElementById("resetButton").addEventListener("click", function () {
  count = 0;
  document.getElementById("count").textContent = count;
});