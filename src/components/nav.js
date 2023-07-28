import React, { useEffect } from "react";
import { firstLetter } from "../utils/helpers";

function Nav(props) {
    const { pages = [], setCurrentPage, currentPage } = props;

    useEffect(() => {
        document.title = firstLetter(currentPage.name);
    }, [currentPage]
    );

    return (
        <nav>
        <ul className="flex-row">
            {pages.map((Page) => (
            <li
                className={`mx-5 ${currentPage.name === Page.name && "navActive"}`}
                key={Page.name}
            >
                <span onClick={() => setCurrentPage(Page)}>
                {firstLetter(Page.name)}
                </span>
            </li>
            ))}
        </ul>
        </nav>
    );
}

export default Nav;