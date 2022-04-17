import "../Style/ViewMoreButton.scss";
import { ReactComponent as RightArrow } from "../Assets/image/mainPage/rightArrowIcon.svg";
import { Link } from "react-router-dom";
const ViewMoreButton = ({ pathname }) => {
  return (
    <Link to={pathname}>
      <div className="icon-box">
        <RightArrow className="right-arrow" />
        <div className="view-more-text">view more</div>
      </div>
    </Link>
  );
};
export default ViewMoreButton;
