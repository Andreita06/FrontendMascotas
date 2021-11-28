import { NotFound } from "http-errors"
import { Route, Routes } from "react-router"
import About from "../components/About"
import Dashboard from "../components/Dashboard"
import Home from "../pages/public/Home"

const UnauthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>

                {/* Not found */}
                    <Route path="*" element={<NotFound />} />
            </Routes>

        </>
    )
}

export default UnauthRouter;
