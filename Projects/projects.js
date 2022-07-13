var contents = [
    {
        id: 1,
        category: "website",
        img: "./Project/blogImg1.svg",
        link: "./projectDetails.html"
    },
    {
        id: 2,
        category: "website",
        img: "./Project/blogImg2.svg",
        link: "./projectDetails.html"
    },
    {
        id: 3,
        category: "website",
        img: "./Project/blogImg3.svg",
        link: "./projectDetails.html"
    },
    {
        id: 4,
        category: "soacial-media",
        img: "./Project/blogImg4.svg",
        link: "./projectDetails.html"
    },
    {
        id: 5,
        category: "soacial-media",
        img: "./Project/blogImg5.svg",
        link: "./projectDetails.html"
    },
    {
        id: 6,
        category: "soacial-media",
        img: "./Project/blogImg6.svg",
        link: "./projectDetails.html"
    },
    {
        id: 7,
        category: "soacial-media",
        img: "./Project/blogImg7.svg",
        link: "./projectDetails.html"
    },
    {
        id: 8,
        category: "mobile-app",
        img: "./Project/blogImg1.svg",
        link: "./projectDetails.html"
    },
    {
        id: 9,
        category: "mobile-app",
        img: "./Project/blogImg2.svg",
        link: "./projectDetails.html"
    },
    {
        id: 10,
        category: "mobile-app",
        img: "./Project/blogImg3.svg",
        link: "./projectDetails.html"
    },
    {
        id: 11,
        category: "logo",
        img: "./Project/blogImg4.svg",
        link: "./projectDetails.html"
    },
    {
        id: 12,
        category: "logo",
        img: "./Project/blogImg5.svg",
        link: "./projectDetails.html"
    },
    {
        id: 13,
        category: "logo",
        img: "./Project/blogImg6.svg",
        link: "./projectDetails.html"
    },
    {
        id: 14,
        category: "logo",
        img: "./Project/blogImg7.svg",
        link: "./projectDetails.html"
    },
    {
        id: 15,
        category: "logo",
        img: "./Project/blogImg1.svg",
        link: "./projectDetails.html"
    }
];



var contentCenter = document.querySelector(".content-center");
var btnContainer = document.querySelector(".btn-container");



window.addEventListener("DOMContentLoaded", () => {
    displayContentItems(contents);
    displayButtons();
});



function displayContentItems( contentItems ) {
    var displayContent = contentItems.map( ( content ) => {
        return `
            <article class="content-item">
                <img src=${content.img} alt="">
                <div class="expand-work">
                    <h6>Our Projects</h6>
                    <h5>Let’s See Our Work</h5>
                    <a href=${content.link}>
                        <img src="./Project/zoom.svg" alt="">
                    </a>
                </div>
            </article>
        `;
    });

    displayContent = displayContent.join("");
    contentCenter.innerHTML = displayContent;
}



function displayButtons() {
    var categories = contents.reduce( ( values, content ) => {
        if( !values.includes(content.category)) {
            values.push(content.category);
        }
        return values;
    }, ["all-works"]);

    var categoryButtons = categories.map( ( category ) => {
        return `
            <button class="content-btn" type="button" data-id=${category}>${category}</button>
        `;
    }).join("");

    btnContainer.innerHTML = categoryButtons;
    var filterButtons = btnContainer.querySelectorAll(".content-btn");

    filterButtons.forEach( ( btn ) => {
        btn.addEventListener("click", ( e ) => {
            var category = e.currentTarget.dataset.id;
            // console.log(category);

            var contentCategory = contents.filter( ( contentItem ) => {
                if(contentItem.category === category) {
                    return contentItem;
                }
            });

            if(category === "all-works") {
                displayContentItems(contents);
            }
            else {
                displayContentItems(contentCategory);
            }
        });
    });
}



(function ViewMore(){
    if(contents.length <= 6)
    {
        document.getElementById("btn1").style.display = "none"
    }
    else
    {
        document.getElementById("btn1").style.display = "block"
    }
})()

document.getElementById("btn1").addEventListener("click", (e)=>{
    if(document.getElementById("btn1").innerText == "View More")
    {
        document.getElementsByClassName("view-more")[0].style.height = "100%"
        document.getElementById("btn1").innerText = "View Less"
    }
    else
    {
        document.getElementsByClassName("view-more")[0].style.height = "700px"
        document.getElementById("btn1").innerText = "View More"
    }
})



document.addEventListener('click', function () {
	if (!event.target.classList.contains('content-btn')) return;

	event.target.classList.add('active');
	var links = document.querySelectorAll('.content-btn');

	for (var i = 0; i < links.length; i++) {
		if (links[i] === event.target) continue;
		links[i].classList.remove('active');
	}

}, false);











// var lengthContents = contents.length;
// console.log(lengthContents);
// var countSocialmeadia = 0;
// var countWebsite = 0;
// var countMobileApp = 0;
// var countLogo = 0;
// for(var i = 0; i < lengthContents; i++) {
//     console.log(contents[i].category);

//     if(contents[i].category === "website") {
//         countWebsite++;
//     }
//     if(contents[i].category === "soacial-media") {
//         countSocialmeadia++;
//     }
//     if(contents[i].category === "mobile-app") {
//         countMobileApp++;
//     }
   
//     if(contents[i].category === "logo") {
//         countLogo++;
//     }
// }

// var countAllwork = countSocialmeadia+countMobileApp+countWebsite+countLogo;
// console.log(countAllwork, countWebsite , countSocialmeadia , countMobileApp, countLogo);