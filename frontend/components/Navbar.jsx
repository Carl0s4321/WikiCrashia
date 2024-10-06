import { Link } from "react-router-dom"
import { pageData } from "./pageData"
import tempLogo from '../assets/images/templogo.svg'

export function Navbar(){
    return(
        <div className="flex justify-around items-center">
            {pageData.map((page) => {
                return(
                    <Link to={page.path} key={page.path} calassName="navItem">
                        <button>
                            {page.name}
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}
