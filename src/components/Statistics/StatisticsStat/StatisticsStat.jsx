import css from './StatisticsStat.module.css';
export const StatisticsStat = ({ stats }) => {
  return (
    <ul className={css.list}>
      {stats.map(item => (
        <li key={item.id} className={css.item}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
};