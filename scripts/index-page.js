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

const renderComments = (commentsObj, commentsSection) => {
  const commentsForm = document.createElement("form");
  form.classList.add("comments__form");

  const commentsAvatar = document.createElement("div");
  commentsAvatar.classList.add("comments__avatar");

  const commentsImg = document.createElement("img");
  commentsImg.classList.add("comments__img");
  commentsImg.setAttribute("src=");

  const commentsNameBox = document.createElement("div");
  commentsNameBox.classList.add("comments__name");

  const commentsLabelName = document.createElement("label");
  commentsLabelName.classList.add("comments__label");

  const commentsBox = document.createElement("input");
  commentsBox.classList.add("comments__box");
  commentsBox.innerText = "Enter your name";

  const commentsComment = document.createElement("div");
  commentsComment.classList.add("comments__comment");

  const commentsLabelComment = document.createElement("label");
  commentsLabelComment.classList.add("comments__label");
  commentsLabelComment.innerText = "Add a new comment";

  const commentsButton = document.createElement("div");
  commentsButton.classList.add("comments__button");

  const commentsButtonSubmit = document.createElement("button");
  commentsButtonSubmit.classList.add("comments__button-submit");
  commentsButtonSubmit.innerText = "COMMENT";

  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments__container");

  const commentsFans = document.createElement("div");
  commentsFans.classList.add("comments__fans");

  const commentsName = document.createElement("p");
  commentsName.classList.add("comments__name");
  commentsName.innerText = commentsObj.name;

  const commentsDate = document.createElement("p");
  commentsDate.classList.add("comments__date");
  commentsDate.innerText = commentsObj.date;

  const commentsTxt = document.createElement("p");
  commentsTxt.classList.add("comments__txt");
  commentsTxt.innerText = commentsObj.comment;

  commentsSection.appendChild(commentsForm);
  commentsForm.append(
    commentsAvatar,
    commentsNameBox,
    commentsComment,
    commentsButton
  );
  commentsAvatar.appendChild(commentsImg);
  commentsNameBox.append(commentsLabelName, commentsBox);
  commentsComment.appendChild(commentsLabelComment);
  commentsButton.appendChild(commentsButtonSubmit);
  commentsContainer.appendChild(commentsFans);
  commentsFans.append(commentsName, commentsDate, commentsTxt);
};

const render = () => {
  const commentsSection = document.querySelector(".comments");
  commentsSection.innerHTML = "";

  const commentsTitle = document.createElement("h2");
  commentsTitle.classList.add("comments__title");
  commentsTitle.innerText = "Join the Conversation";
  commentsSection.appendChild("commentsTitle");

  for (let i = 0; i < comments.length; i++) {
    renderComments(comments[i], commentsSection);
  }
};

render();
