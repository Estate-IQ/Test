import React, { useState } from "react";
import styled from "styled-components";
import Edit from "./EditCollection";

const TableFrame = styled.div`
  .emergency_table {
    margin: 20px;
  }
  @media (max-width: 1400px) {
    table {
      margin-right: 20px;
      min-width: 1200px !important;
    }
  }

  .date-time {
    width: 81px;
    height: 36px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #545454;
  }

  .emergency-action {
    display: flex;
    min-width: 100px !important;
    align-items: center;
    justify-content: space-between;
  }

  .del {
    font-weight: 400;
    font-size: 16px;
    color: #ff6969;
    cursor: pointer;
  }
  .edit {
    font-weight: 400;
    font-size: 16px;
    color: #2d4bf3;
    cursor: pointer;
  }

  table td {
    min-width: 60px;
  }

  .emergency-time {
    font-weight: 700;
  }
`;

function ListOfCollections() {
  const [events, setEvents] = useState(PenaltyData.slice(0, 20));
  const [editing, setEditing] = useState(false);

  const displayEvents = events.map((event) => {
    const {
      id,
      row_number,
      collection_name,
      frequency,
      target,
      due_date,
      bank_name,
      account,
      amount,
    } = event;

    return (
      <tr key={id}>
        <td>
          <div>{row_number}.</div>
        </td>

        <td className="emergency-row">
          <div> {collection_name} </div>
        </td>
        <td>{frequency}</td>
        <td>{target}</td>
        <td>
          <p>{due_date}</p>
        </td>
        <td>
          <p>{bank_name}</p>
        </td>
        <td>{account}</td>
        <td>{amount}</td>

        <td>
          <div className="emergency-action ">
            <span className="edit" onClick={() => setEditing(true)}>
              Edit
            </span>
            <span className="del">Delete</span>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <section className="change_ratio">
        <Edit open={editing} onClose={() => setEditing(false)} />
        <TableFrame>
          <div className="scrollable_table">
            <div className="emergency_table">
              <table>
                <thead>
                  <tr className="emergency-table-row">
                    <th></th>
                    <th>Collection Name</th>
                    <th>Frequency</th>
                    <th>Target</th>
                    <th>Due Date</th>
                    <th>Bank Name</th>
                    <th>Account</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody> {displayEvents} </tbody>
              </table>
            </div>
          </div>
        </TableFrame>
      </section>
    </>
  );
}

export default ListOfCollections;

let PenaltyData = [
  {
    id: 1,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "22 June",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "60,000",
    row_number: 1,
  },
  {
    id: 2,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "Vendors",
    due_date: "22 June",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "60,000",
    row_number: 2,
  },
  {
    id: 3,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "2022",
    bank_name: "Wema",
    account: "0123456789",
    amount: "50,000",
    row_number: 3,
  },
  {
    id: 4,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "Vendors",
    due_date: "2022",
    bank_name: "First Bank",
    account: "0123456789",
    amount: "50,000",
    row_number: 4,
  },
  {
    id: 5,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "2022",
    bank_name: "Wema",
    account: "0123456789",
    amount: "40,000",
    row_number: 5,
  },
  {
    id: 6,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "residence",
    due_date: "2022",
    bank_name: "Wema",
    account: "0123456789",
    amount: "40,000",
    row_number: 6,
  },
  {
    id: 7,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "Vendors",
    due_date: "2022",
    bank_name: "First Bank",
    account: "0123456789",
    amount: "50,000",
    row_number: 7,
  },
  {
    id: 8,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "22 June",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "60,000",
    row_number: 8,
  },
  {
    id: 9,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "Vendors",
    due_date: "22 June",
    bank_name: "Wema",
    account: "0123456789",
    amount: "40,000",
    row_number: 9,
  },
  {
    id: 10,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "2022",
    bank_name: "Access Bank",
    account: "0123456789",
    amount: "50,000",
    row_number: 10,
  },
  {
    id: 11,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "residence",
    due_date: "2022",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "40,000",
    row_number: 11,
  },
  {
    id: 12,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "Vendors",
    due_date: "2022",
    bank_name: "First Bank",
    account: "0123456789",
    amount: "60,000",
    row_number: 12,
  },
  {
    id: 13,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "Vendors",
    due_date: "22 June",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "60,000",
    row_number: 13,
  },
  {
    id: 14,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "residence",
    due_date: "22 June",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "50,000",
    row_number: 14,
  },
  {
    id: 15,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "2022",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "60,000",
    row_number: 15,
  },
  {
    id: 16,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "Vendors",
    due_date: "22 June",
    bank_name: "Access Bank",
    account: "0123456789",
    amount: "60,000",
    row_number: 16,
  },
  {
    id: 17,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "22 June",
    bank_name: "Wema",
    account: "0123456789",
    amount: "60,000",
    row_number: 17,
  },
  {
    id: 18,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "residence",
    due_date: "2022",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "50,000",
    row_number: 18,
  },
  {
    id: 19,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "22 June",
    bank_name: "First Bank",
    account: "0123456789",
    amount: "50,000",
    row_number: 19,
  },
  {
    id: 20,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "residence",
    due_date: "2022",
    bank_name: "First Bank",
    account: "0123456789",
    amount: "40,000",
    row_number: 20,
  },
  {
    id: 21,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "Vendors",
    due_date: "2022",
    bank_name: "Wema",
    account: "0123456789",
    amount: "40,000",
    row_number: 21,
  },
  {
    id: 22,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "residence",
    due_date: "22 June",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "50,000",
    row_number: 22,
  },
  {
    id: 23,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "2022",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "60,000",
    row_number: 23,
  },
  {
    id: 24,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "2022",
    bank_name: "First Bank",
    account: "0123456789",
    amount: "40,000",
    row_number: 24,
  },
  {
    id: 25,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "Vendors",
    due_date: "2022",
    bank_name: "Zenith",
    account: "0123456789",
    amount: "50,000",
    row_number: 25,
  },
  {
    id: 26,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "residence",
    due_date: "22 June",
    bank_name: "Wema",
    account: "0123456789",
    amount: "40,000",
    row_number: 26,
  },
  {
    id: 27,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "residence",
    due_date: "22 June",
    bank_name: "Wema",
    account: "0123456789",
    amount: "60,000",
    row_number: 27,
  },
  {
    id: 28,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "residence",
    due_date: "2022",
    bank_name: "Wema",
    account: "0123456789",
    amount: "60,000",
    row_number: 28,
  },
  {
    id: 29,
    collection_name: "Collection Name",
    frequency: "Monthly",
    target: "Vendors",
    due_date: "2022",
    bank_name: "First Bank",
    account: "0123456789",
    amount: "50,000",
    row_number: 29,
  },
  {
    id: 30,
    collection_name: "Collection Name",
    frequency: "Yearly",
    target: "residence",
    due_date: "22 June",
    bank_name: "Wema",
    account: "0123456789",
    amount: "60,000",
    row_number: 30,
  },
];
