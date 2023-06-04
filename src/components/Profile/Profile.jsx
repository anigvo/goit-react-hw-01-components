import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStats } from './ProfileStats/ProfileStats';
import user from './user.json';
import css from './Profile.module.css';
const { profile } = css;

export const Profile = () => {
  return (
    <div className={profile}>
      <ProfileDescription
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      />

      <ProfileStats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
