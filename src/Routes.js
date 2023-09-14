import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";

function AnimatedRoutes(){

    const location = useLocation

    return(
        <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404/>} />

            {/* Home Display */}
            <Route path="/" element={<Home/>} />
            <Route path="/casos" element={<Cases/>} />
            <Route path="/servicios" element={<Services/>} />
            <Route path="/nosotros" element={<About/>} />
            <Route path="/carreras" element={<Careers/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contacto" element={<Contact/>} />
        </Routes>
    )
}

export default AnimatedRoutes