import PropTypes from 'prop-types';
import css from './StatisticsStat.module.css';
export const StatisticsStat = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(item => (
        <li key={item.id} className={css.item}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsStat.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};