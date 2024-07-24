// src/components/Profile/Profile.jsx
// import "../Profile/Profile.module.css";
import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <img src={image} alt="User avatar" className={css.profileAvatar} />
      <p className={css.profileName}>{name}</p>
      <p className={css.profileTag}>@{tag}</p>
      <p className={css.profileLocation}>{location}</p>
      <div className={css.profileStats}>
        <div className={css.profileStat}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </div>
        <div className={css.profileStat}>
          <span>Views</span>
          <span>{stats.views}</span>
        </div>
        <div className={css.profileStat}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
