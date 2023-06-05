import css from './FriendListItem.module.css';
export const FriendListItem = ({ item } ) => {
  return (
    <>
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
      
    </>
  );
};

