let portfolioExamples = [
    {
        src: "assets/images/drumKit.gif",
        header: "Desktop Drum Kit",
        description: "Enjoy creating drum patterns from the Roland TR-909 drum machine in a desktop. A desktop drum kit that uses a computer keyboard. Feel inspired by searching for a song that pulls up the lyrics of the song and a gif with a related search name.",
        href: "https://willheyer.github.io/DrumKitProject/"
    },
    {
        src: "assets/images/first.png",
        header: "Workday Planner",
        description: "A work day planner that updates the present hour. Using color variation, hourly textboxes to enter time sensitive information, and storing user information locally, this daily planner helps you keep track of your busy day. Created using JQuery, JavaScript, HTML, and CSS, this work day planner is simple and efficient.",
        href: "https://evanfurniss.github.io/day-planner/"
    },
    {
        src: "assets/images/base.png",
        header: "Random Password Generator",
        description: "The random password generator creates a random string of characters; lowercase letters, uppercase letters, numbers, and symbols. The user is able to choose which characters they would like to use, how many characters they would like it to be, and will correct you if you are outside the parameters set in place. I hope will check out my password generator below!",
        href: "https://evanfurniss.github.io/password-generator/"
    },
    {
        src: "assets/images/img2.png",
        header: "Weather App",
        description: "This dynamically created weather app allows the user to search for a city in the world and display the current weather and a five day forecast. The users past searches will remain so long as the local storage is not clear. Using JavaScript, JQuery, and Bootstrap, the weather app allows users to scope out their future outings.",
        href: "https://evanfurniss.github.io/weather-app/"
    },
    {
        src: "assets/images/example.gif",
        header: "Quiz Game",
        description: "Created using JavaScript DOM, this quiz creates a dynamically created HTML page. The quiz uses the createElement, append, and prepend. The quiz asks the user to test their knowledge of the video game Halo: Combat Evolved. I hope you try it out below!",
        href: "https://evanfurniss.github.io/code-quiz/"
    }
]

onLoad();

function onLoad() {
    if ($("#home").hasClass("is-active")) {
        createPortfolioImage();
    }
    else if ($("#about").hasClass("is-active")){
        aboutMe();
    }
    else if ($("#contact").hasClass("is-active")){
        contactPage();
    }
}

function createPortfolioImage () {
    $("#landingPad").empty();
    $("#sectionTitle").empty();

    let title = "Portfolio";
    $("#sectionTitle").append(title);
    for (let i = 0; i < portfolioExamples.length; i++){
        let div = $("<div>").attr({
            class: "container"
        })
        let head = $("<h1>").text(portfolioExamples[i].header).attr("class", "title");
        let image = $("<img>").attr({
            class: "image",
            src: portfolioExamples[i].src
        });
        let description = $("<p>").text(portfolioExamples[i].description).attr("class", "is-medium");
        let link = $("<a>").text(portfolioExamples[i].href).attr({
            href: portfolioExamples[i].href,
            target: "_blank"
        })
        let br = $("<br>");

        div.append(head, image, description, link);

        $("#landingPad").append(div);
        if (i != portfolioExamples.length) {
            let br = $("<br>");
            $("#landingPad").append(br);
        }
    }
};

function aboutMe() {
    $("#landingPad").empty();
    $("#sectionTitle").empty();
    let title = "About"
    $("#sectionTitle").append(title);
    
    let div = $("<div>").attr("class", "image is-128x128");
    let img = $("<img>").attr({
        class: "image",
        src: "assets/images/evan.jpg"
    })
    let br = $("<br>")
    div.append(img);
    let aboutMe = $("<p>").text("My name is Evan Furniss and I have worn many hats in my short career. Graduating from the University of Minnesota with my M.Ed., I was a substitute elementary school teacher for 2 years. I also worked as an educator at the Como Zoo, teaching classes as they came to visit the zoo. It was during my time at the zoo that I was offered a position to teach music for St. Peter Claver and St. John Paul II schools. My time spent was split between the schools, teaching two unique student bodies the fundamentals of music using modern music software. However, I realized that this style of education was not working for me and I decided to pivot career paths. During the beginning of the pandemic made me really consider my next career path, when I heard about the Trilogy bootcamp hosted through the University of Minnesota. Since then, I have learned the fundamentals of Java and begun the difficult task of learning front-end and back-end program development. Although I am early on my path I am confident in my ability to learn new material, work with a unique group of classmates, and tackle many big ideas in a short amount of time.");
    $("#landingPad").append(div, br, aboutMe);
}

function contactPage() {
    $("#landingPad").empty();
    $("#sectionTitle").empty();

    let title = "Contact";
    $("#sectionTitle").append(title);
}

$(".navbar-item").on("click", function(e){
    e.preventDefault();
    let id = e.target.id;
    if(id == "takeMeHome"){
        id = "home"
    }

    if (id == "home") {
        $("#contact").attr("class", "navbar-item");
        $("#about").attr("class", "navbar-item");
    }
    else if (id == "contact") {
        $("#home").attr("class", "navbar-item");
        $("#about").attr("class", "navbar-item");
    }
    else if (id == "about") {
        $("#home").attr("class", "navbar-item");
        $("#contact").attr("class", "navbar-item");
    }

    if ($(`#${id}`).hasClass("is-active")) {
        return;
    }
    else{
        $(`#${id}`).attr("class", "navbar-item is-active");
    }

    onLoad();
})