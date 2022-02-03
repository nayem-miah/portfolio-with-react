import parse from "html-react-parser";
import { Link } from "react-router-dom";
const BlogSectionSlider = (props) => {
  const { _id, BlogTitle, ImgUrl, date, data } = props.data;
  const BlogTitleSlice = parse(BlogTitle.slice(0, 30));
  const DescriptionSlice = parse(data.slice(0, 190));

  return (
    <div class="testimonial">
      <div class="card">
        <img class="card-img-top" src={ImgUrl} alt="Card image cap" />
        <div class="card-body">
          <h3 class="date">{date}</h3>
          <h4 class="card-title">{BlogTitleSlice}....</h4>
          <p class="card-text">{DescriptionSlice}</p>

          <Link className="btn" to={`/single-blog/${_id}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSectionSlider;
