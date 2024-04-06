import { FcShop } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../Lib/Constant/navs'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="flex flex-col text-white bg-neutral-900 w-60 p-3">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcShop fontSize={24} />
                <span className="text-lg text-neutral-100">OpenShop</span>
            </div>
            <div className="flex-1">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>
                ))}
            </div>
            <div>Bottom Part</div>
        </div>
    )
}

export default Sidebar


const SidebarLink = ({item})=>(
  <Link to={item.path}>
    <span>{item.icon}</span>
    {item.label}
  </Link>
)