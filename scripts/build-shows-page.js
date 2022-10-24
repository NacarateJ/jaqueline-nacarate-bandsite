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

const elementMaker = (type, className, text) => {
  const element = document.createElement(type);
  element.classList.add(className);

  if (text !== undefined) {
    element.innerText = text;
  }
  return element;
};

// Function to render my show items
const renderShow = (showsObj, showsSection) => {
  const showsCards = elementMaker("div", "shows__cards");

  const showsWrapper = elementMaker("div", "shows__wrapper");

  const showsLabel = elementMaker("p", "shows__label", "DATE");
  showsLabel.classList.add("shows__label--hidden");

  const showsWrapper2 = elementMaker("div", "shows__wrapper");

  const showsLabel2 = elementMaker("p", "shows__label", "VENUE");
  showsLabel2.classList.add("shows__label--hidden");

  const showsWrapper3 = elementMaker("div", "shows__wrapper");

  const showsLabel3 = elementMaker("p", "shows__label", "LOCATION");
  showsLabel3.classList.add("shows__label--hidden");

  const showsInfo = elementMaker("p", "shows__info", showsObj.date);
  showsInfo.classList.add("shows__info--bold");

  const showsInfo2 = elementMaker("p", "shows__info", showsObj.venue);

  const showsInfo3 = elementMaker("p", "shows__info", showsObj.location);

  const showsButton = elementMaker("button", "shows__button", "BUY TICKETS");

  showsSection.append(showsContainer);
  showsContainer.append(showsCards);
  showsCards.append(showsWrapper, showsWrapper2, showsWrapper3, showsButton);
  showsWrapper.append(showsLabel, showsInfo);
  showsWrapper2.append(showsLabel2, showsInfo2);
  showsWrapper3.append(showsLabel3, showsInfo3);

  // showsCards.addEventListener("click", (event) => {
  //   console.log(event.target);

  //   if (event.target.id) {
  //     const taskToBeDeleted = document.getElementById(event.target.id);
  //     console.log(taskToBeDeleted);
  //     taskToBeDeleted.classList.toggle("shows__cards--selected");
  //   }
  //   // add else block to click anywhere (child) and still add the event selected
  // });
};

const showsContainer = elementMaker("div", "shows__container");
const showsHiddenLabels = elementMaker("div", "shows__hidden-labels");
const showsLabelHidden = elementMaker("p", "shows__label", "DATE");
const showsLabel2Hidden = elementMaker("p", "shows__label", "VENUE");
const showsLabel3Hidden = elementMaker("p", "shows__label", "LOCATION");

showsContainer.append(showsHiddenLabels);
showsHiddenLabels.append(
  showsLabelHidden,
  showsLabel2Hidden,
  showsLabel3Hidden
);

// Function to render the entire shows section
const render = () => {
  const showsSection = document.querySelector(".shows"); // To get shows container
  showsSection.innerHTML = ""; // To clean the section

  const showsTitle = document.createElement("h2");
  showsTitle.classList.add("shows__title");
  showsTitle.innerText = "Shows";
  showsSection.append(showsTitle);

  // Function to loop through each item of my array
  for (let i = 0; i < shows.length; i++) {
    renderShow(shows[i], showsSection);
  }
};

render();
