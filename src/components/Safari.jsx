import React from "react";
import Window from "./Window.jsx";
import { blogPosts } from "#constants/index.js";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const Safari = () => {
    return (
        <Window appId="safari">
            {/* Safari specific toolbar */}
            <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 border-b border-gray-200">
                <div className="flex items-center gap-2 text-gray-400">
                    <ChevronLeft size={20} className="hover:text-gray-600 cursor-pointer" />
                    <ChevronRight size={20} className="hover:text-gray-600 cursor-pointer" />
                </div>
                <div className="search flex-1 mx-auto max-w-xl flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-3 py-1">
                    <Search size={16} className="text-gray-400" />
                    <input
                        type="text"
                        className="w-full bg-transparent text-center text-sm font-medium outline-none"
                        defaultValue="github.com/kashviagrawal04"
                        readOnly
                    />
                </div>
            </div>

            {/* Content */}
            <div className="h-[500px] overflow-y-auto bg-white">
                <div className="blog">
                    <h2>Latest Articles</h2>
                    
                    <div className="space-y-8">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="blog-post">
                                <div className="col-span-2">
                                    <img src={post.image} alt={post.title} />
                                </div>
                                <div className="content">
                                    <p>{post.date}</p>
                                    <h3>{post.title}</h3>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                                        Read Article
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Window>
    );
};

export default Safari;
