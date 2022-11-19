import React, { useState } from "react";
import styled from "styled-components";
import Edit from "./EditEmergency";

const TableFrame = styled.div`
  .emergency_table {
    margin: 20px;
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

function ListOfPenalties() {
  const [events, setEvents] = useState(PenaltyData.slice(0, 20));
  const [editing, setEditing] = useState(false);

  const displayEvents = events.map((event) => {
    const { id, created_at, features, collection_name, row_number, due_date } =
      event;

    return (
      <tr key={id}>
        <td>
          <div>{row_number}.</div>
        </td>

        <td className="emergency-row">
          <div> {collection_name} </div>
        </td>

        <td>
          <p>{created_at}</p>
        </td>
        <td>
          <p>{features}</p>
        </td>
        <td>{due_date}</td>

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
                    <th>Created</th>
                    <th>Features</th>
                    <th>Due Date</th>
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

export default ListOfPenalties;

let PenaltyData = [
  {
    id: 1,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 1,
  },
  {
    id: 2,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June",
    due_date: "22 June, 2023",
    row_number: 2,
  },
  {
    id: 3,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June,2022",
    due_date: "22 June, 2023",
    row_number: 3,
  },
  {
    id: 4,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June,2022",
    due_date: "22 June, 2023",
    row_number: 4,
  },
  {
    id: 5,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June",
    due_date: "22 June,2023",
    row_number: 5,
  },
  {
    id: 6,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June,2022",
    due_date: "22 June, 2023",
    row_number: 6,
  },
  {
    id: 7,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June,2022",
    due_date: "22 June,2023",
    row_number: 7,
  },
  {
    id: 8,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June,022",
    due_date: "22 June,023",
    row_number: 8,
  },
  {
    id: 9,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June,2022",
    due_date: "22 June,2023",
    row_number: 9,
  },
  {
    id: 10,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 10,
  },
  {
    id: 11,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June,2022",
    due_date: "22 June,2023",
    row_number: 11,
  },
  {
    id: 12,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June",
    due_date: "22 June,2023",
    row_number: 12,
  },
  {
    id: 13,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June,2022",
    due_date: "22 June, 2023",
    row_number: 13,
  },
  {
    id: 14,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 14,
  },
  {
    id: 15,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 15,
  },
  {
    id: 16,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 16,
  },
  {
    id: 17,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 17,
  },
  {
    id: 18,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 18,
  },
  {
    id: 19,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2022",
    row_number: 19,
  },
  {
    id: 20,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 20,
  },
  {
    id: 21,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 21,
  },
  {
    id: 22,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 22,
  },
  {
    id: 23,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 23,
  },
  {
    id: 24,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 24,
  },
  {
    id: 25,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 25,
  },
  {
    id: 26,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2022",
    row_number: 26,
  },
  {
    id: 27,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 27,
  },
  {
    id: 28,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2022",
    row_number: 28,
  },
  {
    id: 29,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2023",
    row_number: 29,
  },
  {
    id: 30,
    collection_name: "Collection Name",
    features: "Access Control, Emergency services..",
    created_at: "22 June, 2022",
    due_date: "22 June, 2022",
    row_number: 30,
  },
];
