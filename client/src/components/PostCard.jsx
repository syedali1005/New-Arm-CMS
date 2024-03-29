import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full max-w-[300px] gap-8 border border-teal-500 hover:border-2 h-[320px] overflow-hidden rounded-lg transition-all shadow-lg">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[180px] w-full object-cover transition-all duration-300 transform group-hover:scale-105"
        />
      </Link>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="text-sm text-gray-600">{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className="absolute bottom-4 left-4 right-4 bg-yellow-500 text-white py-2 text-center rounded-md transition-all duration-300 hover:bg-yellow-600"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
