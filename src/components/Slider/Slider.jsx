import classes from "./styles.module.css";

import { useRef } from "react";
import React from "react";

export default function Slider({ children, step= 100 }) {
    const slider = useRef(null);

    function scrollLeft() {
        slider.current.scrollLeft -= step;
    }

    function scrollRight() {
        slider.current.scrollLeft += step;
    }

    return (
        <header className={classes.slider}>
            <button onClick={scrollLeft} className={classes.arrow}>{`<`}</button>
            {React.cloneElement(children, { ref: slider })}
            <button onClick={scrollRight} className={classes.arrow}>{`>`}</button>
        </header>
    );
}
