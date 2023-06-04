import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ( {friends} ) => {
  return (
    <>
      {friends.map(item => (
        <li key={item.id} className={css.item}>
          {item.isOnline ? (
            <span className={css.online}></span>
          ) : (
            <span className={css.offline}></span>
          )}
          <img
            className={css.avatar}
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{item.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
