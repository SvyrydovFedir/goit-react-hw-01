import css from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
const status = clsx({
  [css.isOnline]: isOnline,
  [css.isOffline]: !isOnline,
})

  return (
    <div className={css.item}>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={status}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
