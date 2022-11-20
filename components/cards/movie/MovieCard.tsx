import Image from 'next/image';
import { ISearchData } from '../../../lib/search/types';
import styles from './MovieCard.module.css';

export type IMovieCard = ISearchData & React.ComponentPropsWithoutRef<'div'>;

const MovieCard: React.FC<IMovieCard> = ({
  tag,
  title,
  description,
  posterImg,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src={posterImg}
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
