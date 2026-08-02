import React from "react";
import Window from "./Window.jsx";
import { techStack } from "#constants/index.js";
import { Terminal as TerminalIcon, Check } from "lucide-react";

const Terminal = () => {
    return (
        <Window appId="terminal" title="kashvi -- -zsh -- 80x24">
            <div className="bg-white h-[400px] overflow-y-auto">
                <div className="techstack">
                    <p>Last login: {new Date().toDateString()} on ttys000</p>
                    
                    <div className="label">
                        <TerminalIcon size={16} className="text-[#00A154] mr-2" />
                        <span className="text-[#00A154] font-semibold">kashvi@macbook ~ %</span>
                        <span className="ml-2 text-gray-800">cat skills.json</span>
                    </div>

                    <ul className="content">
                        {techStack.map((stack, index) => (
                            <li key={index} className="flex">
                                <Check className="check" size={16} />
                                <h3>"{stack.category}":</h3>
                                <ul className="flex-1 flex-wrap">
                                    {stack.items.map((item, i) => (
                                        <li key={i} className="text-gray-600">
                                            "{item}"{i < stack.items.length - 1 ? "," : ""}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                    <div className="footnote">
                        <p>
                            <TerminalIcon size={16} />
                            <span>kashvi@macbook ~ %</span>
                        </p>
                    </div>
                </div>
            </div>
        </Window>
    );
};

export default Terminal;
