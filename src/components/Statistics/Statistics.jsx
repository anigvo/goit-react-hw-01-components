import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle';
import { StatisticsStat } from './StatisticsStat/StatisticsStat';

import data from './data.json';
import css from './Statistics.module.css';

export const Statistics = () => {
    return (
      <section className={css.statistics}>
        <StatisticsTitle />
        <StatisticsStat data={data} />
      </section>
    );
};
