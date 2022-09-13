import React from "react";

export default function NewFinance({ newFinance, handleChange, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Add finance.."
          value={newFinance.title || ""}
          onChange={handleChange}
        />
        {!newFinance.title ? null : (
          <>
            <input
              name="amount"
              placeholder="Amount..."
              value={newFinance.amount}
              onChange={handleChange}
            />
            <button type="submit">Add Finance</button>
          </>
        )}
      </form>
    );
  }