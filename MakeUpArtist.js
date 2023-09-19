window.onload = function () {
    slideTimeMin();
    slideTimeMax();
    slideViewMin();
    slideViewMax();
}

//
const formFilter = document.querySelector(".formFilter")
const overlay = document.querySelector("#overlay")
const body = document.body;
function OpenCloseFormFilter() {
    if (formFilter.style.display !== "none") {
        formFilter.style.display = "none";
        body.style.height = "auto";
        body.style.overflow = "auto";
        overlay.style.display = "none";
    }
    else {
        // body.style.opacity="50%"
        formFilter.style.display = "block";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        overlay.style.display = "block";
    }
}
//timeViewRange
const minTimeVal = document.querySelector(".minTime-val");
const maxTimeVal = document.querySelector(".maxTime-val");
const minTimeToolTip = document.querySelector(".minTimeValue")
const maxTimeToolTip = document.querySelector(".maxTimeValue")
const minTimeGap = 35;
const rangeTime = document.querySelector(".sliderTrackTime")
const sliderMinTimeValue = parseInt(minTimeVal.min)
const sliderMaxTimeValue = parseInt(maxTimeVal.max)
const minViewVal = document.querySelector(".minView-val");
const maxViewVal = document.querySelector(".maxView-val");
const minViewToolTip = document.querySelector(".minViewValue")
const maxViewToolTip = document.querySelector(".maxViewValue")
const minViewGap = 3500;
const rangeView = document.querySelector(".sliderTrackView")
const sliderMinViewValue = parseInt(minViewVal.min)
const sliderMaxViewValue = parseInt(maxViewVal.max)

function slideTimeMin() {
    let gap = parseInt(maxTimeVal.value) - parseInt(minTimeVal.value);
    if (gap <= minTimeGap) {
        minTimeVal.value = parseInt(maxTimeVal.value) - minTimeGap;
    }
    minTimeToolTip.innerHTML = minTimeVal.value + " mins";
    setTimeArea();
}
function slideTimeMax() {
    let gap = parseInt(maxTimeVal.value) - parseInt(minTimeVal.value);
    if (gap <= minTimeGap) {
        maxTimeVal.value = parseInt(minTimeVal.value) + minTimeGap;
    }
    maxTimeToolTip.innerHTML = maxTimeVal.value + " mins";
    setTimeArea();
}
function setTimeArea() {
    rangeTime.style.left = (minTimeVal.value / sliderMaxTimeValue) * 100 + "%";
    minTimeToolTip.style.left = (minTimeVal.value / sliderMaxTimeValue) * 100 + "%";
    rangeTime.style.right = 100 - (maxTimeVal.value / sliderMaxTimeValue) * 100 + "%";
    maxTimeToolTip.style.right = 100 - (maxTimeVal.value / sliderMaxTimeValue) * 100 + "%";
}
function slideViewMin() {
    let gap = parseInt(maxViewVal.value) - parseInt(minViewVal.value);
    if (gap <= minViewGap) {
        minViewVal.value = parseInt(maxViewVal.value) - minViewGap;
    }
    minViewToolTip.innerHTML = minViewVal.value + "k";
    setViewArea();
}
function slideViewMax() {
    let gap = parseInt(maxViewVal.value) - parseInt(minViewVal.value);
    if (gap <= minViewGap) {
        maxViewVal.value = parseInt(minViewVal.value) + minViewGap;
    }
    maxViewToolTip.innerHTML = maxViewVal.value + "k";
    setViewArea();
}
function setViewArea() {
    rangeView.style.left = (minViewVal.value / sliderMaxViewValue) * 100 + "%";
    minViewToolTip.style.left = (minViewVal.value / sliderMaxViewValue) * 100 + "%";
    rangeView.style.right = 100 - (maxViewVal.value / sliderMaxViewValue) * 100 + "%";
    maxViewToolTip.style.right = 100 - (maxViewVal.value / sliderMaxViewValue) * 100 + "%";
}
//checkBoxFilter
const parentFocusOn = document.querySelector(".boxCheckBox")
const dataFocusOn = [
    {
        nameTag: "Full-face"
    },
    {
        nameTag: "Eyes"
    },
    {
        nameTag: "Lips"
    },
    {
        nameTag: "Foundation"
    },
    {
        nameTag: "Eyesbrown"
    },
    {
        nameTag: "Contour"
    },
    {
        nameTag: "Concealer"
    },
    {
        nameTag: "Skin-care"
    }
];
const parentLevel = document.querySelector(".boxCheckBox")
const dataLevel = [
    {
        nameTag: "Beginner"
    },
    {
        nameTag: "Intermediate"
    },
    {
        nameTag: "Advanced"
    },
    {
        nameTag: "Mixed"
    },
];
const createLevelCheckBox = (dataLevel) => {
    const { nameTag } = dataLevel;
    const templateCheckBox = `<div class="checkBoxLevel">
    <input type="checkbox" class="checkBox" value="${nameTag}">
        <p class="checkBoxName">${nameTag}</p>
    </div>
    `;
    parentLevel.insertAdjacentHTML("beforeend", templateCheckBox)
}
dataLevel.map((people, index) => createLevelCheckBox(people))
const createFocusOnCheckBox = (dataFocusOn) => {
    const { nameTag } = dataFocusOn;
    const templateCheckBox = `
    <div class="checkBoxFocusOn">
    <input type="checkbox" class="checkBox" value="${nameTag}">
        <p class="checkBoxName">${nameTag}</p>
    </div>`;
    parentFocusOn.insertAdjacentHTML("beforeend", templateCheckBox)
}
dataFocusOn.map((people, index) => createFocusOnCheckBox(people))



