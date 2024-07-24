// src/components/FriendList/FriendList.jsx
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
