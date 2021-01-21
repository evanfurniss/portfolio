let portfolioExamples = [
    {
        src: "assets/images/first.png",
        header: "Workday Planner",
        description: "A work day planner that updates the present hour. Using color variation, hourly textboxes to enter time sensitive information, and storing user information locally, this daily planner helps you keep track of your busy day. Created using JQuery, JavaScript, HTML, and CSS, this work day planner is simple and efficient."
    },
    {
        src: "assets/images/base.png",
        header: "Random Password Generator",
        description: ""
    },
    {
        src: "assets/images/img2.png",
        header: "Weather App",
        description: ""
    }
]

onLoad();

function onLoad() {
    createPortfolioImage();
}

function createPortfolioImage () {
    for (let i = 0; i < portfolioExamples.length; i++){
        let head = $("<h1>").text(portfolioExamples[i].header).attr("class", "subtitle");
        let image = $("<img>").attr({
            class: "image is-480x480",
            src: portfolioExamples[i].src
        });
        let description = $("<p>").text(portfolioExamples[i].description).attr("class", "is-medium");

        $("#landingPad").append(head, image, description);
        if (i != portfolioExamples.length) {
            let br = $("<br>");
            $("#landingPad").append(br);
        }
    }
};