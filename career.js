

const vacancies = [
    {
        id: 1,
        heading: "Senior Backend Developer",
        description: "We are currently on the look out for Senior Backend Developer who know Node.JS",
        image: "./Career/BackendDeveloper.jpg",
        link: "./Forms/backendDeveloper-form.html",
    },
    {
        id: 2,
        heading: "Project Manager",
        description: "We are currently on the look out for Project Manager",
        image: "./Career/ProjectManager.jpg",
        link: "./Forms/backendDeveloper-form.html",
    },
    {
        id: 3,
        heading: "UI/UX Designer",
        description: "We are currently on the look out for UI/UX Designer",
        image: "./Career/UIUXDesigner.jpg",
        link: "./Forms/backendDeveloper-form.html",
    },
    {
        id: 4,
        heading: "Wordpress Developer",
        description: "We are currently on the look out for Wordpress Developer",
        image: "./Career/WordPressDeveloper.jpg",
        link: "./Forms/backendDeveloper-form.html",
    },
    {
        id: 5,
        heading: "Full Stack Developer",
        description: "We are currently on the look out for Full Stack Developer",
        image: "./Career/FullStackDeveloper.jpg",
        link: "./Forms/backendDeveloper-form.html",
    },
    {
        id: 6,
        heading: "Full Stack Developer",
        description: "We are currently on the look out for Full Stack Developer",
        image: "./Career/BackendDeveloper.jpg",
        link: "./Forms/backendDeveloper-form.html",
    }

];

const careerSection2Cont = document.querySelector(".career-sec2-cont");

window.addEventListener("DOMContentLoaded", function () {

    displayVacancies(vacancies);
   
});

function displayVacancies( vacancy ) {
    let displayVacancy = vacancy.map( function( item ) {
        return `
            <div class="career-sec2-box1">
                <div class="img-cont">
                    <img src= ${ item.image } alt="images">
                </div>
                <div class="txt-cont">
                    <h4> ${ item.heading } </h4>
                    <p> ${ item.description } </p>
                    <a href=${ item.link } class="btn-wrapper2">
                        <button class="apply-btn" id=apply-btn-${ item.id }>Apply Now</button>
                    </a>
                </div>
            </div>
        `
    });

    displayVacancy = displayVacancy.join("");
    careerSection2Cont.innerHTML = displayVacancy;



    const applyBtn = document.querySelectorAll(".apply-btn");

    applyBtn.forEach( function( btn ) {
        btn.addEventListener("click", (event) => {
            if( event.target.id === 'apply-btn-1' ) {
                location.href = "Forms/backendDeveloper-form.html";
            }
            if( event.target.id === 'apply-btn-2' ) {
                location.href = "Forms/projectManager-form.html";
            }
            if( event.target.id === 'apply-btn-3' ) {
                location.href = "Forms/uxDesigner-form.html";
            }
            if( event.target.id === 'apply-btn-4' ) {
                location.href = "Forms/wordpressDeveloper.html";
            }
            if( event.target.id === 'apply-btn-5' ) {
                location.href = "Forms/fullstackDeveloper.html";
            }
        });
    });

}


// document.getElementById("apply-btn").onclick = function () {

//     if( applyBtn === id ) {
//         location.href = "/careerForm.html";
//     }

//     console.log("clickrd");
    
// };