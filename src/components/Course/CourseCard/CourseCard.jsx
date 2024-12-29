/* eslint-disable react/prop-types */
import { RiUser2Fill } from "react-icons/ri";
import "./cardStyles.css";

const CourseCard = ({ course }) => {
  const {
    image,
    title,
    description,
    badge_color,
    badge_text,
    instructor_name,
    created_at,
  } = course;

  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card-image" />
      <div className="course-card-content">
        <h2 className="course-card-title" style={{ color: badge_color }}>
          {title}
        </h2>
        <p className="course-card-description">{description}</p>
        <div className="course-card-info">
          <span
            className="course-card-badge"
            style={{ backgroundColor: badge_color }}
          >
            {badge_text}
          </span>
          <span className="course-card-instructor">
            <RiUser2Fill className="course-card-icon" />
            {instructor_name}
          </span>
        </div>

        <div className="course-card-author">
          <p>Author: {course.author.name}</p>
          <p>Email: {course.author.email}</p>
        </div>

        <button className="course-card-button">View Details</button>
      </div>

      <div className="course-card-footer">
        <p className="course-card-footer-para">
          Created @{" "}
          <span className="course-card-date">
            {new Date(created_at).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
