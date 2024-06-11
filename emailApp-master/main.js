let userInfo = [
  {
    id: 1,
    name: "Borge refereanc",
    image: "./images/user1.jpg",
    subject: "Remember me",
    date: "From borge asdf sep 20, 2024",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis itaque incidunt quia fugit vero, aspernatur reprehenderit delectus vitae a sed accusamus libero ea officiis aperiam expedita. Dolore, soluta tempore!",
  },
  {
    id: 2,
    name: "Maria games",
    image: "./images/user2.jpg",
    subject: "forget me",
    date: "From Maria games sep 3, 2017",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis itaque incidunt quia fugit vero, aspernatur reprehenderit delectus vitae a sed accusamus libero ea officiis aperiam expedita. Dolore, soluta tempore!",
  },
  {
    id: 3,
    name: "Anderson pallghe",
    image: "./images/user3.jpg",
    subject: "hire me",
    date: "From borge asdf sep 6, 2015",
    bio: "good job i have best work in the world!",
  },
];
// آرایه اطلاعات کاربران

let userWrapperCard = document.querySelectorAll(".userWrapperCard");

userInfo.forEach((item) => {
  userWrapperCard.forEach((userWrapper) => {
    userWrapper.innerHTML += `<button class="userCard border-0 d-flex flex-column gap-2 px-4 py-3" data-id=${item.id}>
    <div class="d-flex gap-2 align-items-center">
      <img class="userImg" src="${item.image}" alt="user image" width="30" height="30">
      <h6 class="userName">${item.name}</h6>
    </div>
    <div class="d-flex gap-2">
      <h6>Subject:</h6>
      <h6>${item.subject}</h6>
    </div>
    <p class="uesrDescription m-0">${item.bio}</p>
  </button>`;
  });
});
// درست کردن باکس های کاربر در ساید بار و منو سایت

let userCards = document.querySelectorAll(".userCard");

let userSubject = document.querySelectorAll(".userSubject");
let userDate = document.querySelector(".userDate");
let userBio = document.querySelector(".userBio");
let userImgWrapper = document.querySelector(".userImgWrapper");

userCards.forEach((item) => {
    item.addEventListener("click", function (e) {
        
    userImgWrapper.innerHTML = `<img class="userImage" src="./images/user1.jpg" alt="user iamge" width="200" height="200">`
    let userImage = document.querySelector(".userImage");
        
    userInfo.forEach((user) => {
      if (e.target.closest(".userCard").dataset.id == user.id) {
        userImage.src = user.image;
        userSubject.forEach((item) => {
          item.innerHTML = user.subject;
        });
        userDate.innerHTML = user.date;
        userBio.innerHTML = user.bio;
        console.log(user.id);
      }
    });
  });
});

//وقتی روی باکس های کاربران کلیک شد اطلاعات انها در صفحه جایگزین شود
