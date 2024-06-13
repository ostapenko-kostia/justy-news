import classes from "./styles.module.css";

import { ReactElement, useRef } from "react";
import React from "react";

interface IProps {
    step?: number;
    children: ReactElement;
}

export default function Slider({step = 150, children} : IProps) {
    const slider = useRef<HTMLElement | null>(null);

    function scrollLeft() {
        if(slider && slider.current) slider.current.scrollLeft -= step;
    }

    function scrollRight() {
        if(slider && slider.current) slider.current.scrollLeft -= step;
    }

    return (
        <header className={classes.slider}>
            <button onClick={scrollLeft} className={classes.arrow}>{`<`}</button>
            {React.cloneElement(children, { ref: slider })}
            <button onClick={scrollRight} className={classes.arrow}>{`>`}</button>
        </header>
    );
}
