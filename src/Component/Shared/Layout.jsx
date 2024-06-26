import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {
    return (
        <div className="flex flex-row relative">
            <Sidebar/>
            <div className=' absolute left-[15%]'>
                <Header/>
                <div className='p-4 '>{<Outlet />}</div>
            </div>
        </div>
    )
}

export default Layout
