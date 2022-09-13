import React, { useState } from "react";
import NewFinance from "../Presentational/NewFinance";
import FinanceList from "../Presentational/FinanceList";

export default function TrackerFunction(){
    const [newFinance, setNewFinance] = useState({});
    
    //Handling current finance input
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewFinance((prev)=> ({...prev, id: Date.now(), [name]: value }));
    };
    
    const [allFinances, setAllFinances] = useState([]);
     //Listing all the previous finances
    const handleSubmit = (e) => {
        e.preventDfault();
        if (!newFinance.title) return;
        setAllFinances((prev) => [newFinance, ...prev]);
        setNewFinance({});
    };

    //Deleting selected finance in list
    const handleDelete = (financeIdToRemove) => {
        setAllFinances((prev) => prev.filter(
          (finance) => finance.id !== financeIdToRemove
        ));
      };

      return (
        <main>
        
        <h1>Add New Transaction:</h1>
        <NewFinance
            newFinance={newFinance}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
        <FinanceList allFinances={allFinances} handleDelete={handleDelete} />
        </main>
      )
}
