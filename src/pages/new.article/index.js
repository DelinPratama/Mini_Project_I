// import { useDispatch, useSelector } from "react-redux";
export default function NewArticle() {
  //! GET CATEGORY
  //   const { category } = useSelector((state) => {
  //     return {
  //       category: state.auth?.name,
  //     };
  //   });
  //   console.log(category);

  return (
    <div className="flex justify-center">
      <div className="p-10 shadow-xl rounded-xl">
        <h1 className="mb-8 text-2xl">Create New Article</h1>
        <div className="flex pl-8 mb-2">
          <div className="w-[150px]">
            <h2 className="mb-2">Title :</h2>
            <h2 className="mb-2">Category :</h2>
            <h2>Article :</h2>
          </div>
          <div>
            <input type="text" className="border rounded-xl block mb-2 w-[450px] px-2" />
            {/* <input type="text" className="border block mb-2" /> */}
            <select className="select w-full max-w-xs select-sm mb-2">
              <option disabled selected>
                select category
              </option>
              <option>Bisnis</option>
              <option>Ekonomi</option>
              <option>Teknologi</option>
              <option>Olahraga</option>
              <option>Kuliner</option>
              <option>Internatsional</option>
              <option>Fiksi</option>
            </select>
            <textarea name="" id="" cols="70" rows="10" className="border block px-2"></textarea>
          </div>
        </div>
        <div className="flex pl-8">
          <h2 className="w-[150px]">Image :</h2>
          <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs file-input-sm rounded-xl" />
        </div>
        <div className="pl-8">
          <button className="btn btn-info btn-sm ml-[600px] rounded-xl">Upload article</button>
        </div>
      </div>
    </div>
  );
}
