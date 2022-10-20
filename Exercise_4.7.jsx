import React from 'react';
import ReactDOM from 'react-dom';

const Userform = () => {
    return (
        <form>
            <label>
                Enter a username:
            </label>
            <input />
        </form>
    );
}

ReactDOM.render(<Userform />, document.querySelector('#root'));