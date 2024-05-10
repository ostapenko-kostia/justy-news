import classes from './styles.module.css'

export default function Image({ image }) {
    return (
        <div className={classes.wrapper}>
            {image ? <img src={image} alt="News" className={classes.image} /> : null}
        </div>
    );
}
