import { FunctionComponent } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"
import Home from "../pages/home"
import Projects from "../pages/projects"
import ColorPaletteGenerator from "../pages/projects/colorPaletteGenerator"


const AppRouter: FunctionComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/color-palette-generator",
      element: <ColorPaletteGenerator />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default AppRouter
