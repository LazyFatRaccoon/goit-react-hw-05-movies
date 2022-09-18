import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom';
import {Div} from "../Wrappers/Wrappers"

const Layout = () => {
    return (
        
        <Div>
            <NavBar />
            <Outlet/>
        </Div>
        
    )
}

export default Layout;