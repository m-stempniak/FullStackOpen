import React, {useState} from 'react'

const Statistics = ({good, neutral, bad}) => {
    if (!good && !neutral && !bad) {
        return (
            <>
                <h1>statistics</h1>
                <div>Noo feedback given</div>
            </>
        )
    }
    const all = good + neutral + bad;
    const average = ((good - bad) / all) || 0;
    const positive = 100 * (good / all) || 0;

    return (
        <>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text={'good'} value={good}/>
                    <Statistic text={'neutral'} value={neutral}/>
                    <Statistic text={'bad'} value={bad}/>
                    <Statistic text={'all'} value={all}/>
                    <Statistic text={'average'} value={average}/>
                    <Statistic text={'positive'} value={positive}/>
                </tbody>
            </table>
        </>
    )
}

const Statistic = ({text, value}) => {
    if (text === 'positive') {
        return (
            <tr>
                <td>{text}</td>
                <td>{value} %</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Button = ({handler, name}) => {
    return (
        <button onClick={handler}>{name}</button>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setGoodState = () => setGood(good + 1);
    const setNeutralState = () => setNeutral(neutral + 1);
    const setBadState = () => setBad(bad + 1);

    return (
        <div>
            <h1>give feedback</h1>
            <Button handler={setGoodState} name='good'/>
            <Button handler={setNeutralState} name='neutral'/>
            <Button handler={setBadState} name='bad'/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App