import { Suspense } from "react"
import { routeConfig } from "shared/config/routeConfig/routeConfig"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({element, path}) => {
                        return <Route
                        element={element}
                        key={path}
                        path={path}
                        />
                    })
                }
            </Routes>
        </Suspense>
    )
}

export default AppRouter;