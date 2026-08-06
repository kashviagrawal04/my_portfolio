import React, { useState, useEffect, useRef } from "react";
import Window from "./Window.jsx";
import { Send, Bot, User, Sparkles } from "lucide-react";

const KashviGPT = () => {
    const [messages, setMessages] = useState([
        { id: 1, type: "bot", text: "Hi! I'm KashviGPT 🤖. I've been trained on Kashvi's resume, projects, and skills. Ask me anything about her!" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const getBotResponse = (question) => {
        const q = question.toLowerCase();
        
        if (q.includes("python") || q.includes("machine learning") || q.includes("ai")) {
            return "Kashvi is highly proficient in Python, PyTorch, and Scikit-learn! She built a Vision Transformer for Food Allergen Detection and engineered an AI-powered pedestrian risk platform (PathSense).";
        }
        if (q.includes("globe") || q.includes("internship") || q.includes("experience")) {
            return "At Globe Teleservices, Kashvi built a production-ready backend service with FastAPI, JWT/OAuth, and MySQL. She even integrated Google Gemini and Groq APIs with RAG pipelines!";
        }
        if (q.includes("project") || q.includes("marvin") || q.includes("pathsense")) {
            return "Her top projects include PathSense (a real-time Kafka/LightGBM risk intelligence system), a Vision Transformer for Food Allergens (90%+ accuracy), and Marvin (an Android Women Safety App with on-device voice triggers).";
        }
        if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
            return "Hello there! How can I help you learn more about Kashvi's amazing work?";
        }
        if (q.includes("hire") || q.includes("contact") || q.includes("email")) {
            return "You can reach Kashvi at kashviagrawal4@gmail.com! She is open to new opportunities and would love to chat.";
        }
        
        return "That's a great question! Kashvi is a B.Tech student in Data Science at VIT, passionate about building intelligent systems. You can check her 'About Me' or 'Projects' apps for more detailed info!";
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMsg = { id: Date.now(), type: "user", text: input };
        setMessages((prev) => [...prev, newMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate network delay for AI typing effect
        setTimeout(() => {
            const responseText = getBotResponse(newMsg.text);
            const botMsg = { id: Date.now() + 1, type: "bot", text: responseText };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <Window appId="kashvigpt" title="KashviGPT">
            <div className="flex flex-col h-full bg-[#1e1e1e] text-white font-sans overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-center p-4 border-b border-white/10 bg-black/20">
                    <Sparkles className="text-purple-400 mr-2" size={20} />
                    <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        KashviGPT AI
                    </h2>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`flex items-end max-w-[80%] ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === "user" ? "bg-blue-600 ml-2" : "bg-gradient-to-br from-purple-500 to-pink-500 mr-2"}`}>
                                    {msg.type === "user" ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`p-3 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                                    msg.type === "user" 
                                    ? "bg-blue-600 text-white rounded-br-none" 
                                    : "bg-white/10 backdrop-blur-md text-gray-100 rounded-bl-none border border-white/5"
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="flex items-end max-w-[80%] flex-row">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500 mr-2">
                                    <Bot size={16} />
                                </div>
                                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md rounded-bl-none border border-white/5 flex gap-1 items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-black/20 border-t border-white/10">
                    <form onSubmit={handleSend} className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask KashviGPT..."
                            className="w-full bg-white/5 border border-white/10 text-white rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder-gray-400"
                        />
                        <button 
                            type="submit" 
                            disabled={!input.trim() || isTyping}
                            className="absolute right-2 p-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 rounded-full transition-colors"
                        >
                            <Send size={16} className="text-white ml-0.5" />
                        </button>
                    </form>
                </div>
            </div>
        </Window>
    );
};

export default KashviGPT;
