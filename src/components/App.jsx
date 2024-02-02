import userData from './userData.json';
import friends from './FriendList/friends.json'
import transactions from './TransactionHistory/transactions.json'
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import './App.css';

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </>
  );
};
