export default function TodoItem(props) {
    const { children, done, onClick, onDelete } = props;
    return (
        <li className="btn-list" style={{ color: done ? "lightgreen" : "red" }}>
            {children}
            <button
                onClick={() => {
                    // logic to change the state
                    onClick(children);
                }}
            >
                ✔️
            </button>
            <button
                onClick={() => {
                    // logic to change the state
                    onDelete(children);
                }}
            >
                ❌
            </button>
        </li>
    );
}