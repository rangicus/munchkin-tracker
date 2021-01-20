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
            <span
                style = {{ fontWeight: `bold` }}
            >{name}</span> <br/>

            <button
                onClick={() => change(1)}
                className = "btn btn-success"
            >+1</button> <br/>

            <span>{props.val}</span> <br/>

            <button
                onClick={() => change(-1)}
                className = "btn btn-danger"
            >-1</button>

        </div>
    );
}

export default Counter;