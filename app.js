const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            clickCounter++;
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0; 
        }
    });

    console.log(Math.floor(window.innerWidth / 270));
});

// TOGGLE
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});

// Đổi màu menu khi cuộn
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".movie-list-container, .content-container");
    const menuItems = document.querySelectorAll(".menu-list-item");
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= 0 && sectionTop + sectionHeight > 0) {
            current = section.getAttribute("id");
        }
    });

    menuItems.forEach(item => {
        item.classList.remove("active");
        if (item.querySelector("a").getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }
    });
});
