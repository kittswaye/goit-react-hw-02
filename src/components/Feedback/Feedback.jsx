import css from "./Feedback.module.css";

const Feedback = props => {
    return (
        <>
            <p>Good: {props.stats.good}</p>
            <p>Neutral: {props.stats.neutral}</p>
            <p>Bad: {props.stats.bad}</p>
            <p>Total: {props.total ? props.total : 0}</p>
            <p>Positive: {Math.round((props.stats.good / props.total) * 100)}%</p>
        </>
    );
};

export default Feedback;