//checkBox MakeUp
const parentMakeUp = document.querySelector(".boxMakeUpStyle")
const dataMakeUp = [
    {
        nameTag: "Daily make-up"
    },
    {
        nameTag: "Sweet"
    },
    {
        nameTag: "Sharp"
    }
];
const createMakeUpCheckBox = (dataMakeUp) => {
    const { nameTag } = dataMakeUp;
    const templateMakeUp = `<div class="checkBoxMakeUp">
    <input type="checkbox" class="checkBox" value="${nameTag}">
        <p class="checkBoxName">${nameTag}</p>
    </div>`;
    parentMakeUp.insertAdjacentHTML("beforeend", templateMakeUp)
}
dataMakeUp
    .map((people, index) => createMakeUpCheckBox(people))
// model container
const parentElement = document.querySelector(".modelList")
const data = [
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-1(1).png',
        name: 'Kierra Workman',
        nation: 'Sao Tome and Principe',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Full-face',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-2.png',
        name: 'Gretchen Bergson',
        nation: 'Iceland',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Intermediate',
        dataFocusOn: 'Eyes',
        dataMakeUp: 'Sweet'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-3.png',
        name: 'Hanna Calzoni',
        nation: 'Iran (Islamic Republic of)',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Advanced',
        dataFocusOn: 'Lips',
        dataMakeUp: 'Sharp'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-4.png',
        name: 'Ann Culhane',
        nation: 'Algeria',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Mixed',
        dataFocusOn: 'Foundation',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-5.png',
        name: 'Lydia Lubin',
        nation: 'Viet Nam',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Eyesbrown',
        dataMakeUp: 'Sweet'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-6.png',
        name: 'Erin George',
        nation: 'Israel',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Intermediate',
        dataFocusOn: 'Contour',
        dataMakeUp: 'Sharp'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-7.png',
        name: 'Jocelyn Lubin',
        nation: 'Brazil',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Advanced',
        dataFocusOn: 'Concealer',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-8.png',
        name: 'Giana Levin',
        nation: 'Curaçao',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Mixed',
        dataFocusOn: 'Skin-care',
        dataMakeUp: 'Sweet'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-9.png',
        name: 'Cheyenne Dorwart',
        nation: 'Sao Tome and Principe',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Full-face',
        dataMakeUp: 'Sharp'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-10.png',
        name: 'Ashlynn Aminoff',
        nation: 'Saint Barthélemy',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Intermediate',
        dataFocusOn: 'Eyes',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-11.png',
        name: 'Maren Schleifer',
        nation: 'Israel',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Advanced',
        dataFocusOn: 'Lips',
        dataMakeUp: 'Sweet'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-12.png',
        name: 'Carla Curtis',
        nation: 'Saudi Arabia',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Full-face',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-13.png',
        name: 'Erin Culhane',
        nation: 'Réunion',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Intermediate',
        dataFocusOn: 'Eyes',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-14.png',
        name: 'Maren Levin',
        nation: 'Åland Islands',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Intermediate',
        dataFocusOn: 'Eyes',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-15.png',
        name: 'Maria Schleifer',
        nation: 'Algeria',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Mixed',
        dataFocusOn: 'Skin-care',
        dataMakeUp: 'Sweet'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-16.png',
        name: 'Ashlynn Botosh',
        nation: 'Monaco',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Mixed',
        dataFocusOn: 'Skin-care',
        dataMakeUp: 'Sweet'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-17.png',
        name: 'Alexandru Zdrobau',
        nation: 'Chisinau, Moldova',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Intermediate',
        dataFocusOn: 'Eyes',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-19.png',
        name: 'Ayo Ogunseinde',
        nation: 'Houston, United States',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Intermediate',
        dataFocusOn: 'Eyes',
        dataMakeUp: 'Sweet'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-20.png',
        name: 'Pouriya Kafaei',
        nation: 'Moscow, Russia',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Full-face',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-21.png',
        name: 'Lydia Lubin',
        nation: 'Viet Nam',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Intermediate',
        dataFocusOn: 'Eyes',
        dataMakeUp: 'Sweet'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-22.png',
        name: 'Jayson Hinrichsen',
        nation: 'Des Moines, United States',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Intermediate',
        dataFocusOn: 'Eyes',
        dataMakeUp: 'Sweet'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-23.png',
        name: 'Nora Hutton',
        nation: 'Hertfordshire, UK',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Full-face',
        dataMakeUp: 'Daily make-up'

    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-24.png',
        name: 'Pascal Bräuer',
        nation: 'Wien, Austria',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Advanced',
        dataFocusOn: 'Lips',
        dataMakeUp: 'Sharp'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-25.png',
        name: 'Cheyenne Dorwart',
        nation: 'Sao Tome and Principe',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Full-face',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-26.png',
        name: 'Ashlynn Aminoff',
        nation: 'Saint Barthélemy',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Lips',
        dataMakeUp: 'Sharp'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-27.png',
        name: 'Roksolana Zasiadko',
        nation: 'Cieloadentro',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Full-face',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-28.png',
        name: 'Štefan Štefančík',
        nation: 'Cikstefan',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Full-face',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-29.png',
        name: 'Valerie Elash',
        nation: 'Réunion',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Advanced',
        dataFocusOn: 'Concealer',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-30.png',
        name: 'Valerie Elash',
        nation: 'Réunion',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Beginner',
        dataFocusOn: 'Full-face',
        dataMakeUp: 'Daily make-up'
    },
    {
        imgView: 'Assest/Image/makeupartist/group-224.png',
        imgHeart: 'Assest/Image/makeupartist/group-223.png',
        imgHeart1: 'Assest/Image/makeupartist/group-223(1).png',
        image: 'Assest/Image/makeupartist/list-31.png',
        name: 'Wesley Tingey',
        nation: 'Algeria',
        link: 'https://www.instagram.com/kiera/',
        dataLevel: 'Advanced',
        dataFocusOn: 'Concealer',
        dataMakeUp: 'Daily make-up'
    },
];

