/* =====================================
   CAREERLAUNCH JAVASCRIPT
===================================== */


/* =====================================
   PAGE NAVIGATION
===================================== */

function showPage(pageId, clickedButton) {

    // Hide every page
    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active-page");

    });


    // Show selected page
    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    // Remove active from sidebar buttons
    const menuItems =
        document.querySelectorAll(".menu-item");

    menuItems.forEach(function(item) {

        item.classList.remove("active");

    });


    // Add active to clicked button
    if (clickedButton) {

        clickedButton.classList.add("active");

    }

}


/* =====================================
   CAREER DATA
===================================== */

const careers = [

    {
        name: "Software Engineer",

        description:
        "Build applications, websites and software systems.",

        skills:
        "JavaScript, React, Node.js, SQL"
    },


    {
        name: "Data Scientist",

        description:
        "Analyze data and create intelligent solutions.",

        skills:
        "Python, SQL, Statistics, Machine Learning"
    },


    {
        name: "AI / ML Engineer",

        description:
        "Build intelligent systems using AI and machine learning.",

        skills:
        "Python, Machine Learning, Deep Learning"
    },


    {
        name: "Frontend Developer",

        description:
        "Create beautiful and interactive web applications.",

        skills:
        "HTML, CSS, JavaScript, React"
    },


    {
        name: "Cyber Security Analyst",

        description:
        "Protect applications, networks and organizations.",

        skills:
        "Networking, Linux, Security"
    },


    {
        name: "Cloud Engineer",

        description:
        "Design and manage scalable cloud infrastructure.",

        skills:
        "AWS, Azure, Docker, Kubernetes"
    }

];


/* =====================================
   DISPLAY CAREERS
===================================== */

function displayCareers(list) {

    const container =
        document.getElementById("careerContainer");


    container.innerHTML = "";


    list.forEach(function(career) {

        const card =
            document.createElement("div");


        card.className =
            "career-card";


        card.innerHTML = `

            <h2>${career.name}</h2>

            <p>
                ${career.description}
            </p>

            <p>
                <strong>Skills:</strong>
                ${career.skills}
            </p>

            <button
                onclick="alert('Career selected: ${career.name}')"
            >
                Explore Career
            </button>

        `;


        container.appendChild(card);

    });

}


/* Display careers when page loads */

displayCareers(careers);


/* =====================================
   CAREER SEARCH
===================================== */

function searchCareers() {

    const search =
        document
        .getElementById("careerSearch")
        .value
        .toLowerCase();


    const filtered =
        careers.filter(function(career) {

            return career.name
                .toLowerCase()
                .includes(search);

        });


    displayCareers(filtered);

}


/* =====================================
   SKILL ASSESSMENT
===================================== */

const skillInputs = [

    "python",

    "javascript",

    "sql",

    "htmlcss"

];


skillInputs.forEach(function(skill) {

    const input =
        document.getElementById(skill);


    const output =
        document.getElementById(
            skill + "Value"
        );


    input.addEventListener(
        "input",
        function() {

            output.textContent =
                input.value;

        }
    );

});


/* Calculate Skill Score */

function calculateScore() {

    const python =
        Number(
            document.getElementById("python").value
        );


    const javascript =
        Number(
            document
            .getElementById("javascript")
            .value
        );


    const sql =
        Number(
            document.getElementById("sql").value
        );


    const htmlcss =
        Number(
            document
            .getElementById("htmlcss")
            .value
        );


    const total =
        python +
        javascript +
        sql +
        htmlcss;


    const score =
        Math.round(total / 4);


    document.getElementById(
        "scoreResult"
    ).innerHTML =

        `Your CareerLaunch Skill Score: ${score}% 🎯`;

}


/* =====================================
   RESUME BUILDER
===================================== */

function generateResume() {

    const name =
        document
        .getElementById("resumeName")
        .value;


    const email =
        document
        .getElementById("resumeEmail")
        .value;


    const skills =
        document
        .getElementById("resumeSkills")
        .value;


    const about =
        document
        .getElementById("resumeAbout")
        .value;


    if (
        name === "" ||
        email === ""
    ) {

        alert(
            "Please enter your name and email."
        );

        return;

    }


    document.getElementById(
        "resumePreview"
    ).innerHTML = `

        <h1>${name}</h1>

        <p>
            📧 ${email}
        </p>

        <hr>

        <h2>About Me</h2>

        <p>
            ${about}
        </p>

        <h2>Skills</h2>

        <p>
            ${skills}
        </p>

        <h2>Career Goal</h2>

        <p>
            Software Engineer
        </p>

    `;

}


/* =====================================
   GLOBAL SEARCH
===================================== */

document
.getElementById("globalSearch")
.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            const value =
                this.value.toLowerCase();


            if (
                value.includes("career") ||
                value.includes("software") ||
                value.includes("data") ||
                value.includes("ai")
            ) {

                showPage("careers");

                document
                .getElementById("careerSearch")
                .value = value;

                searchCareers();

            }


            else if (
                value.includes("skill")
            ) {

                showPage("assessment");

            }


            else if (
                value.includes("job")
            ) {

                showPage("jobs");

            }


            else if (
                value.includes("intern")
            ) {

                showPage("internships");

            }


            else {

                alert(
                    "Try searching for careers, skills, jobs or internships."
                );

            }

        }

    }
);