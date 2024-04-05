import React, { useState } from "react";
import Header from "./components/Header";
import { Book, books } from "./data/book";
import PrintButton from "./components/PrintButton";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectionCounter, setSelectionCounter] = useState<{ [key: number]: number }>({});

  const filteredBooks: Book[] = books.filter((book) => book.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleBookSelect = (id: number) => {
    setSelectionCounter((prevCounter) => {
      const newCounter = { ...prevCounter };
      newCounter[id] = (newCounter[id] || 0) + 1;
      return newCounter;
    });
  };

  return (
    <div className="app-container">
      <Header />
      <div className="search-container">
        <input type="text" placeholder="Search books..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <PrintButton />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>NAME</th>
              <th>ISBN</th>
              <th>VOLUMES</th>
              <th>CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((item: Book) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td onClick={() => handleBookSelect(item.id)} style={{ cursor: "pointer" }}>
                  {item.name}
                </td>
                <td>{item.isbn}</td>
                <td>{item.volumes.join(", ")}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="counter-container">
        <div className="counter-header">
          <h2>Selected Books:</h2>
          <button className="reset-button" onClick={() => setSelectionCounter({})}>
            Reset
          </button>
        </div>

        <ul className="counter-list">
          {Object.keys(selectionCounter).length < 1 ? (
            <p className="no-selection">No books selected yet.</p>
          ) : (
            Object.entries(selectionCounter).map(([id, count]) => (
              <li key={id}>
                {books.find((book) => book.id === parseInt(id))?.name}: {count}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
