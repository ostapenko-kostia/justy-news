import classes from './styles.module.css'

export default function Image({ image }) {
    return (
        <div className={classes.wrapper}>
            {image ? <img src={image} alt="No Image :(" className={classes.image} /> : null}
        </div>
    );
}
