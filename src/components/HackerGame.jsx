import React, { useEffect, useRef, useState } from "react";
import { useWindowContext } from "#context/WindowContext.jsx";
import { Unlock, Lock } from "lucide-react";

const HackerGame = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const { setIsHacked } = useWindowContext();
    const [input, setInput] = useState("");
    const [solved, setSolved] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: columns }).fill(1);
        
        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "#0F0"; // Hacker green
            ctx.font = `${fontSize}px monospace`;
            
            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        
        const interval = setInterval(draw, 33);
        
        const handleResize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        
        window.addEventListener("resize", handleResize);
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.toLowerCase().trim() === "keyboard") {
            setSolved(true);
            setIsHacked(true);
            setTimeout(() => {
                onComplete();
                window.open('/files/KashviAgrawal_Resume.pdf', '_blank');
            }, 2500);
        } else {
            setError(true);
            setTimeout(() => setError(false), 1000);
            setInput("");
        }
    };

    return (
        <div className="relative w-full h-[400px] bg-black overflow-hidden flex flex-col font-mono text-[#0F0]">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
                {!solved ? (
                    <>
                        <div className="space-y-2 bg-black/60 p-6 rounded border border-[#0F0]/30 backdrop-blur-sm">
                            <Lock className="mx-auto text-red-500 mb-4 animate-pulse" size={32} />
                            <h2 className="text-xl font-bold tracking-widest text-red-500 mb-2">SYSTEM SECURED</h2>
                            <p className="text-sm opacity-90 max-w-md text-white">
                                To bypass the firewall and unlock the Resume, answer this tech riddle:
                            </p>
                            <p className="text-lg font-semibold my-4">"I have keys but no locks, space but no room. What am I? (Hint: The answer is 'keyboard')"</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="w-full max-w-sm flex gap-2">
                            <span className="text-[#0F0] font-bold text-xl leading-10">{">"}</span>
                            <input 
                                autoFocus
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className={`flex-1 bg-black/50 border-b-2 outline-none text-[#0F0] text-lg px-2 py-1 uppercase tracking-widest transition-colors ${error ? 'border-red-500 text-red-500' : 'border-[#0F0]/50 focus:border-[#0F0]'}`}
                                placeholder="ENTER ANSWER..."
                            />
                        </form>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in duration-500">
                        <Unlock className="text-[#0F0] mb-4" size={48} />
                        <h2 className="text-3xl font-bold tracking-widest">ACCESS GRANTED</h2>
                        <p className="text-white opacity-80 animate-pulse mt-2">Opening Resume...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HackerGame;
