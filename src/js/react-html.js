let dom = document.querySelector("#root2");
const { useEffect } = React;
const App = () => {
    useEffect(() => {
        console.log("Processed useEffect");
    })
    return(
        <>
            <div style={{
                    padding: 0,
                    margin: 0
                }}>
                <h1>aaa</h1>
            </div>
            <Index/>
        </>
    );
}
const Index = () => {
    return(
        <>
            <div style={{
                padding: '2em',
                margin: 0
            }}>
                <h1>API</h1>
            </div>
        </>
    );
}
ReactDOM.render(<App />, dom);