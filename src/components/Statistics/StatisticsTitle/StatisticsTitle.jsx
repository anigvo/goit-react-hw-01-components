import css from './StatisticsTitle.module.css';
export const StatisticsTitle = ({ title }) => {
  return <>{title ? <h2 className={css.title}> {title}</h2> : ``}</>;
};
