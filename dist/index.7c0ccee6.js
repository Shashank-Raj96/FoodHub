/**
 * <div id="parent">
 *       <div id="child">
 *          <h1> I am Shashank </h1>
 *          <h2> I am Shanu </h2>
 *       </div>
 * </div>
 */ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am Shashank Raj"),
    React.createElement("h2", {}, "I am Shanu")
]));
//const heading = React.createElement("h1",{id: "heading"},"Hello World From React");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
