// create array

const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    Button: "BUY TICKETS",
  },
];

// Function to render my show items
const renderShow = (showsObj, showsSection) => {
  const showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container");

  const showsCards = document.createElement("div");
  showsCards.classList.add("shows__cards");

  const showsLabel = document.createElement("p");
  showsLabel.classList.add("shows__label");
  showsLabel.innerText = "DATE";

  const showsLabel2 = document.createElement("p");
  showsLabel2.classList.add("shows__label");
  showsLabel2.innerText = "VENUE";

  const showsLabel3 = document.createElement("p");
  showsLabel3.classList.add("shows__label");
  showsLabel3.innerText = "LOCATION";

  const showsInfo = document.createElement("p");
  showsInfo.classList.add("shows__info");
  showsInfo.classList.add("shows__info--bold");
  showsInfo.innerText = showsObj.date;

  const showsInfo2 = document.createElement("p");
  showsInfo2.classList.add("shows__info");
  showsInfo2.classList.add("shows__info--bold");
  showsInfo2.innerText = showsObj.venue;

  const showsInfo3 = document.createElement("p");
  showsInfo3.classList.add("shows__info");
  showsInfo3.classList.add("shows__info--bold");
  showsInfo3.innerText = showsObj.location;

  const showsButton = document.createElement("button");
  showsButton.classList.add("shows__button");
  showsButton.innerText = "BUY TICKETS";

  showsSection.append(showsContainer);
  showsContainer.appendChild(showsCards);
  showsCards.append(
    showsLabel,
    showsInfo,
    showsButton,
    showsLabel2,
    showsInfo2,
    showsButton,
    showsLabel3,
    showsInfo3,
    showsButton
  );

  showsCards.addEventListener("click", (event) => {
    console.log(event.target);

    if (event.target.id) {
      const taskToBeDeleted = document.getElementById(event.target.id);
      console.log(taskToBeDeleted);
      taskToBeDeleted.classList.toggle("shows__cards--selected");
    }
    // add else block to click anywhere (child) and still add the event selected
  });
};

// Function to render the entire shows section
const render = () => {
  const showsSection = document.querySelector(".shows"); // To get shows container
  showsSection.innerHTML = ""; // To clean the section

  const showsTitle = document.createElement("h2");
  showsTitle.classList.add("shows__title");
  showsTitle.innerText = "Shows";
  showsSection.appendChild(showsTitle);

  // Function to loop through each item of my array
  for (let i = 0; i < shows.length; i++) {
    renderShow(shows[i], showsSection);
  }
};

render();
