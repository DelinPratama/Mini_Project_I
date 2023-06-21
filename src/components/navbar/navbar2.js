import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../store/slices/auth/slices";

export default function Navbar2() {
  // @hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => {
    return {
      username: state.auth?.username,
    };
  });

  // console.log("ini ::: " + username);

  const visible = "hidden";
  return (
    <div className="border w-full">
      <div className="navbar bg-slate-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="/">Homepage</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/" className=" text-4xl font-ligth hover:opacity-50">
            WebBlog
          </a>
        </div>
        <div className="navbar-end">
          {!username ? (
            <a href="/login">Login</a>
          ) : (
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <span>{username[0]?.toUpperCase()}</span>
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                  <li>
                    <a className="cursor-pointer" onClick={() => navigate("/profile")}>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer" onClick={() => navigate("/newArticle")}>
                      Create new article
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer" onClick={() => dispatch(logout())}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
