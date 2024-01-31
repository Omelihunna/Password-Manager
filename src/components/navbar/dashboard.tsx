import {BsBell, BsSearch} from "react-icons/bs";
import Img from '../../assets/avatar.jpeg'

const DashboardNavbar = () => {
    return (
        <div className={"my-4"}>

            <div className={'flex justify-between flex-row'}>
                <div className={'flex'}>
                    <img className={'w-12 h-12 rounded-full mr-3 overflow-hidden'}
                         src={Img}/>
                    <div className={"flex flex-col"}>
                        <span>Welcome Back</span>
                        <span className={"font-bold text-lg"}>Innovin</span>
                    </div>
                </div>
                <div className={'flex my-auto space-x-3 flex-row'}>
                    <span className={'p-3 rounded-full bg-blue-300'}> <BsSearch/> </span>
                    <span className={'p-3 rounded-full bg-blue-300'}> <BsBell/> </span>
                </div>

            </div>
        </div>

    )
}

export default DashboardNavbar;