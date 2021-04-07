import * as React from "react";

function App() {
    React.useEffect(() => {
        console.log('Hello world');
    }, []);
    return <div>Hello World! Welcome to React App with Webpack!</div>;
}

export default App;
