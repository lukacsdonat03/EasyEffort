import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export const CalorieList = () => {
  const [dataGridRows, setDataGridRows] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/products/all/12").then((res) => {
      res.data.forEach((element) => {
        setDataGridRows(...dataGridRows, {
          id: element.key,
          date: element.event,
          name: element.name,
          totalCalorie: element.totalCalorie,
          carbohydrate: element.carbohydrate,
          protein: element.protein,
          fat: element.fat,
          amount: element.amount,
        });
      });
    });
  });

  const columns = [
    { field: "date", headerName: "Date", width: 150 },
    { field: "name", headerName: "Product", width: 100 },
    { field: "totalCalorie", headerName: "Calorie", width: 100 },
    { field: "carbohydrate", headerName: "Carbohydrate", width: 100 },
    { field: "protein", headerName: "Protein", width: 100 },
    { field: "fat", headerName: "Fat", width: 100 },
    { field: "amount", headerName: "Weight", width: 100 },
  ];

  return (
    <div className="calorie-list-container">
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid rows={dataGridRows} columns={columns} />
      </div>
    </div>
  );
};
