import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";

export default function UpdateProfile() {
  //* GET USERNAME
  const { username, email, phone, avatar } = useSelector((state) => {
    return {
      username: state.auth?.username,
      email: state.auth?.email,
      phone: state.auth?.phone,
      //? imgProfile undifine?
      avatar: state.auth?.imgProfile,
    };
  });
  //   console.log(username);

  return (
    <div>
      <button className="hover:opacity-50" onClick={() => window.my_modal_3.showModal()}>
        Update profile
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg mb-8">Update your profile</h3>
          {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
          <div className="flex flex-row text-left">
            <div className="w-[150px]">
              <h1 className="mb-5">Username :</h1>
              <h1 className=" mb-5">Email :</h1>
              <h1 className=" mb-5">Phone :</h1>
            </div>
            <div>
              <input type="text" placeholder={username} className="input input-bordered input-info w-full max-w-xs input-sm rounded-full mb-2" />
              <input type="text" placeholder={email} className="input input-bordered input-info w-full max-w-xs input-sm rounded-full mb-2" />
              <input type="text" placeholder={phone} className="input input-bordered input-info w-full max-w-xs input-sm rounded-full mb-2" />
            </div>
          </div>
          <button className="border rounded-full px-10 hover:opacity-50 bg-blue-200">save</button>
        </form>
      </dialog>
    </div>
  );
}
