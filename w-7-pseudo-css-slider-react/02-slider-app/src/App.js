import React from "react";
import Slider from "./Slider";

const cards = [
    { name: "John Doe", profession: "Software Engineer" },
    { name: "Jane Smith", profession: "Graphic Designer" },
    { name: "Alice Johnson", profession: "Product Manager" },
    { name: "Bob Brown", profession: "Data Scientist" },
];

const App = () => {
    return (
        <div className='App'>
            <h1>React Slider App</h1>
            <Slider cards={cards} />
        </div>
    );
};

export default App;
