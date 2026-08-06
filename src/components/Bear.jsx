import React, { useState } from "react";
import Window from "./Window.jsx";
import { Github, Linkedin, ExternalLink, Mail, Code2, ShieldAlert } from "lucide-react";

const Bear = () => {
    const [activeTab, setActiveTab] = useState("profile");

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <div className="prose max-w-none text-gray-800">
                        <h1 className="text-3xl font-bold mb-4">About Me</h1>
                        <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                        <p className="mb-4">Hey there! 👋</p>
                        <p className="mb-4">
                            I'm a B.Tech student at the <span className="text-red-500">Computer Science and Engineering (Data Science)</span> department of <span className="text-red-500">Vellore Institute of Technology</span>.
                        </p>
                        <p className="mb-8">
                            🚀 Passionate about Data Science, Machine Learning, and building intelligent systems that solve real-world problems.
                        </p>

                        <h2 className="text-xl font-semibold mb-3">Experience</h2>
                        
                        <div className="mb-6">
                            <h3 className="font-bold text-lg">Intern @ Globe Teleservices Pte. Ltd.</h3>
                            <p className="text-sm text-gray-500 mb-2">May 2026 – Jun 2026</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Developed a production-ready backend service using <strong>FastAPI</strong>, JWT/OAuth, SQLAlchemy ORM, and MySQL.</li>
                                <li>Integrated <strong>Google Gemini</strong> and Groq APIs with Retrieval-Augmented Generation (RAG) pipelines.</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold text-lg">Trainee Data Science @ Magic Wand Labs</h3>
                            <p className="text-sm text-gray-500 mb-2">Jan 2026 – Mar 2026</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Built machine learning pipelines for data preprocessing and predictive modeling using Python and Scikit-learn.</li>
                                <li>Analyzed datasets and improved model performance through feature engineering.</li>
                            </ul>
                        </div>
                    </div>
                );
            case "projects":
                return (
                    <div className="prose max-w-none text-gray-800">
                        <h1 className="text-3xl font-bold mb-6">Projects</h1>
                        
                        <div className="mb-8 border-l-4 border-red-500 pl-4 bg-gray-50 p-4 rounded-r-lg">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <ShieldAlert size={20} className="text-red-500" />
                                PathSense – Pedestrian Risk Intelligence
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">LightGBM, Kafka, Redis, Kubernetes, WebSockets</p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li>Designed an AI-powered pedestrian safety platform for visually impaired users by engineering 20+ predictive features.</li>
                                <li>Engineered a distributed real-time inference pipeline using Kafka, delivering low-latency risk predictions.</li>
                            </ul>
                        </div>

                        <div className="mb-8 border-l-4 border-blue-500 pl-4 bg-gray-50 p-4 rounded-r-lg">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <Code2 size={20} className="text-blue-500" />
                                Food Allergen Detection System
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">Python, PyTorch, Vision Transformer (ViT), React</p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li>Fine-tuned a Vision Transformer on the Food-101 dataset achieving over 90% classification accuracy.</li>
                                <li>Developed an end-to-end ML pipeline with a React frontend for real-time prediction.</li>
                            </ul>
                        </div>

                        <div className="mb-8 border-l-4 border-green-500 pl-4 bg-gray-50 p-4 rounded-r-lg">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <ShieldAlert size={20} className="text-green-500" />
                                Marvin – AI-Powered Women Safety App
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">Java, Android, TensorFlow Lite</p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li>Developed an Android safety application with on-device voice-triggered SOS detection.</li>
                                <li>Implemented an intelligent contact-ranking algorithm for emergency SMS and live location sharing.</li>
                            </ul>
                        </div>
                    </div>
                );
            case "links":
                return (
                    <div className="prose max-w-none text-gray-800">
                        <h1 className="text-3xl font-bold mb-6">Contact & Links</h1>
                        <div className="flex flex-col gap-4">
                            <a href="https://github.com/kashviagrawal04" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-gray-800 no-underline border border-gray-200">
                                <Github size={24} />
                                <div>
                                    <p className="font-bold m-0 text-base">GitHub</p>
                                    <p className="text-sm text-gray-500 m-0">github.com/kashviagrawal04</p>
                                </div>
                                <ExternalLink size={16} className="ml-auto text-gray-400" />
                            </a>

                            <a href="https://www.linkedin.com/in/kashviagrawal0410/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-gray-800 no-underline border border-gray-200">
                                <Linkedin size={24} className="text-blue-600" />
                                <div>
                                    <p className="font-bold m-0 text-base">LinkedIn</p>
                                    <p className="text-sm text-gray-500 m-0">linkedin.com/in/kashviagrawal0410</p>
                                </div>
                                <ExternalLink size={16} className="ml-auto text-gray-400" />
                            </a>

                            <a href="mailto:kashviagrawal4@gmail.com" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-gray-800 no-underline border border-gray-200">
                                <Mail size={24} className="text-red-500" />
                                <div>
                                    <p className="font-bold m-0 text-base">Email</p>
                                    <p className="text-sm text-gray-500 m-0">kashviagrawal4@gmail.com</p>
                                </div>
                                <ExternalLink size={16} className="ml-auto text-gray-400" />
                            </a>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Window appId="bear">
            <div className="flex h-full font-sans bg-white">
                {/* Sidebar */}
                <div className="w-48 bg-[#63a0ba] text-gray-800 border-r border-gray-200 flex flex-col pt-4">
                    <div className="px-4 mb-4 flex gap-3 text-gray-600">
                        <svg className="w-5 h-5 cursor-pointer hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                        <svg className="w-5 h-5 cursor-pointer hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </div>

                    <ul className="flex-1 overflow-y-auto">
                        <li 
                            className={`px-4 py-2 flex items-center gap-3 cursor-default transition-colors ${activeTab === 'profile' ? 'bg-[#d84a44] text-white' : 'hover:bg-black/10'}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="font-medium">Profile</span>
                        </li>
                        <li 
                            className={`px-4 py-2 flex items-center gap-3 cursor-default transition-colors ${activeTab === 'projects' ? 'bg-[#d84a44] text-white' : 'hover:bg-black/10'}`}
                            onClick={() => setActiveTab('projects')}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <span className="font-medium">Projects</span>
                        </li>
                        <li 
                            className={`px-4 py-2 flex items-center gap-3 cursor-default transition-colors ${activeTab === 'links' ? 'bg-[#d84a44] text-white' : 'hover:bg-black/10'}`}
                            onClick={() => setActiveTab('links')}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span className="font-medium">Links</span>
                        </li>
                    </ul>
                </div>

                {/* Middlebar */}
                <div className="w-60 bg-gray-50 border-r border-gray-200 flex flex-col">
                    <ul className="flex-1 overflow-y-auto">
                        <li 
                            className={`p-4 border-l-4 cursor-default transition-colors border-b border-gray-200 ${activeTab === 'profile' ? 'border-[#d84a44] bg-white' : 'border-transparent hover:bg-white'}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <div className="flex gap-3 mb-1">
                                <svg className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="font-bold text-sm text-gray-900">About Me</span>
                            </div>
                            <p className="text-xs text-gray-500 ml-7 line-clamp-2">Hey there! I'm the one who is building his own universe...</p>
                        </li>

                        <li 
                            className={`p-4 border-l-4 cursor-default transition-colors border-b border-gray-200 ${activeTab === 'projects' ? 'border-[#d84a44] bg-white' : 'border-transparent hover:bg-white'}`}
                            onClick={() => setActiveTab('projects')}
                        >
                            <div className="flex gap-3 mb-1">
                                <svg className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <span className="font-bold text-sm text-gray-900">Projects</span>
                            </div>
                            <p className="text-xs text-gray-500 ml-7 line-clamp-2">PathSense, Food Allergen Detection System, and Marvin...</p>
                        </li>

                        <li 
                            className={`p-4 border-l-4 cursor-default transition-colors border-b border-gray-200 ${activeTab === 'links' ? 'border-[#d84a44] bg-white' : 'border-transparent hover:bg-white'}`}
                            onClick={() => setActiveTab('links')}
                        >
                            <div className="flex gap-3 mb-1">
                                <svg className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <span className="font-bold text-sm text-gray-900">Links</span>
                            </div>
                            <p className="text-xs text-gray-500 ml-7 line-clamp-2">GitHub and LinkedIn handles and contact email...</p>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white overflow-y-auto p-10 px-12">
                    {renderContent()}
                </div>
            </div>
        </Window>
    );
};

export default Bear;
