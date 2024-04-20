const tableFunc = () => {
  // Clear previous results
  document.querySelector("#table-of").innerHTML = "";
  document.querySelector("#table-output").innerHTML = "";

  // Get input values
  const aInput = document.querySelector("#user-input1").value.trim();
  const bInput = document.querySelector("#user-input2").value.trim();

  // Input validation
  if (!aInput || isNaN(aInput)) {
    alert("Please enter a valid number for input 1.");
    return;
  }

  if (bInput && isNaN(bInput)) {
    alert("Please enter a valid number for input 2.");
    return;
  }

  const a = Number(aInput);
  const b = bInput ? Number(bInput) : 10;

  // Update table header
  document.querySelector("#table-of").innerHTML =
    "Multiplication Table Of " + a;

  // Compute multiplication table
  const table = [];
  for (let i = 0; i <= b; i++) {
    const result = `${a} x ${i} = ${a * i}`;
    table.push(result);
  }

  // Update table output
  document.querySelector("#table-output").innerHTML = table.join("<br>");
};
