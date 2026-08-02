import React from "react";
import Window from "./Window.jsx";
import { socials } from "#constants/index.js";

const Contact = () => {
    return (
        <Window appId="contact" title="Get in touch">
            <div className="bg-white p-8">
                <div className="text-center mb-8">
                    <img 
                        src="/images/logo.svg" 
                        alt="logo" 
                        className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3>Let's Connect</h3>
                    <p className="text-gray-500 mt-2">
                        Find me on these platforms or drop a message!
                    </p>
                </div>

                <ul className="flex-wrap justify-center">
                    {socials.map((social) => (
                        <li 
                            key={social.id} 
                            style={{ backgroundColor: social.bg }}
                        >
                            <a 
                                href={social.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-center"
                            >
                                <div className="bg-white/20 p-3 rounded-full mb-3">
                                    <img 
                                        src={social.icon} 
                                        alt={social.text} 
                                        className="w-8 h-8"
                                    />
                                </div>
                                <p>{social.text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Window>
    );
};

export default Contact;
