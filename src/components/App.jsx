import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import user from './Profile/user.json';
import stats from './Statistics/data.json';


export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
