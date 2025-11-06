async function sendBomb() {
  const pin = document.getElementById("pin").value;
  const status = document.getElementById("status");

  if (!pin) {
    status.textContent = "Please enter a PIN.";
    return;
  }

  status.textContent = "Sending bots...";

  try {
    const res = await fetch("https://testkahoooot.onrender.com/bomb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin })
    });

    if (!res.ok) {
      const error = await res.json();
      status.textContent = error.error || "Server error.";
      return;
    }

    const data = await res.json();
    status.textContent = data.message || "Bots launched!";
  } catch (err) {
    console.error("Fetch error:", err);
    status.textContent = "Error sending bots.";
  }
}
