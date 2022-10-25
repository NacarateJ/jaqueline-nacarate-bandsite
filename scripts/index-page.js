const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// NOT WORKING :(
// const clearError = (commentsAddForm, commentsAddInput, commentsAddError) => {
//   commentsAddForm.removeChild(commentsAddError);
//   commentsAddInput.classList.remove("comments__input-name--error");
// };

// const showError = () => {
//   const commentsAddForm = document.querySelector(".comments__name-box");
//   const commentsAddInput = document.querySelector(".comments__input-name");
//   commentsAddInput.classList.add("comments__input-name--error");
//   const commentsAddError = document.createElement("p");
//   commentsAddError.textContent = "Please enter your name";
//   commentsAddError.classList.add("comments__error");
//   commentsAddForm.appendChild(commentsAddError);

//   setTimeout(
//     () => clearError(commentsAddForm, commentsAddInput, commentsAddError),
//     2000
//   );
// };

const addComment = (event) => {
  event.preventDefault();

  const inputCommentValue = event.target.comment.value;
  const inputNameValue = event.target.name.value;

  const date = new Date();
  const formattedDate =
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    date.getFullYear();

  const commentsObj = {
    name: inputNameValue,
    comment: inputCommentValue,
    date: formattedDate,
  };

  comments.unshift(commentsObj);
  display(comments);

  // clear everything from the form
  event.target.reset();
};

const form = document.querySelector(".comments__form");
form.addEventListener("submit", (event) => addComment(event));

const elementMaker = (type, className, text) => {
  const element = document.createElement(type);
  element.classList.add(className);

  if (text !== undefined) {
    element.innerText = text;
  }
  return element;
};

const displayComments = (commentsObj, commentsContainer) => {
  const commentsFans = elementMaker("div", "comments__fans");

  const commentsAvatar = elementMaker("div", "comments__avatar");

  const commentsInfo = elementMaker("div", "comments__info");

  const commentsWrapper = elementMaker("div", "comments__wrapper");

  const commentsName = elementMaker("p", "comments__name", commentsObj.name);

  const commentsDate = elementMaker("p", "comments__date", commentsObj.date);

  const commentsTxt = elementMaker("p", "comments__txt", commentsObj.comment);

  commentsContainer.appendChild(commentsFans);
  commentsFans.append(commentsAvatar, commentsInfo);
  commentsInfo.append(commentsWrapper, commentsTxt);
  commentsWrapper.append(commentsName, commentsDate);
};

const display = () => {
  const commentsContainer = document.querySelector(".comments__container");
  commentsContainer.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    displayComments(comments[i], commentsContainer);
  }
};

display();
