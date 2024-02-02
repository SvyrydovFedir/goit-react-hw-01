import {Description} from "../Description/Description";
import { Stats } from '../Stats/Stats';
import css from '../Profile/Profile.module.css'

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
        <Description 
        name={name}
        tag={tag}
        location={location}
        image={image}
        />

      <Stats stats={stats} />
    </div>
  );
};
