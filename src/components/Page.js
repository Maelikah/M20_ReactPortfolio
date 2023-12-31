import React from "react";
import PageContent from "./PageContent";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import { firstLetter } from "../utils/helpers";

function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
        case "about me":
            return <About />;
        case "portfolio":
            return <Portfolio />;
        case "contact":
            return <Contact />;
        case "resume":
            return <Resume />;
        default:
            return <About />;
        }
    };

    return (
        <section>
        <h2>{firstLetter(currentPage.name)}</h2>
        <br></br>
        <PageContent>{renderPage()}</PageContent>
        <br></br>
        </section>
    );
}
export default Page;