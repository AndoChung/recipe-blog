import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    const isAboveMediumScreens = useMediaQuery("(max-width: 1060px)")
    return(
        <nav className="py-6 border-b border-gray-300">
            <div className="w-4/5 flex justify-between mx-auto items-center">
                <img src={logo} alt="" className="h-20" />
                <div className="flex justify-between gap-12 font-rem">
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/about"}>ABOUT</Link>
                    <Link to={"/recipes"}>RECIPES</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;


                    