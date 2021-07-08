import React from "react";
import Course from "../components/Course";
import data from "../data";

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.courses.map((course) => (
          <Course key={course._id} course={course}></Course>
        ))}
      </div>
    </div>
  );
}
