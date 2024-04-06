import { FcShop } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../Lib/Constant/navs'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="flex flex-col text-white bg-neutral-900 w-60 p-3">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcShop fontSize={24} />
                <span className="text-lg text-neutral-100">OpenShop</span>
            </div>
            <div className="flex-1 flex flex-col py-5 gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>
                ))}
            </div>
            <div>Bottom Part</div>
        </div>
    )
}

export default Sidebar

const classlinks = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const SidebarLink = ({item})=>{
  const {pathname} = useLocation()

  return(
  <Link to={item.path} className={classNames(pathname === item.path? 'bg-neutral-600 text-white': 'text-neutral-400',classlinks)} >
    <span>{item.icon}</span>
    {item.label}
  </Link>
  )}
