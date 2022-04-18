import "../Style/ViewMoreButton.scss";
import RightArrow  from "../Assets/image/mainPage/rightArrowIcon.png";
import { Link } from "react-router-dom";
const ViewMoreButton = ({ pathname }) => {
  return (
    <Link to={pathname}>
      <div className="icon-box">
        <img src={RightArrow} className="right-arrow" />
        <div className="view-more-text">view more</div>
      </div>
    </Link>
  );
};
export default ViewMoreButton;
