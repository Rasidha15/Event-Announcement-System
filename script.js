// Replace URLs with your real API Gateway endpoints
const addEventURL = "https://2c17hsia3a.execute-api.ap-south-1.amazonaws.com/prod/event";
const subscribeURL = "https://2c17hsia3a.execute-api.ap-south-1.amazonaws.com/prod/subscriber";
const eventsFileURL = "https://ems-15.s3.ap-south-1.amazonaws.com/events.json";

// Load events from S3
async function loadEvents() {
  try {
    const res = await fetch(eventsFileURL);
    const events = await res.json();

    const eventList = document.getElementById("event-list");
    eventList.innerHTML = "";

    events.forEach(event => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p><p>${event.description}</p>`;
      eventList.appendChild(div);
    });
  } catch (error) {
    console.error("Error loading events:", error);
  }
}

// Add new event
document.getElementById("eventForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    title: document.getElementById("title").value,
    date: document.getElementById("date").value,
    description: document.getElementById("description").value
  };

  const res = await fetch(addEventURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("✅ Event added successfully!");
    loadEvents();
  } else {
    alert("❌ Failed to add event.");
  }
});

// Subscribe
document.getElementById("subscribeForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const res = await fetch(subscribeURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  if (res.ok) {
    alert("✅ Subscribed successfully!");
  } else {
    alert("❌ Subscription failed.");
  }
});

// Load events on page load
loadEvents();

