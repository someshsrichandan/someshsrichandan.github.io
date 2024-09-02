import { Animator, BleepsProvider } from '@arwes/react'
import { AnimatorGeneralProvider } from '@arwes/react'
import { soundSettings, stylesBaseline, theme } from './utlis/settings'
import { Global } from '@emotion/react'
import {
    RouterProvider,
    createBrowserRouter,
    createHashRouter,
} from 'react-router-dom'

import HomePage from './pages/home'
import ProjectPage from './pages/projects'
import ResumePage from './pages/resume'

import Background from './components/background'
import Lighter from './components/illuminator'

const isProd = import.meta.env.PROD

const routeItem = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/projects',
        element: <ProjectPage />,
    },
    {
        path: '/about',
        element: <ResumePage />,
    },
]

const routes = isProd
    ? createHashRouter(routeItem)
    : createBrowserRouter(routeItem)

const App = () => (
    <>
        <Global
            styles={{
                ...stylesBaseline,
                'a:hover': { color: 'hsla(180,75%,50%,1)' },
                '.underline:hover': { color: 'hsla(180,75%,50%,1)' },
                '.underline': { color: 'hsla(180,50%,90%,1)' },
            }}
        />
        <AnimatorGeneralProvider duration={{ enter: 1, exit: 1, stagger: 0.2 }}>
            <BleepsProvider {...soundSettings}>
                <Animator active={true} combine manager="stagger">
                    <Background />

                    <Lighter />

                    <div className="relative z-[99]">
                        <RouterProvider router={routes} />
                    </div> 
                </Animator>
            </BleepsProvider>
        </AnimatorGeneralProvider>
    </>
)

export default App
