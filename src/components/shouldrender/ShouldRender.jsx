import React, { useRef, useState, useEffect } from 'react'

/**
 * 
 * Renders child if isTrue is TRUE, otherwise renders self FallbackDefault component or node passed at fallback param.
 * Optional can use timeoutSec to render self TimeoutFallbackDefault component or node passed at timeoutFallback param after 
 * certain seconds if isTrue is not satisfied.
 * 
 */
const ShouldRender = props => {
    const {ifTrue, children} = props;
    const Fallback = (props.fallback) ? () => <>{props.fallback}</> : FallbackDefault;
    const TimeoutFallback = (props.timeoutFallBack) ? () => <>{props.timeoutFallBack}</> : TimeoutFallbackDefault;
    const [timeoutEnd, setTimeoutEnd] = useState(false);
    let timer = useRef(0);

    useEffect(() => {
        if (props.timeoutSec) {
            timer.current = setTimeout(() => { setTimeoutEnd(true) }, props.timeoutSec*1000);
            return () => { clearTimeout(timer.current) };
        }
    }, [])

    useEffect(() => {
        ifTrue && clearTimeout(timer.current);
    }, [ifTrue])

    return (
        timeoutEnd
            ? <TimeoutFallback />
            : ifTrue
                ? children
                : <Fallback />
    )
}

export default ShouldRender

const FallbackDefault = () => (
    <div className="text-center text-secondary">
        <strong className="">Loading...</strong>
    </div>
)

const TimeoutFallbackDefault = () => (
    <div className="p-3 text-center alert-danger">
        <h4 className="alert-heading">Something went wrong!</h4>
        <p>Please refresh or try again later.</p>
    </div>
)