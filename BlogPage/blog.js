
var images = [
    {
        "image url":"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
    },
    {
        "image url":"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
    },
    {
        "image url":"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
    },
    {
        "image url":"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
    },
    {
        "image url":"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
    },
    {
        "image url":"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
    }
]



var btnNumber = 1;

document.querySelectorAll(".carousel-container").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item1");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-btn1">${btnNumber++}</span>`;
    });

    carousel.insertAdjacentHTML(
        "beforeend",
        `
            <div class="carouselBtn-container">
                ${buttonsHtml.join("")}
            </div>
        `
    );

    const buttons = carousel.querySelectorAll(".carousel-btn1");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // un-select all the items
            items.forEach((item) =>
                item.classList.remove("carousel-item--selected")
            );
            buttons.forEach((button) =>
                button.classList.remove("carousel-btn1--selected")
            );

            items[i].classList.add("carousel-item--selected");
            button.classList.add("carousel-btn1--selected");
        });
    });

    // Select the first item on page load
    items[0].classList.add("carousel-item--selected");
    buttons[0].classList.add("carousel-btn1--selected");
});