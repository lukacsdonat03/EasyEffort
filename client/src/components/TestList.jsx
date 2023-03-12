import React from "react";

export const TestList = () => {
  const data = [
    {
      event_time: Date(),
      item_name: "apple",
      total_calorie: 123,
      carbohydrate: 10,
      protein: 2,
      fat: 3,
      amount: 81,
    },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Item</th>
            <th>Cal</th>
            <th>Carbs</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Amount/Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val,index) => {
            console.log(val);
            <tr key={index}>
              <td >{val.event_time}</td>
              <td >{val.item_name}</td>
              <td >{val.total_calorie}</td>
              <td >{val.carbohydrate}</td>
              <td >{val.protein}</td>
              <td >{val.fat}</td>
              <td >{val.amount}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
};
