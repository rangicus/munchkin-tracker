function Counter (props) {
    const name = props.name || `Counter`;

    function change (n) {
        let c = props.val + n;

        if (props.min && c < props.min) c = props.min;
        if (props.max && c > props.max) c = props.max;

        props.func(c);
    }
    
    return (
        <div>
            <span>{name}</span> <br/>
            <button onClick={() => change(1)}>+1</button> <br/>
            <span>{props.val}</span> <br/>
            <button onClick={() => change(-1)}>-1</button>
        </div>
    );
}

export default Counter;