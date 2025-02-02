import css from "./Options.module.css";

const Options = props => {
    return (
        <>
            <button className={css.button} type="button" onClick={() => props.update("good")}>Good</button>
            <button className={css.button} type="button" onClick={() => props.update("neutral")}>Neutral</button>
            <button className={css.button} type="button" onClick={() => props.update("bad")}>Bad</button>
            {props.total > 0 && (<button className={css.button} type="button" onClick={props.reset}>Reset</button>)}
        </>
    );
};

export default Options;
