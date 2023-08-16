import "./SuccessMessage.scss";
import SuccessIcon from '../../assets/icons/icons8-check-24.png';
// https://icons8.com/icons/set/check--blue

function ErrorMessage({ content }) {
  return (
    <div className="success">
      <img src={SuccessIcon} alt="success icon" className="success__icon" />
    {/*   <p className="success_msg">{content}</p> */}
    </div>
  );
}

export default ErrorMessage;
