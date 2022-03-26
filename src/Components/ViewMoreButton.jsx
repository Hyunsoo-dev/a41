import "../Style/ViewMoreButton.scss";
import { ReactComponent as RightArrow } from "../Assets/image/mainPage/rightArrowIcon.svg";
const ViewMoreButton = () => {
  return (
    <div className="icon-box">
      <RightArrow className="right-arrow" />
      <div className="view-more-text">view more</div>
    </div>
  );
};
export default ViewMoreButton;
