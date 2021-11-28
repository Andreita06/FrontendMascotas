import NotFound from "../components/NotFound"
import { Route, Routes } from "react-router"
import PetData from "../pages/private/PetData"
import Dashboard from "../components/Dashboard"

const AuthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="petdata" element={<PetData />} />
                </Route>


                {/* Not found */}
                <Route path="*" element={<NotFound />} />
            </Routes>

        </>
    )
}

export default AuthRouter;
