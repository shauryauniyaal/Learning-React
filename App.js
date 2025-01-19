const heading = React.createElement(
  "h1",
  { class: "main-heading heading" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag"),
  ]),
]);

root.render(parent);
