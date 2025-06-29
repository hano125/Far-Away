const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "FPSC_Soket", quantity: 12, packed: false },
  { id: 4, description: "Tree", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1> 👜 Far Away 🌴</h1>;
}
function Form() {
  return (
    <form className="add-form">
      <h3>Where whuld you like to trip 🌴</h3>
      <input type="text" placeholder="Destination" />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>we far away with out come back 🤚</em>
    </footer>
  );
}
