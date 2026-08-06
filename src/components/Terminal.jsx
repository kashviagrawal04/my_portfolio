import React, { useState, useRef, useEffect } from "react";
import Window from "./Window.jsx";
import { techStack } from "#constants/index.js";
import { Terminal as TerminalIcon, Check } from "lucide-react";
import HackerGame from "./HackerGame.jsx";

const Terminal = () => {
    const [history, setHistory] = useState([]);
    const [input, setInput] = useState("");
    const [isHacking, setIsHacking] = useState(false);
    const endRef = useRef(null);

    const scrollToBottom = () => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history, isHacking]);

    const handleCommand = (e) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        
        if (!cmd) return;

        const newEntry = { command: input, output: null };

        if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        } else if (cmd === "sudo hack") {
            setIsHacking(true);
            setInput("");
            return;
        } else if (cmd === "ls" || cmd === "help") {
            newEntry.output = "Available commands: clear, help, ls, sudo hack";
        } else if (cmd === "cat skills.json") {
            newEntry.output = "Skills are already displayed above.";
        } else {
            newEntry.output = `zsh: command not found: ${input}`;
        }

        setHistory(prev => [...prev, newEntry]);
        setInput("");
    };

    return (
        <Window appId="terminal" title="kashvi -- -zsh -- 80x24">
            {isHacking ? (
                <HackerGame onComplete={() => setIsHacking(false)} />
            ) : (
                <div className="bg-white h-[400px] overflow-y-auto cursor-text" onClick={() => document.getElementById('term-input')?.focus()}>
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

                        {history.map((entry, i) => (
                            <div key={i} className="mt-2 text-sm font-roboto px-5">
                                <div className="flex items-center">
                                    <TerminalIcon size={16} className="text-[#00A154] mr-2" />
                                    <span className="text-[#00A154] font-semibold mr-2">kashvi@macbook ~ %</span>
                                    <span className="text-gray-800">{entry.command}</span>
                                </div>
                                {entry.output && (
                                    <div className="text-gray-600 mt-1 mb-3 whitespace-pre-wrap">{entry.output}</div>
                                )}
                            </div>
                        ))}

                        <div className="flex items-center text-sm font-roboto px-5 mt-2">
                            <TerminalIcon size={16} className="text-[#00A154] mr-2" />
                            <span className="text-[#00A154] font-semibold mr-2 flex-shrink-0">kashvi@macbook ~ %</span>
                            <form onSubmit={handleCommand} className="flex-1">
                                <input
                                    id="term-input"
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="w-full bg-transparent outline-none text-gray-800 caret-black"
                                    autoFocus
                                    autoComplete="off"
                                />
                            </form>
                        </div>
                        <div ref={endRef} className="h-4" />
                    </div>
                </div>
            )}
        </Window>
    );
};

export default Terminal;
