import React from "react";
// if you don't have path alias, use: import { navLinks } from "../constants";
import { navLinks,navIcons} from "#constants/index.js";
import dayjs from "dayjs";
const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Kashvi's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name }) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
            <ul>
                {navIcons.map(({ id, img }) => (
                    <li key={id}>
                        <img
                            src={img}
                            className="icon-hover"
                            alt={`icon-${id}`}
                        />
                    </li>
                ))}
            </ul>
            </div>
            <time>
                    {dayjs().format("ddd MMM D h:mm A")}
            </time>
        </nav>
    );
};

export default Navbar;
