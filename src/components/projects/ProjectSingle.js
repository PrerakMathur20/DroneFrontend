import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ urlId, title, category, image }) => {
  return (
    <motion.div
      className="h-full hover:shadow-lg"
      style={{ minHeight: "400px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        to={`/projects/single-project?id=${urlId}`}
        aria-label="Single Project"
        className="h-full"
      >
        <div
          className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 pt-10 bg-secondary-light dark:bg-ternary-dark h-full grid"
          style={{ gridTemplateRows: "auto min-content" }}
        >
          <div
            className="object-center"
            style={{ display: "grid", placeItems: "center" }}
          >
            <img
              src={image}
              className="rounded-t-xl border-none w-60"
              alt="Single Topic"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            {/* <span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span> */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
