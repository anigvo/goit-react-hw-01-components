import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle';
import { StatisticsStat } from './StatisticsStat/StatisticsStat';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const Statistics = ({ stats, title}) => {
  return (
    <section className={css.statistics}>
      <StatisticsTitle title={title} />
      <StatisticsStat stats={stats} />
    </section>
  );
};

StatisticsStat.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string
};
