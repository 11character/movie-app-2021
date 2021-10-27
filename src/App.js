import React from 'react';

const foodArray = ['a', 'b', 'c', 'd', 'e'];

function Food({fav, index}) {
    console.log(fav);
    return (
        <h2>{index} : I like {fav}.</h2>
    );
}

function App() {
    return (
        <div>
            <h1>Hello</h1>

            {foodArray.map((food, i) => <Food fav={food} index={i} />)}
        </div>
    );
}

export default App;
