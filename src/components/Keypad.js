import React from 'react';

function Keypad() {
    function handleChange(event) {
        console.log('Entering password...')
    }


    return (
        <form onChange={handleChange} >
            <input type="password" name="username" placeholder="Enter username..." />
            <input type="password" name="password" placeholder="Enter password..." />
            <button>Login</button>
        </form>
    )
}

export default Keypad