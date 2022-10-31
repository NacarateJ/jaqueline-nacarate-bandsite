const postComment = (newComment) => {
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments/?api_key=3e235735-6aa0-4a53-b7dd-cf57cdec1dce",
      newComment
    )
    .then((results) => {
      renderComments(results);
      console.log(results);
    })
    .catch((error) => {
      console.log("Sorry! Something went wrong!");
    });
};

const addComment = (event) => {
  event.preventDefault();

  const inputCommentValue = event.target.comment.value;
  const inputNameValue = event.target.name.value;

  const commentsObj = {
    name: inputNameValue,
    comment: inputCommentValue,
  };

  console.log(commentsObj);
  postComment(commentsObj);
  event.target.reset();
};

const form = document.querySelector(".comments__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addComment(event);
});

const elementMaker = (type, className, text) => {
  const element = document.createElement(type);
  element.classList.add(className);

  if (text !== undefined) {
    element.innerText = text;
  }
  return element;
};

function renderComments() {
  const commentsContainer = document.querySelector(".comments__container");
  commentsContainer.innerHTML = "";

  // axios.get takes the URL and returns a promise - success or error
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments/?api_key=3e235735-6aa0-4a53-b7dd-cf57cdec1dce"
    )
    .then((response) => {
      // response.data is my array
      const commentsData = response.data;

      const sortedCommentsData = commentsData.sort(function (a, b) {
        return b.timestamp - a.timestamp;
      });

      sortedCommentsData.forEach((comment) => {
        console.log(comment);
        const commentsFans = elementMaker("div", "comments__fans");
        const commentsAvatar = elementMaker("div", "comments__avatar");
        const commentsInfo = elementMaker("div", "comments__info");
        const commentsWrapper = elementMaker("div", "comments__wrapper");
        const commentsName = elementMaker("p", "comments__name", comment.name);
        const commentsDate = elementMaker(
          "p",
          "comments__date",
          date(new Date(comment.timestamp))
        );
        const commentsTxt = elementMaker("p", "comments__txt", comment.comment);

        commentsContainer.appendChild(commentsFans);
        commentsFans.append(commentsAvatar, commentsInfo);
        commentsInfo.append(commentsWrapper, commentsTxt);
        commentsWrapper.append(commentsName, commentsDate);
      });
    })
    .catch((error) => {
      console.log("Sorry! Something went wrong!");
    });
}

function date(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

renderComments();
