document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }
});

const devourBtn = document.querySelectorAll(".devourBtn");
const createBtn = document.getElementById("create-form");

// // Set up the event listener for the create button
if (createBtn) {
  createBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBurger = {
      name: document.getElementById("bn").value.trim(),
      devoured: false,
    };
    console.log("button pressed");
    fetch("/api/burgers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBurger),
    }).then(() => {
      document.getElementById("bn").value = "";
      location.reload();
    });
  });
}
if (devourBtn) {
  devourBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      const burgerState = {
        devoured: true,
      };
      fetch(`/api/burgers/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(burgerState),
      }).then((response) => {
        if (response.ok) {
          console.log(`changed sleep to: ${burgerState}`);
          location.reload("/");
        } else {
          alert("something went wrong!");
        }
      });
    });
  });
}
const deleteBtn = document.querySelectorAll(".delete-burger");
if (deleteBtn) {
  deleteBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      fetch(`/api/burgers/${id}`, {
        method: "DELETE",
      }).then(() => {
        location.reload();
      });
    });
  });
}
