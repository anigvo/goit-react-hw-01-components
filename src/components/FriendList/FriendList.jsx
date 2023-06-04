
import css from './FriendList.module.css';
import { FriendListItem } from './FriensListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
      <ul className={css.list}>
        <FriendListItem friends={ friends } />
      </ul>
    );
};


