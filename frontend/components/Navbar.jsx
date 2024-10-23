import { Link } from "react-router-dom"
import { pageData } from "./pageData"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"

function getStyles(page) {
  if (page == "Home") {
    return {
      fill: 'rgb(214, 240, 255)',
      stroke: 'rgb(77, 166, 255)'
    };
  } else if (page == "Profile") {
    return {
      fill: 'rgb(246, 217, 255)',
      stroke: 'rgb(185, 77, 221)'
    };
  } else if (page == "Feeds") {
    return {
      fill: 'rgb(255, 236, 214)',
      stroke: 'rgb(255, 145, 77)'
    };
  } else if ("Normal") {
    return {
      fill: 'transparent',
      stroke: 'black'
    };
  }
}


// Got these svgs from flowbite and svgrepo
const LogoutIcon = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path d="M4.707 12l3.147 3.146a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L4.707 11H15.5a.5.5 0 110 1H4.707zM10.5 4a.5.5 0 110-1h8A2.5 2.5 0 0121 5.5v13a2.5 2.5 0 01-2.5 2.5h-8a.5.5 0 110-1h8a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0018.5 4h-8z"></path>
    </svg>
  )
}

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  function handleLogout() {
    sessionStorage.removeItem("User")
    delete axios.defaults.headers.common["Authorization"];
    navigate("/")
  }

  return (
    <div className="flex flex-row space-x-4 m-auto items-center justify-around border border-inherit rounded-lg lg:w-5/12 sm:w-4/5 shadow mt-4 p-4">
      {pageData.map((page) => {
        const isActive = location.pathname === page.path;

        return (
          <div className={`flex flex-col space-y-4 justify-center items-center ${isActive ? '-translate-y-1 transition' : ""}`}>
            <Link to={page.path} key={page.path}>
              <page.icon size={40} isActive={isActive} />
            </Link>

            {isActive &&
              <>
                <div className='flex justify-center items-center' style=
                  {{color: getStyles(page.name).stroke,
                    width: 10,
                    height: 10,
                }}>
                  {page.name}
                </div>
                
              </>
            }
          </div>

        )
      })}
      <button onClick={handleLogout}>
        <LogoutIcon size={40} />
      </button>
    </div>
  )
}
