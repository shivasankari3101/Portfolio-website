const projects_data = [{
        id: 1,
        domain: "HTML",
        description: "HTML Projects include static pages designed elegantly maintaining the responsiveness using HTML and CSS. These projects will help you see my proficiency in web designing.",
        projects: [{
                id: 1,
                title: "Landing page",
                description: "A simple landing page sample for Pinterest.",
                image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
                tech: "HTML, CSS, AOS Library",
                url: "https://shivasankari3101.github.io/_Sample_/Pininterest_sample/landing_page",
                github_url: "https://github.com/shivasankari3101/_Sample_/tree/master/Pininterest_sample"
            },
            {
                id: 2,
                title: "Simple Homepage",
                description: "This is a simple demo of a minimalistic homepage design where I have used CSS framework - Bootstrap and had a great practice on how to use CSS frameworks in projects.",
                image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
                tech: "HTML, CSS, Bootstrap",
                url: "https://shivasankari3101.github.io/CODE-AWAY/Homepage/",
                github_url: "https://github.com/shivasankari3101/CODE-AWAY/tree/master/Homepage"
            }
        ]
    },
    {
        id: 2,
        domain: "Javascript",
        description: "Javascript is a programming language for the web using which we can add dynamic behaviour for the webpages. Have a look at the projects I have done using Javascript.",
        projects: [{
                id: 1,
                title: "To-do list",
                description: "It is a simple to-do list where users can add tasks, remove tasks and check the checkbox if a task is completed. As we manage the tasks, the list of completed and pending tasks will be displayed.",
                image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
                tech: "HTML, CSS, Bootstrap, Javascript, Jquery",
                url: "https://shivasankari3101.github.io/Js-projects/To_do_list/todo.html",
                github_url: "https://github.com/shivasankari3101/Js-projects/tree/master/To_do_list"
            },
            {
                id: 2,
                title: "Timer",
                description: "It is a simple timer where we can set the time and it will pop up an image after the given time. We can also stop the timer if needed. It is created using Javascript and Jquery.",
                image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
                tech: "HTML, CSS, Bootstrap, Javascript, Jquery",
                url: "https://shivasankari3101.github.io/Js-projects/To_do_list/todo.html",
                github_url: "https://github.com/shivasankari3101/Js-projects/tree/master/Timer"
            },
            {
                id: 3,
                title: "Old portfolio",
                description: "This is my old porfolio where I created a simple sidebar to navigate between the sections of the porfolio with an amazing UI.",
                image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
                tech: "HTML, CSS, Javascript, Jquery",
                url: "https://shivasankari3101.github.io/portfolio/portfolio.html",
                github_url: "https://github.com/shivasankari3101/portfolio"
            },
            {
                id: 4,
                title: "Multiscroll",
                description: "This is a simple demo on how to create a multiscroll portfolio website without using any library and framework. This is created using HTML, CSS and Javascript.(Multiscroll only for desktop)",
                image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
                tech: "HTML, CSS, Bootstrap,Javascript",
                url: "https://shivasankari3101.github.io/CODE-AWAY/Multiscroll/",
                github_url: "https://github.com/shivasankari3101/CODE-AWAY/tree/master/Multiscroll"
            }

        ]
    },
    {
        id: 3,
        domain: "ReactJs",
        description: "ReactJS is an amazing Javascript library for creating UI. I am beginner-level ReactJS developer and I m so excited to explore it more to reach my excellence in this skill. Have a look at my projects to understand where I am in my progress of learning.",
        projects: [{
                id: 1,
                title: "Portfolio",
                description: "I created my portfolio again to explore more in ReactJS. I feel this portfolio can be the best example for my skill in ReactJS.",
                image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
                tech: "HTML,CSS,ReactJS,React-Bootstrap,GSAP",
                url: "https://shiva-sankari-portfolio.herokuapp.com/",
                github_url: "https://github.com/shivasankari3101/Porfolio-website"
            },
            {
                id: 2,
                title: "Movies App",
                description: "This is a simple Movies app created using ReactJS and movies API.",
                image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
                tech: "HTML,CSS,ReactJS,React-Bootstrap,GSAP",
                url: "https://suspicious-easley-093f12.netlify.app/",
                github_url: "https://github.com/shivasankari3101/Movies_app"
            },
        ]
    }
]

export function getprojects() {
    return projects_data;
}

export function getProjectData(domain) {
    return projects_data.find(
        project => project.domain === domain
    );
}