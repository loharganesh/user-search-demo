// Style
import "./user-card.styles.css";

// Avatar
import Avatar from "../../assets/svgs/avatar-placeholder.svg";

export const UserCard = (props) => {
  return (
    <div className="user-card-container">
      <img className="avatar" src={Avatar} alt="" />
      <div className="user-info-container">
        <h4>{props.user.name}</h4>
        <div className="divider" />
        <p>{props.user.username}</p>
      </div>
    </div>
  );
};
