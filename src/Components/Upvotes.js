import React, { useState, useEffect, useRef } from 'react';

function Upvotes(props) {
    const [upvotes, setUpvotes] = useState(false);

    function addVote() {
        setUpvotes(prevState => !prevState);
    }

    return (
        <div>
            {!upvotes && <button type='button' onClick={addVote}>Like</button>}
            {upvotes && <React.Fragment>
                <span>You like this</span>
                <button type='button' onClick={addVote}>Don't like</button>
            </React.Fragment>}
        </div>
    )
}

export default Upvotes
