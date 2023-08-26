import LinkLayouts from "./layouts/LinkLayouts";
import AboutPage from "./pages/AboutPage";
import FactsPage from "./pages/FactsPage";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

const router = [
    {
        element: <LinkLayouts />,
        path: "/",
        children:[{
            element:<MainPage/>,
            index:true
        },
        {
            element:<AboutPage/>,
            path:"about"
        },
        {
            element: <FactsPage />,
            path:":factId"
        }]
    },
    {
        element: <ErrorPage />,
        path:"*"
    }
]

export default router