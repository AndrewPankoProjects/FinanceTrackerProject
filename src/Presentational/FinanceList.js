import React from "react";

export default function FinanceList({ allFinances, handleDelete }) {
  return (
    <ul>
      {allFinances.map(({ title, amount, id }) => (
        <li key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {!amount ? null : <p>{amount}</p>}
        </li>
      ))}
    </ul>
  );
}