async function sendBomb() {
  const pin = document.getElementById("pin").value;
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const status = document.getElementById("status");

  if (!pin || !name || !amount) {
    status.textContent = "Please fill out all fields.";
    return;
  }

  status.textContent = "Sending bots...";

  try {
    const res = await fetch("https://testkahoooot.onrender.com/bomb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin, name, amount })
    });

    const data = await res.json();
    status.textContent = data.message || "Bots launched!";
  } catch (err) {
    console.error("Fetch error:", err);
    status.textContent = "Error sending bots.";
  }
}
