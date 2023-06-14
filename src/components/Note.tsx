const Note = ({ title, note, comment, createdAt }) => {
    const getColor = () => {
        if (note < 8) {
            return 'red';
        } else if (note < 10) {
            return 'orange';
        } else if (note < 13) {
            return 'yellow';
        } else {
            return 'green';
        }
    };

    return (
        <div className={`note ${getColor()}`}>
            <h3>Title: {title}</h3>
            <p>Comment: {comment}</p>
            <p>Created at: {createdAt}</p>
            <p>Note: {note}</p>
        </div>
    );
};

export default Note;
