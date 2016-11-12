// Stateless functional component (component with only render method)

var listItem = function (props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
};

exports.listItem = listItem;
