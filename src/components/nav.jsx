import { getAuthData } from "../screens/register/utils";
import DropDown from "./dropdown";


const NavBarUserComponent = ({data}) => {

    const options = [
        {
            "label": "Profile",
        },
        {
            "label": "Account",
        },
        {
            "label": "LogOut",
        },
    ]


    return <DropDown label={data.user.username} options={options} />
}

const NotLoggedComponent = _ => {
    
    return <div className="flex items-center">
        <a href="/login" className="bg-blue-500 text-white p-2 rounded-md">Log In</a>
    </div>
}

const NavBar = _ => {

    const userData = getAuthData()

    return <nav className="w-full justify-between flex items-center font-bold ring-1 ring-inset ring-gray-200 sticky top-0 bg-white p-2">
        <div></div>
        <div className="flex">
            {
                userData?.user?.id ? <NavBarUserComponent data={userData} /> : <NotLoggedComponent />
            }
        </div>
    </nav>
}

export default NavBar