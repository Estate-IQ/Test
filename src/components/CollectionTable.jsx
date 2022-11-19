import React, { useState } from "react";
// import EmergencyContactData from "../../admin/emergencyContactList/EmergencyContactData.json";
// import EmergencyContactData from "../../Residence_tables/activityResidence/EmergencyContactData.json";

import styled from "styled-components";

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

function PenaltyTable() {
  const [events, setEvents] = useState(EmergencyContactData.slice(0, 20));

  const displayEvents = events.map((event) => {
    const {
      id,
      emergency_detail,
      row_number,
      type,
      address,
      contact_phone,
      contact_email,
    } = event;

    return (
      <tr>
        <td>
          <div>{row_number}.</div>
        </td>

        <td className="emergency-row">
          <div> {emergency_detail} </div>
        </td>
        <td>{type}</td>
        <td>{address}</td>
        <td>
          <div className="date-time">
            <p>{contact_phone}</p>
          </div>
          <div className="emergency-time">
            <p>{contact_email}</p>
          </div>
        </td>
        <td>
          <div className="emergency-action ">
            <span className="edit">Edit</span>
            <span className="del">Delete</span>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <section className="change_ratio">
        <TableFrame>
          <div className="scrollable_table">
            <div className="emergency_table">
              <table>
                <thead>
                  <tr className="emergency-table-row">
                    <th></th>
                    <th>Emergency Detail</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Contact</th>
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

export default PenaltyTable;

let EmergencyContactData = [
  {
    id: 1,
    row_number: 1,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "15163 Maywood Way",
    contact_phone: "08129094243",
    contact_email: "vcounter0@furl.net",
  },
  {
    id: 2,
    row_number: 2,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "3 International Street",
    contact_phone: "07034567123",
    contact_email: "bducarne1@mysql.com",
  },
  {
    id: 3,
    row_number: 3,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "8 Sugar Park",
    contact_phone: "08165623144",
    contact_email: "sdangerfield2@wordpress.com",
  },
  {
    id: 4,
    row_number: 4,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "07201 Mitchell Point",
    contact_phone: "07034567123",
    contact_email: "mseide3@rambler.ru",
  },
  {
    id: 5,
    row_number: 5,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "6504 Florence Center",
    contact_phone: "08165623144",
    contact_email: "gjudd4@pinterest.com",
  },
  {
    id: 6,
    row_number: 6,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "78 8th Way",
    contact_phone: "08165623144",
    contact_email: "jnenci5@noaa.gov",
  },
  {
    id: 7,
    row_number: 7,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "9441 Sycamore Way",
    contact_phone: "08165623144",
    contact_email: "ggennrich6@topsy.com",
  },
  {
    id: 8,
    row_number: 8,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "3 Scott Drive",
    contact_phone: "08165623144",
    contact_email: "weastwood7@examiner.com",
  },
  {
    id: 9,
    row_number: 9,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "51 Dakota Alley",
    contact_phone: "07034567123",
    contact_email: "alappin8@nydailynews.com",
  },
  {
    id: 10,
    row_number: 10,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "947 Sugar Hill",
    contact_phone: "07034567123",
    contact_email: "ckording9@berkeley.edu",
  },
  {
    id: 11,
    row_number: 11,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "1276 Loomis Road",
    contact_phone: "08129094243",
    contact_email: "abelleniea@answers.com",
  },
  {
    id: 12,
    row_number: 12,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "95454 Evergreen Court",
    contact_phone: "08165623144",
    contact_email: "ltarquinib@disqus.com",
  },
  {
    id: 13,
    row_number: 13,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "372 Algoma Park",
    contact_phone: "08165623144",
    contact_email: "jpeersc@imdb.com",
  },
  {
    id: 14,
    row_number: 14,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "690 Anzinger Plaza",
    contact_phone: "08165623144",
    contact_email: "msamworthd@1688.com",
  },
  {
    id: 15,
    row_number: 15,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "21 Redwing Junction",
    contact_phone: "08165623144",
    contact_email: "blowlee@mapquest.com",
  },
  {
    id: 16,
    row_number: 16,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "6 Forster Center",
    contact_phone: "08165623144",
    contact_email: "rbenleyf@etsy.com",
  },
  {
    id: 17,
    row_number: 17,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "61 Sage Drive",
    contact_phone: "08129094243",
    contact_email: "pnourseg@fc2.com",
  },
  {
    id: 18,
    row_number: 18,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "58 Twin Pines Plaza",
    contact_phone: "07034567123",
    contact_email: "rmitchenerh@homestead.com",
  },
  {
    id: 19,
    row_number: 19,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "772 Kim Circle",
    contact_phone: "08129094243",
    contact_email: "gwilksi@shop-pro.jp",
  },
  {
    id: 20,
    row_number: 20,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "34 Killdeer Court",
    contact_phone: "08165623144",
    contact_email: "galgyj@answers.com",
  },
  {
    id: 21,
    row_number: 21,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "7 Westridge Drive",
    contact_phone: "08129094243",
    contact_email: "bcaudrelierk@google.ca",
  },
  {
    id: 22,
    row_number: 22,
    emergency_detail: "Glory Memorial Hospital",
    type: "Ambulance",
    address: "15 Montana Drive",
    contact_phone: "08129094243",
    contact_email: "mlammertsl@studiopress.com",
  },
  {
    id: 23,
    row_number: 23,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "402 Pond Crossing",
    contact_phone: "07034567123",
    contact_email: "sknellenm@hugedomains.com",
  },
  {
    id: 24,
    row_number: 24,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "738 Crest Line Place",
    contact_phone: "08165623144",
    contact_email: "lweippertn@zimbio.com",
  },
  {
    id: 25,
    row_number: 25,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "013 Sachtjen Road",
    contact_phone: "08129094243",
    contact_email: "sfalko@cbsnews.com",
  },
  {
    id: 26,
    row_number: 26,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "65183 Huxley Drive",
    contact_phone: "07034567123",
    contact_email: "obendep@prnewswire.com",
  },
  {
    id: 27,
    row_number: 27,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "2430 Melby Alley",
    contact_phone: "07034567123",
    contact_email: "dgiblingq@slideshare.net",
  },
  {
    id: 28,
    row_number: 28,
    emergency_detail: "Lagos State Fire Service",
    type: "Ambulance",
    address: "8 Burrows Avenue",
    contact_phone: "08129094243",
    contact_email: "jallchinr@dot.gov",
  },
  {
    id: 29,
    row_number: 29,
    emergency_detail: "Glory Memorial Hospital",
    type: "Fire Service",
    address: "63 Moland Plaza",
    contact_phone: "08129094243",
    contact_email: "fklejnas@bravesites.com",
  },
  {
    id: 30,
    row_number: 30,
    emergency_detail: "Lagos State Fire Service",
    type: "Fire Service",
    address: "49512 Kingsford Hill",
    contact_phone: "08165623144",
    contact_email: "tdoodt@thetimes.co.uk",
  },
];
