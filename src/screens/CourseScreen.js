import data from "../data";
import { Link } from "react-router-dom";

export default function CouseScreen(props) {
  const course = data.courses.find((x) => x._id === props.match.params.id);
  if (!course) {
    return <div> course Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <div className="row top">
        <div>
          <li>
            <h1>{course.title}</h1>
          </li>
          <img src={course.image} alt={course.name}></img>

          <div>
            <ul>
              <li>
                <h1>{course.name}</h1>
              </li>
              <li>
                Description:
                <p>{course.description}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
