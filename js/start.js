let colorStorage = localStorage.getItem("colorOption");
if (colorStorage !== null) {
    document.documentElement.style.setProperty("--main-color", colorStorage);

    document.querySelectorAll(".colorList li").forEach(element => {
        element.classList.remove("active");
        
        if (element.dataset.color === colorStorage) {
            element.classList.add("active");
        }
        })
}

// landing page 
let landingPage = document.querySelector(".landingPage");

//To start and stop interval
let randomOption = true;

//Interval varaiable to change on the Interval
let backInteraval;

//start on reload 
randomizeYesOption();

//onclick yes to start interval
function randomizeYesOption() {   
    if (randomOption === true) {
        //imgs array 
        let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
        backInteraval=setInterval(function changeImgs() {
            //Get random number
            let randomNumber = Math.floor(Math.random() * imgs.length);
            //change img
            landingPage.style.backgroundImage = 'url("./images/'+imgs[randomNumber]+'")';
        }, 8000)   
    }
}

//onclick no to stop interval
function randomizeNoOption() {
    clearInterval(backInteraval);
}
//landing page


//setting box
let settingBox = document.querySelector(".settingBox");
function showSettingBox() {
    settingBox.classList.toggle("open");
    document.querySelector(".fa-gear").classList.toggle("fa-spin");
}
//setting box


//color list
const colorList = document.querySelectorAll(".colorList li");
colorList.forEach(x => {
    x.addEventListener("click", (e) => {
        // console.log(e.target.dataset.color);
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("colorOption", e.target.dataset.color);

        //remove class active from all elements 
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        //add active class
        e.target.classList.add("active");
    })
})
// colorList.forEach(myd);
// function myd() {
//     addEventListener("click", (e) => {
//         console.log(e.target.dataset.color);
//     })
// }
//color list

const backgroundList = document.querySelectorAll(".optionBox .randomBackgrounds span");
backgroundList.forEach(x => {
    x.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})



//change about image src
function showAlien() {
    document.querySelector(".imageBox img").src = "/first js/images/commissions-illustration-peek-a-boo.svg";
}
function hideAlien() {
    document.querySelector(".imageBox img").src = "/first js/images/commissions-illustration.svg";

}



//skills 
let skill = document.querySelector(".skills");

window.onscroll = function () {

    skill.style.left = "0";
    let skillsOffsetTop = skill.offsetTop;

    let skillOuterHeight = skill.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skills .skillBox .skillProgress span");

        allSkills.forEach(x => {
            x.style.width = x.dataset.progress;
        })
    }

}


let gallery = document.querySelectorAll(".gallery .images-box img");

gallery.forEach(x => {
    x.addEventListener('click', (e) => {
        // create popup Overlay div
        let pop = document.createElement("div");
        //add class name to the div
        pop.className = "popOverlay";
        //append the div to the body
        document.body.appendChild(pop);

        //add the img to the pop overlay
        let popupBox = document.createElement("img");
        //add class name to the img
        popupBox.className = "popupImg";
        //add img src
        popupBox.src = x.src;
        //append the img to the overlay
        pop.appendChild(popupBox);

        //check the alt of the img and add it as a heading
        if (x.alt !== null) {
            let altHead = document.createElement("h4");
            altHead.className = "altHead";
            //create a text for heading
            let imgHead = document.createTextNode(x.alt);
            imgHead.className = "headText";
            altHead.appendChild(imgHead);
            pop.appendChild(altHead);
        }

     
    })
})


//close the img when click esc button
document.addEventListener("keyup", (ev) => {
if (ev.key === "Escape") {
    // Code Here 
    // Remove Overlay
    document.querySelector('.popOverlay').remove();    
    // Remove popup Box
    document.querySelector('.popupImg').remove();

}
})

document.addEventListener('click', (e) => {
    if (e.target.className == "popOverlay") {
        // Remove Overlay
    document.querySelector('.popOverlay').remove();    
    // Remove popup Box
    document.querySelector('.popupImg').remove();
    }
})




//select all bullets and move to its section

const allbullets = document.querySelectorAll(".bulletContainer .bullet");

allbullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});

//hide and show bullets
const docks = document.querySelectorAll(".navDock .showDock span");
docks.forEach(x => {
    x.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})

function showDock() {
    document.querySelector(".bulletContainer").style.display = "block";    
}

function hideDock() {
    document.querySelector(".bulletContainer").style.display = 'none';       
}


//reset button 
document.querySelector(".resetOption").onclick = function () {
    localStorage.removeItem("colorOption");
    window.location.reload();
}