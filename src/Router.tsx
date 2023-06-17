import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PlayerPage from "components/pages/PlayerPage";
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'));

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PlayerPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Router;