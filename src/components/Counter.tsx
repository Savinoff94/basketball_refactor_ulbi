import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {

    const [counter,setCounter] = useState(0)

    const increment = () => setCounter(counter + 1)

    return (
        <div className={classes.qwe}>
            {counter}
            <button onClick={increment}>increment</button>
        </div>
    )
}