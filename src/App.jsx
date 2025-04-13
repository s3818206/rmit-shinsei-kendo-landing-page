{
    /*import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, RiktPage } from "./pages";

function App() {
    const [language, setLanguage] = useState("en");
    return (
        <>
            <Navbar language={language} setLanguage={setLanguage} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <HomePage language={language} />
                        </>
                    }
                />
                <Route
                    path="/rikt"
                    element={<RiktPage language={language} />}
                />
            </Routes>
        </>
    );
}

export default App;*/
}

import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, RiktPage } from "./pages";

function App() {
    const [language, setLanguage] = useState("en");
    return (
        <>
            <Navbar language={language} setLanguage={setLanguage} />
            <Routes>
                {/* Redirect "/" về "/rikt" */}
                <Route path="/" element={<Navigate to="/rikt" replace />} />

                {/* Trang Rikt chính thức */}
                <Route
                    path="/rikt"
                    element={<RiktPage language={language} />}
                    // element={<TestPage />}
                />

                {/* Nếu cần giữ HomePage để dùng sau thì có thể dùng đường dẫn khác */}
                <Route
                    path="/home"
                    element={<HomePage language={language} />}
                />
            </Routes>
        </>
    );
}

export default App;
