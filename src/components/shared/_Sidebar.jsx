import logo from "../../../public/login-register/logoLight.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../../lib/consts/navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { BiLogOut } from "react-icons/bi";
import doc1 from "../../../public/doctor-img/doc1.jpg";
import doc2 from "../../../public/doctor-img/doc2.jpg";
import doc3 from "../../../public/doctor-img/doc3.jpg";

const linkClasses =
  "hover:bg-[#103147] hover:rounded-3xl flex items-center mt-2 gap-4 font-Inter px-7 py-2 text-base ";

const _Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="font-Inter bg-bgDark w-72 p-3 flex flex-col gap-2 text-textDark">
      <div className="flex">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex-1 mt-2 ">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarkLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-2 p-2 bg-bgLight rounded-xl overflow-auto">
        <div className="transition ease-in-out duration-200 p-4 rounded-full bg-bgDark h-24 w-full text-textDark cursor-pointer hover:bg-indigo-900">
          <div className="flex gap-4">
            <img
              className="h-16 w-16 object-cover rounded-full ring-2 ring-green-500"
              src={doc1}
              alt=""
            />
            <div className="flex flex-col gap-2 justify-center">
              <h1 className="fontInter font-bold">M.Susan</h1>
              <p className="fontInter ">So I was won...</p>
            </div>
          </div>
        </div>
        <div className="transition ease-in-out duration-200  p-4 rounded-full bg-bgDark h-24 w-full text-textDark cursor-pointer hover:bg-indigo-900">
          <div className="flex gap-4">
            <img
              className="h-16 w-16 object-cover rounded-full ring-2 ring-red-500"
              src={doc2}
              alt=""
            />
            <div className="flex flex-col gap-2 justify-center">
              <h1 className="fontInter font-bold">S.Miller</h1>
              <p className="fontInter ">Hello, I'm...</p>
            </div>
          </div>
        </div>
        <div className="transition ease-in-out duration-200 p-4 rounded-full bg-bgDark h-24 w-full text-textDark cursor-pointer hover:bg-indigo-900">
          <div className="flex gap-4">
            <img
              className="h-16 w-16 object-cover rounded-full ring-2 ring-yellow-500"
              src={doc3}
              alt=""
            />
            <div className="flex flex-col gap-2 justify-center">
              <h1 className="fontInter font-bold">P.Badrul</h1>
              <p className="fontInter ">When are yo...</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-textDark/30" />
      <div>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarkBottomLink key={item.key} item={item} />
        ))}

        <div
          onClick={() => navigate("/login")}
          className={classNames("text-red-500 cursor-pointer", linkClasses)}
        >
          <span className="text-3xl">
            <BiLogOut />
          </span>
          <span className="text-xl ">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default _Sidebar;

function SidebarkLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-white bg-[#103147] rounded-3xl" : "",
        linkClasses
      )}
    >
      <span className="text-3xl active text-accentDark">{item.icon}</span>
      <span className="text-xl">{item.label}</span>
    </Link>
  );
}
function SidebarkBottomLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-white bg-[#103147] rounded-3xl" : "",
        linkClasses
      )}
    >
      <span className="text-3xl active text-accentDark">{item.icon}</span>
      <span className="text-xl">{item.label}</span>
    </Link>
  );
}
