import React, { useState } from "react";
import Project from "./Project";

function Portfolio() {

    const [projects] = useState([
        {
            name: "Study-Guide",
            description: "Coding Concepts Study",
            link: "https://maelikah.github.io/prework-study-guide/",
            repo: "https://github.com/Maelikah/prework-study-guide",
            
        },
        {
            name: "Code-Refactoring",
            description: "Applying HTML best practices",
            link: "https://maelikah.github.io/M1_Refactoring/",
            repo: "https://github.com/Maelikah/M1_Refactoring",
        },
        {
            name: "Coding-Portfolio",
            description: "Basic HTML & CSS portfolio",
            link: "https://maelikah.github.io/M2_Portfolio/",
            repo: "https://github.com/Maelikah/M2_Portfolio",
        },
        {
            name: "Password-Generator",
            description: "Password is generated based on input conditions",
            link: "https://maelikah.github.io/M3_PasswordGenerator/",
            repo: "https://github.com/Maelikah/M3_PasswordGenerator",
        },
        {
            name: "Javascript-Quiz",
            description: "JavaScript quiz that stores data within local storage ",
            link: "https://maelikah.github.io/M4_JavaScriptFundamentalsQuiz/",
            repo: "https://github.com/Maelikah/M4_JavaScriptFundamentalsQuiz",
        },
        {
            name: "Workday-Scheduler",
            description: "Javascript scheduler that shows current date and color coded time",
            link: "https://maelikah.github.io/M5_WorkdayScheduler/",
            repo: "https://github.com/Maelikah/M5_WorkdayScheduler",
        },
        {
            name: "Weather-Dashboard",
            description: "Javascript Weather dashboard ",
            link: "https://maelikah.github.io/M6_WeatherDashboard/",
            repo: "https://github.com/Maelikah/M6_WeatherDashboard",
        },
        {
            name: "Meal-PreApp",
            description: "Recipe Search web app",
            link: "https://maelikah.github.io/P1_MealPreApp/",
            repo: "https://github.com/Maelikah/P1_MealPreApp",
        },
        {
            name: "Professional-Readme",
            description: "README file generator",
            link: "https://github.com/Maelikah/M9_ProfessionalReadMe",
            repo: "https://github.com/Maelikah/M9_ProfessionalReadMe",
        },
        {
            name: "SVG-Logo-Maker",
            description: "SVG Logo creation based on user prompt for shape, text and colors",
            link: "https://github.com/Maelikah/M10_SVGLogoMaker",
            repo: "https://github.com/Maelikah/M10_SVGLogoMaker",
        },
        {
            name: "Note-Taker",
            description: "Application used to write and save notes ",
            link: "https://peaceful-citadel-34736.herokuapp.com/",
            repo: "https://github.com/Maelikah/M11_NoteTaker",
        },
        {
            name: "Employee-Tracker",
            description: "Command Line app to update database tables ",
            link: "https://github.com/Maelikah/M12_EmployeeTracker",
            repo: "https://github.com/Maelikah/M12_EmployeeTracker",
        },
        {
            name: "ECommerce-Backend",
            description: "Backend logic and routes construction for an app",
            link: "https://github.com/Maelikah/M13_ECommerceBackend",
            repo: "https://github.com/Maelikah/M13_ECommerceBackend",
        },
        {
            name: "MVC-Tech-Blog",
            description: "Blog that allows to sign in, create, update and delete blog posts",
            link: "https://mighty-lake-87878-5a33997e292c.herokuapp.com/",
            repo: "https://github.com/Maelikah/M14_MVCTechBlog",
        },
        {
            name: "Forever-Paws",
            description: "Pet adoption portal",
            link: "https://github.com/Maelikah/P2_ForeverPaws",
            repo: "https://github.com/Maelikah/P2_ForeverPaws",
        },
        {
            name: "REGEX-Tutorial",
            description: "A REGEX tutorial for Password Validation ",
            link: "https://gist.github.com/Maelikah/35cb04a09ba756eb8a63d6eed7595895",
            repo: "https://gist.github.com/Maelikah/35cb04a09ba756eb8a63d6eed7595895",
        },
        {
            name: "SN-API",
            description: "API for a social network web application",
            link: "https://github.com/Maelikah/M18_SocialNetworkAPI",
            repo: "https://github.com/Maelikah/M18_SocialNetworkAPI",
        },
        {
            name: "PWA-Text-Editor",
            description: "Text editor that runs in the browser",
            link: "https://guarded-gorge-47076-21f34308c618.herokuapp.com/",
            repo: "https://github.com/Maelikah/M19_PWATextEditor",
        },
        {
            name: "Book-Search-Engine",
            description: "Refactoring a search engine from RESTful API to GraphQL API",
            link: "https://github.com/Maelikah/M21_BookSearchEngine",
            repo: "https://github.com/Maelikah/M21_BookSearchEngine",
        },
        {
            name: "Redux-Store",
            description: "Refactoring e-commerce platform so it uses Redux",
            link: "https://github.com/Maelikah/M22_ReduxStore",
            repo: "https://github.com/Maelikah/M22_ReduxStore",
        },
        {
            name: "Future-Project",
            description: "We dont know what the future awaits...🤪",
            link: "https://github.com/Maelikah/",
            repo: "https://github.com/Maelikah/",
        },
        

    ]);

    return (
        <div>
        <div className="flex-row">
            {projects.map((project, idx) => (
            <Project project={project} key={"project" + idx} />
            ))}
        </div>
        </div>
    );
}

export default Portfolio;