import classes from './styles.module.css'

interface IProps {
    image: string;
}

export default function Image({ image }: IProps) {
    return (
        <div className={classes.wrapper}>
            {image ? <img src={image} alt="No Image :(" className={classes.image} /> : null}
        </div>
    );
}