const createModelCard = (data) => {
    const { imgView, imgHeart, imgHeart1, image, name, nation, link } = data;
    const template = `<div class="profile">
    <div class="model-img">
        <div class="img">
            <div class="imgView">
                <img src=${imgView}>
            </div>
        </div>
        <div class="img">
            <div class="imgHeart">
                <img src=${imgHeart}>
            </div>
            <div class="imgHeart1">
                <img src=${imgHeart1}>
            </div>
        </div>
        <div class="img">
            <div class="image">
                <img src=${image}>
            </div>
        </div>
        <div class="img">
            <div class="imgHover">
                <a href="${link}" target="_blank">
                    <button class="btn-hover">View Profile</button>
                </a>
            </div>
        </div>
    </div>

    <div class="modelInfo">
        <div class="name">
            <h3>
                ${name}
            </h3>
        </div>
        <div class="nation">
            <p>
                ${nation}
            </p>
        </div>
    </div>
</div>
`;
    parentElement.insertAdjacentHTML("beforeend", template)
}
data
    .map((people, index) => createModelCard(people))
//     .filter((people, index) => people.age >= 18)
// console.log(">>>>", filterData)

const imgHover = document.getElementsByClassName("imgHover");
const imgView = document.getElementsByClassName("imgView");
const imgHeart = document.getElementsByClassName("imgHeart");
const image = document.getElementsByClassName("image");
const img = document.getElementsByClassName("img")
const profile = document.getElementsByClassName("profile")
for (let i = 0; i <= profile.length; i++) {
    if (profile[i]) {
        profile[i].children[0].addEventListener("mouseover", function () {
            profile[i].children[0].children[0].firstElementChild.style.opacity = "70%";
            profile[i].children[0].children[1].firstElementChild.style.opacity = "70%";
            profile[i].children[0].children[2].firstElementChild.style.opacity = "70%";
            profile[i].children[0].children[3].firstElementChild.style.display = "block";
        })
        profile[i].children[0].children[1].firstElementChild.addEventListener("click", function () {
            profile[i].children[0].children[1].lastElementChild.style.display = "block";
            profile[i].children[0].children[1].firstElementChild.style.display = "none";
        })
        profile[i].children[0].children[1].lastElementChild.addEventListener("click", function () {
            profile[i].children[0].children[1].lastElementChild.style.display = "none";
            profile[i].children[0].children[1].firstElementChild.style.display = "block";
        })
    }
}
for (let i = 0; i <= profile.length; i++) {
    if (profile[i]) {
        profile[i].children[0].addEventListener("mouseout", function () {
            profile[i].children[0].children[0].firstElementChild.style.opacity = "100%";
            profile[i].children[0].children[1].firstElementChild.style.opacity = "100%";
            profile[i].children[0].children[2].firstElementChild.style.opacity = "100%";
            profile[i].children[0].children[3].firstElementChild.style.display = "none";
        })

    }
}

