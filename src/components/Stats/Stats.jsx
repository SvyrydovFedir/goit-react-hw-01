import css from '../Stats/Stats.module.css'


export const Stats = ({ stats }) => {
  const { followers, views, likes } = stats;

  return (
    <ul className={css.stats}>
      <li className={css.statsContainer}>
        <span className={css.label}>Followers</span>
        <span className={css.value}>{followers}</span>
      </li>
      <li className={css.statsContainer}>
        <span className={css.label}>Views</span>
        <span className={css.value}>{views}</span>
      </li>
      <li className={css.statsContainer}>
        <span className={css.label}>Likes</span>
        <span className={css.value}>{likes}</span>
      </li>
    </ul>
  );
};
