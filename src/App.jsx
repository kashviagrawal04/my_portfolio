import { WindowProvider } from "#context/WindowContext.jsx";
import {
    Navbar,
    Welcome,
    Dock,
    Finder,
    Safari,
    Photos,
    Terminal,
    Contact,
} from "#components/index.js";

const App = () => {
    return (
        <WindowProvider>
            <main>
                <Navbar />
                <Welcome />
                
                <Finder />
                <Safari />
                <Photos />
                <Terminal />
                <Contact />

                <Dock />
            </main>
        </WindowProvider>
    );
};
export default App;
