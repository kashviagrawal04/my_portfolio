import React from "react";
import Window from "./Window.jsx";
import { Star, Download, Search } from "lucide-react";

const projects = [
    { id: 1, name: "Marvin - Women Safety App", desc: "A comprehensive safety solution for women.", logo: "/images/folder.png", href: "#" },
    { id: 2, name: "Realtime Code Editor", desc: "Collaborative code editing in real-time.", logo: "/images/folder.png", href: "#" },
    { id: 3, name: "Notion-AI-Clone", desc: "AI-powered workspace and note taking.", logo: "/images/folder.png", href: "#" },
    { id: 4, name: "Wandering Tales", desc: "Interactive storytelling platform.", logo: "/images/folder.png", href: "#" }
];

const AppStore = () => {
    return (
        <Window appId="appstore" title="App Store" width={800} height={500}>
            <div className="flex flex-col bg-white h-full select-none text-gray-800 font-sans">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h2 className="text-2xl font-bold">Discover</h2>
                    <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1 w-64 shadow-sm">
                        <Search size={16} className="text-gray-400 mr-2" />
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="bg-transparent outline-none text-sm w-full"
                            disabled
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Must-Have Developer Tools</h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-blue-50 border border-blue-100 p-2 flex items-center justify-center">
                                    <img src={project.logo} alt={project.name} className="w-full h-full object-contain drop-shadow" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg">{project.name}</h4>
                                    <p className="text-xs text-gray-500 mb-1 line-clamp-1">{project.desc}</p>
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={12} className="fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                    <a 
                                        href={project.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-100 transition-colors"
                                    >
                                        <Download size={14} />
                                        GET
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 bg-blue-600 rounded-xl p-6 text-white shadow-lg flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-1">More Apps Coming Soon!</h3>
                            <p className="opacity-80 text-sm">Stay tuned for future releases.</p>
                        </div>
                        <img src="/images/apple-logo.png" className="w-16 h-16 object-contain invert opacity-50" />
                    </div>
                </div>
            </div>
        </Window>
    );
};

export default AppStore;
