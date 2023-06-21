import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import bgimage from "../../assets/image.svg";
import { updateImageProfile } from "../../store/slices/auth/slices";
import avatarImage from "../../assets/7309681.jpg";
import UpdateProfile from "../../components/update.profile";
// import { keepLogin } from "../../store/slices/auth/slices";

export default function UserProfile() {
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
  // console.log("img:::" + avatar);

  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => {
    return {
      loading: state.auth.isUploadImageLoading,
    };
  });

  // @event handler
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  };

  // @hooks
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { "image/*": [".jpg", ".png", ".jpeg"] },
    noClick: true,
    noKeyboard: true,
  });

  // @another event handler
  const onButtonUpload = () => {
    // @create form data
    const formData = new FormData();
    formData.append("file", file);
    dispatch(updateImageProfile(formData));
    setFile(null);
  };

  return (
    // <!-- component -->
    <div class="h-screen w-full flex flex-row justify-center items-center">
      <div class="card w-96 mx-auto bg-white  shadow-xl border">
        {/* <img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt="" /> */}
        <img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={avatarImage} alt="" />
        <div class="text-center mt-2 text-3xl font-medium">{username}</div>
        {/* <div class="text-center mt-2 font-light text-sm">@devpenzil</div> */}
        <div class="text-center font-normal text-lg">
          <h1>{email}</h1>
        </div>
        <div class="text-center font-normal text-lg">
          <h1>Phone : {phone}</h1>
        </div>
        {/* <div class="px-6 text-center mt-2 font-light text-sm">
          <p>Front end Developer, avid reader. Love to take a long walk, swim</p>
        </div> */}
        <hr class="mt-8" />
        <div class="flex p-4">
          <div class="w-1/2 text-center">
            {/* <span class="font-bold">1.8 k</span> Followers */}
            <a href="" className="hover:opacity-50">
              Change profile image
            </a>
          </div>
          <div class="w-0 border border-gray-300"></div>
          <div class="w-1/2 text-center">
            {/* <a href="" className="hover:opacity-50">
              Update profile
            </a> */}
            <UpdateProfile />
          </div>
        </div>
      </div>
    </div>

    // <div className="w-full bg-grey flex justify-center pt-8">
    //   <div className="border flex flex-row p-5">
    //     <div className=" h-[50vh] pr-5">
    //       <div className="border w-40 h-40 rounded-full mb-5" style={{ backgroundImage: `url(${avatarImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
    //       <button className="btn btn-info btn-sm capitalize">change profile image</button>
    //     </div>
    //     <div className="flex flex-col">
    //       <div className="pt-5">
    //         <h1 className="inline-block mr-2">Username :</h1>
    //         <h1 className=" text-center text-xl inline-block">{username}</h1>
    //       </div>
    //       <div className="">
    //         <h1 className="inline-block mr-2">Email :</h1>
    //         <h1 className=" text-center text-xl inline-block">{email}</h1>
    //       </div>
    //       <div className="">
    //         <h1 className="inline-block mr-2">Phone :</h1>
    //         <h1 className=" text-center text-xl inline-block">{phone}</h1>
    //       </div>
    //       <div className="justify-center flex py-5">
    //         <button className="btn btn-info btn-sm capitalize">Update Profile</button>
    //       </div>
    //     </div>

    //*FORM UPLOAD IMAGE
    // <div className="flex flex-col h-[50vh] p-5 justify-between bg-white w-4/5 md:w-2/6 sm:w-4/6 rounded-md">
    //   <p className="text-center md:text-xl mb-2">Upload your image</p>
    //   <p className="text-center font-thin text-xs text-slate-400 mb-2">File should be Jpeg , Png...</p>
    //   <div {...getRootProps({ className: `md:h-52 sm:h-44 h-auto bg-light-grey ${!isDragActive ? "border-light-blue" : "border-lime-500"} border-2 border-dashed rounded-md` })}>
    //     <input {...getInputProps({ name: "image" })} />
    //     <img src={bgimage} className="max-w-1/3 mx-auto mt-4" />
    //     <p className="text-slate-400 md:text-md text-center mt-4 text-sm">Drag & Drop your image here</p>
    //   </div>
    //   <p className="text-center font-normal text-slate-400 text-md mt-2 mb-2">Or</p>
    //   {file ? (
    //     <button className="text-white bg-lime-500 font-normal p-1 rounded-lg w-auto mx-auto px-4 py-2 text-md" onClick={onButtonUpload} disabled={loading}>
    //       {loading ? <span className="loading loading-spinner"></span> : null}
    //       Upload
    //     </button>
    //   ) : (
    //     <button onClick={open} className="text-white bg-sky-500 font-normal p-1 rounded-lg w-auto mx-auto px-4 py-2 text-md">
    //       Choose a file
    //     </button>
    //   )}
    // </div>
    // </div>
    // </div>
  );
}
