let fnameError = document.querySelector(".fname-error");
let lnameError = document.querySelector(".lname-error");
let emailError = document.querySelector(".email-error");
let phoneError = document.querySelector(".phone-error");
let yoeError = document.querySelector(".yoe-error");
let cctcError = document.querySelector(".cctc-error");
let ectcError = document.querySelector(".ectc-error");
let resumeError = document.querySelector(".resume-error");
let submitError = document.querySelector(".submit-error");


function fnameValidation() {
    let fname = document.querySelector(".fname-input").value;

    if(fname.length == 0) {
        fnameError.innerHTML = 'first name is required!';
        return false;
    }

    fnameError.innerHTML = '<span class="success-message">you are all good to go!</span>';
    return true;
}

function lnameValidation() {
    let lname = document.querySelector(".lname-input").value;

    if(lname.length == 0) {
        lnameError.innerHTML = 'last name is required!';
        return false;
    }

    lnameError.innerHTML = '<span class="success-message">you are all good to go!</span>';
    return true;
}

function emailValidation() {
    let email = document.querySelector(".email-input").value;

    if(email.length == 0) {
        emailError.innerHTML = 'email is required!';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = '@ need to be include!';
        return false;
    }

    emailError.innerHTML = '<span class="success-message">you are good to go!</span>';
    return true;
}

function phoneValidation() {
    let phone = document.querySelector(".phone-input").value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone no is required!';
        return false;
    }

    if(phone.length != 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits!';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits need to be add!';
        return false;
    }

    phoneError.innerHTML = '<span class="success-message">you are all good to go!</span>';
    return true;
}

function yoeValidation() {
    let yoe = document.querySelector(".yoe-input").value;

    if(yoe.length == 0) {
        yoeError.innerHTML = 'Years of experience is required!';
        return false;
    }

    if(!yoe.match(/^[0-9]+$/)) {
        yoeError.innerHTML = 'Only digits need to be add!';
        return false;
    }

    yoeError.innerHTML = '<span class="success-message">you are all good to go!</span>';
    return true;
}

function cctcValidation() {
    let cctc = document.querySelector(".cctc-input").value;

    if(cctc.length == 0) {
        cctcError.innerHTML = 'current ctc is required!';
        return false;
    }

    if(!cctc.match(/^[0-9]+$/)) {
        cctcError.innerHTML = 'Only digits need to be add!';
        return false;
    }

    cctcError.innerHTML = '<span class="success-message">you are all good to go!</span>';
    return true;
}

function ectcValidation() {
    let ectc = document.querySelector(".ectc-input").value;

    if(ectc.length == 0) {
        ectcError.innerHTML = 'expected ctc is required!';
        return false;
    }

    if(!ectc.match(/^[0-9]+$/)) {
        ectcError.innerHTML = 'Only digits need to be add!';
        return false;
    }

    ectcError.innerHTML = '<span class="success-message">you are all good to go!</span>';
    return true;
}

function resumeValidation() {
    let resume = document.querySelector(".resume-input").value;

    if(resume.length == 0) {
        resumeError.innerHTML = 'resume is required!';
        return false;
    }

    if(!resume.match(/(\.jpg|\.jpeg|\.png|\.gif)$/i)) {
        resumeError.innerHTML = 'please choose the valid file format!!';
        return false;
    }

    resumeError.innerHTML = '<span class="success-message">you are all good to go!</span>';
    return true;

    // var fileName = resume.value;
    // var allowed_extensions = new Array("jpg","png","gif");
    // var file_extension = fileName.split('.').pop(); 
    // for(var i = 0; i < allowed_extensions.length; i++)
    // {
    //     if(allowed_extensions[i] == file_extension)
    //     {
    //         resumeError.innerHTML = "you are all good to go!";
    //         return true;
    //     }
    // }
    // resumeError.innerHTML="Invalid file";
    // return false; 
}

async function validateForm() {
    if(!fnameValidation() || !lnameValidation() || !emailValidation() || !phoneValidation() || !yoeValidation() || !cctcValidation() || !ectcValidation() || !resumeValidation()) {
        submitError.style.display = 'block';
        setTimeout(function() {
            submitError.style.display = 'none';
        }, 3000);

        submitError.innerHTML = 'Please fix error to submit';
        return false;
    }else
    {
         document.getElementById('popupBlock').style.display = "block"
        let applyBtn = document.querySelector(".apply-btn");
        let blur = document.querySelector(".blur");
     
        // document.querySelector(".pop").innerHTML = popUP();
        blur.classList.add("on");
        document.querySelector(".popup").classList.add("open-popup");
        window.addEventListener("mouseup", function(event) {
            let popup = document.querySelector(".popup");
            if(event.target != popup && event.target.parentNode != popup) {
                popup.classList.remove("open-popup");
                blur.classList.remove("on");
                document.getElementById('popupBlock').style.display = "none"
            }
        });
        document.querySelector(".forms").reset();
        fnameError.innerHTML = '';
        lnameError.innerHTML = '';
        emailError.innerHTML = '';
        phoneError.innerHTML = '';
        yoeError.innerHTML = '';
        cctcError.innerHTML = '';
        ectcError.innerHTML = '';
        resumeError.innerHTML = '';
        submitError.innerHTML = '';
    }
    




   
    

    
    // function popUP() {
    //     return `
    //         <div class="popup">
    //             <img src="../Form/checked.svg" alt="">
    //             <h2>Thank you for applying to the UI/UX Designer position at Nidish!</h2>
    //             <p>I’d like to inform you that we received your application. Our hiring team is currently reviewing all applications 🤗</p>
    //             <a href="#">Go Back</a>
    //         </div>
    //     `;
    // }


   
}