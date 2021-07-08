import React from "react";

export default function Course(props) {
  const { course } = props;
  return (
    <div key={course._id} className="card">
      <img className="medium" src={course.image} alt={course.title} />
      <div className="card-body">
        <a href={`/course/${course._id}`}>
          <h2>{course.title}</h2>
        </a>
      </div>
    </div>
  );
}
