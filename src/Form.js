import React, {useState} from 'react'

function Form() {
    // this is where you can add a game image and new character





    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Character</h1>
            <label>
                Email:
                <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required />
            </label>
            <label>
                Password:
                <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required />
            </label>
            <label>
                Password:
                <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required />
            </label>
            <button>Submit</button>
        </form>
    )

}

export default Form