import { Outlet } from 'react-router-dom'
import { Navbar } from '../../ui/components'

export const HeroesLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}