let thisPage = 1;
let limit = 12;
let list = document.querySelectorAll('.modelList .profile');

function loadBox() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((modelList, key) => {
        if (key >= beginGet && key <= endGet) {
            modelList.style.display = "block";
        } else {
            modelList.style.display = "none";
        }
    })
    listPage();
}
loadBox();
function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = "";
    if (thisPage == 1) {
        let prev2 = document.createElement('li');
        prev2.innerHTML = '<img src="Assest/Image/makeupartist/2vectorPrev.png">';
        document.querySelector('.listPage').appendChild(prev2);
        prev2.style.marginRight = "30px";
        let prev = document.createElement('li');
        prev.innerHTML = '<img src="Assest/Image/makeupartist/vectorPrev.png">';
        document.querySelector('.listPage').appendChild(prev);
        prev.style.marginRight = "15px";

        //nếu không được thì dùng code sau
        //document.body.querySelector('.listPage').appendChild(prev);
    }
    else {
        let prev2 = document.createElement('li');
        prev2.innerHTML = '<img src="Assest/Image/makeupartist/2vectorPrev(1).png">';
        prev2.setAttribute('onclick', "changePage(" + (1) + ")");
        document.querySelector('.listPage').appendChild(prev2);
        prev2.style.marginRight = "30px";
        let prev = document.createElement('li');
        prev.innerHTML = '<img src="Assest/Image/makeupartist/vectorPrev(1).png">';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
        prev.style.marginRight = "20px";
        //nếu không được thì dùng code sau
        //document.body.querySelector('.listPage').appendChild(prev);
    }
    for (let i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }
    if (thisPage != count) {
        let next = document.createElement('li');
        next.innerHTML = '<img src="Assest/Image/makeupartist/vectorNext(1).png">';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
        next.style.marginLeft = "20px";
        let next2 = document.createElement('li');
        next2.innerHTML = '<img src="Assest/Image/makeupartist/2vectorNext(1).png">';
        next2.setAttribute('onclick', "changePage(" + (count) + ")");
        document.querySelector('.listPage').appendChild(next2);
        next2.style.marginLeft = "20px";
        //nếu không được thì dùng code sau
        //document.body.querySelector('.listPage').appendChild(next);
    }
    else {
        let next = document.createElement('li');
        next.innerHTML = '<img src="Assest/Image/makeupartist/vectorNext.png">';
        document.querySelector('.listPage').appendChild(next);
        next.style.marginLeft = "20px";
        let next2 = document.createElement('li');
        next2.innerHTML = '<img src="Assest/Image/makeupartist/2vectorNext.png">';
        document.querySelector('.listPage').appendChild(next2);
        next2.style.marginLeft = "20px";
        //nếu không được thì dùng code sau
        //document.body.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i) {
    thisPage = i;
    loadBox();
}

window.addEventListener("scroll", () => {
    var pos = scrollY;
    if (pos > 0) {
        if (document.getElementsByTagName("header")[0].className != "active")
            return
        else {
            document.getElementsByTagName("header")[0].className = "active";
        }
    }
});
const changeNav = () => {
    const header = document.getElementById("header");
    var scroll_y = this.scrollY;
    if (scroll_y > 0) {
        header.classList.add("headerActive");
    }
    else {
        header.classList.remove("headerActive");
    }
};
window.addEventListener("scroll", changeNav);
const name_item = document.querySelectorAll('.name');
const search_item = document.getElementById('btnSearch');
const elementProfile = document.querySelectorAll('.profile');
const filterCheckBox = document.querySelectorAll('.checkBox');
const applyBtn = document.getElementById('ApplyBtn');
const nation_item = document.querySelectorAll('.nation')

applyBtn.addEventListener('click', function () {
    let count = 0;
    if(count==0){
        for (let z = 0; z < data.length; z++) {
            profile[z].style.display = 'block';
        }
    }
    for (let x = 0; x < filterCheckBox.length; x++) {
        if (filterCheckBox[x].checked == true) {
            for (let y = 0; y < data.length; y++) {
                if (filterCheckBox[x].value != data[y].dataLevel &&
                    filterCheckBox[x].value != data[y].dataFocusOn &&
                    filterCheckBox[x].value != data[y].dataMakeUp) {
                    count++;
                    profile[y].style.display = 'none';
                }
                else{
                    if(profile[y].style.display == 'block'){
                        profile[y].style.display = 'block';
                    }
                    else{
                        profile[y].style.display = 'none';
                    }
                }                
            }
        }
    }
    if(count==0){
        for (let z = 0; z < data.length; z++) {
            profile[z].style.display = 'block';
        }
    }
})
