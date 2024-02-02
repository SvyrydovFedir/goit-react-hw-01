import css from '../Description/Description.module.css'


export const Description = ({name, tag, location, image }) => {
    return (
<div className={css.description}>
    <img
      src={image}
      alt={name}
      className={css.avatar}
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>
    )
  };