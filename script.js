function calculateWaste() {
  const wasteInput = document.getElementById("waste-input").value;
  const result = document.getElementById("result");

  if (wasteInput) {
      const annualWaste = wasteInput * 52;
      const people= annualWaste * 2
      result.textContent = `You produce approximately ${annualWaste} kg of food waste per year. Approximately ${people} people could have been feed.`;
  } else {
      result.textContent = "Please enter a valid amount.";
  }
}