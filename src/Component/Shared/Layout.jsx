import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <div className='bg-sky-100'>Sidebar</div>
        <div className='bg-teal-200'>Header</div>
        <div>{<Outlet/>}</div>
        <div>Footer</div>
    </div>
  )
}

export default Layout