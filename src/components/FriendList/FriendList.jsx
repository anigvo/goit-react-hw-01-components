import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
      <ul className={css.list}>
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
      </ul>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
