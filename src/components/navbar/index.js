import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/auth/slices";

export default function Navbar() {
  // @hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => {
    return {
      username: state.auth?.username,
    };
  });

  //   console.log("ini ::: " + username);
  //   const tes = false;

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Blogs</a>
        {/* {username ? <h1>ada</h1> : <h1>kosong</h1>} */}
      </div>
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
              <a className="cursor-pointer" onClick={() => dispatch(logout())}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
