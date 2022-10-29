// axios.get will give back a promise
axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=66a6f4bd-1089-49e6-9d8d-2a42b30e913c"
  )

  // .then handles the promise - success or error
  .then((response) => {
    display(response.data);
    eventListener();
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const elementMaker = (type, className, text) => {
  const element = document.createElement(type);
  element.classList.add(className);

  if (text !== undefined) {
    element.innerText = text;
  }
  return element;
};

// Function to render shows cards
const displayShows = (showsObj, showsSection) => {
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
  const showsInfo = elementMaker(
    "p",
    "shows__info",
    showsDate(new Date(showsObj.date))
  );
  showsInfo.classList.add("shows__info--bold");
  const showsInfo2 = elementMaker("p", "shows__info", showsObj.place);
  const showsInfo3 = elementMaker("p", "shows__info", showsObj.location);
  const showsButton = elementMaker("button", "shows__button", "BUY TICKETS");

  showsSection.append(showsContainer);
  showsContainer.append(showsCards);
  showsCards.append(showsWrapper, showsWrapper2, showsWrapper3, showsButton);
  showsWrapper.append(showsLabel, showsInfo);
  showsWrapper2.append(showsLabel2, showsInfo2);
  showsWrapper3.append(showsLabel3, showsInfo3);
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

const showsSection = document.querySelector(".shows"); // To get shows container
showsSection.innerHTML = ""; // To clean the section

const showsTitle = document.createElement("h2");
showsTitle.classList.add("shows__title");
showsTitle.innerText = "Shows";
showsSection.append(showsTitle);

// Function to render apiArray
const display = (apiArray) => {
  // Function to loop through each item of my array
  for (let i = 0; i < apiArray.length; i++) {
    displayShows(apiArray[i], showsSection);
  }
};

// Function to add backGroundColor to shows cards onclick
const eventListener = () => {
  const showsCardsBackGround = document.querySelectorAll(".shows__cards");
  for (let i = 0; i < showsCardsBackGround.length; i++) {
    const eachShowsCardsBackGround = showsCardsBackGround[i];
    eachShowsCardsBackGround.addEventListener("click", (event) => {
      event.preventDefault();
      handleClick(event);
    });
  }
  function handleClick(event) {
    event.preventDefault();
    for (let i = 0; i < showsCardsBackGround.length; i++) {
      showsCardsBackGround[i].classList.remove("shows__cards--selected");
      showsCardsBackGround[i].classList.remove("nohover");
    }
    event.currentTarget.classList.add("shows__cards--selected");
    event.currentTarget.classList.add("nohover");
  }
};

// Function to fix date
function showsDate(date) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-ca", options).replace(/,/g, "");
}
