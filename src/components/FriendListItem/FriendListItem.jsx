// src/components/FriendListItem/FriendListItem.jsx
import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
        className={css.avatar}
      />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.statusOnline : css.statusOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
