// TODO
const App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList />
  </div>
);

const GroceryList = (props) => {
  return <div><Cucumbers /><Kale /></div>;
}

const Cucumbers = () => (
  <li>Cucumbers</li>
);

const Kale = () => (
  <li>Kale</li>
);

ReactDOM.render(<App />, document.getElementById("app"));