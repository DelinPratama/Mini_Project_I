function BlogCard({ title = "", content = "", thumbnail = "", onClick = (id) => {}, username = "", category = "" }) {
  // console.log("ini" + process.env.REACT_APP_IMAGE_URL + thumbnail);
  // console.log("ini" + username);
  return (
    <div className="card w-[850px] h-[250px] bg-base-100 shadow-xl grid grid-flow-col justify-start">
      <div className="w-[250px] h-full rounded-l-xl" style={{ backgroundImage: "url(" + process.env.REACT_APP_IMAGE_URL + thumbnail + ")", backgroundSize: "cover", backgroundPosition: "center" }}></div>
      <div className="card-body pt-[10px]">
        <a href="/detailBlog" className="card-title uppercase hover:opacity-50">
          {title}
        </a>
        <h3 className="font-medium">{category}</h3>
        <h3>By : {username}</h3>
        <p className="font-light text-sm">{content}</p>
        {/* <button className="btn" onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Like
        </button> */}
      </div>
    </div>
  );
}

export default function RenderBlogCards({ articles = [], onButtonLike = (id) => {} }) {
  return articles.map((article, index) => {
    return <BlogCard key={article.id} title={article.title} content={article.content} thumbnail={article.imageURL} onClick={() => onButtonLike(article.id)} username={article.User.username} category={article.Category.name} />;
  });
}
