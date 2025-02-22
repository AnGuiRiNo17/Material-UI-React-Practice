import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider, Button } from "@mui/material";
import "./Objectos_Tienda.css";

function createDataBook(Category, Author, Title, Isbn, Price, InStock, Sold) {
  return { Category, Author, Title, Isbn, Price, InStock, Sold };
}

function createDataBicycle(Color, Price, InStock, Sold) {
  return { Color, Price, InStock, Sold };
}

const RowsBooks = [
  createDataBook("reference", "Nigel Rees", "Sayings of the Century", "0-553-3456-3", 8.95, true, true),
  createDataBook("fiction", "Evelyn Waugh", "Sword of Honour", "0-455-3346-3", 12.99, false, true),
  createDataBook("fiction", "Herman Melville", "Moby Dick", "0-553-21311-3", 8.99, true, false),
  createDataBook("fiction", "J. R. R. Tolkien", "The Lord of the Rings", "0-395-19395-8",22.99, false, false),
];

const RowsBicycles = [createDataBicycle("Red", 19.95, true, false)];

export default function Objectos_Tienda(props) {
  const [BookSelection, setBookSelection] = useState("");
  const [BicycleSelection, setBicycleSelection] = useState("");

  const handleChangeBook = (event) => {
    setBookSelection(event.target.value);
  };

  const handleChangeBicycle = (event) => {
    setBicycleSelection(event.target.value);
  };

  return (
    <div>
      <Divider />
      {props.TypeStore === "books" ? (
        <>
          <h1>Book's Store</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Author</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Isbn</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">In-Stock</TableCell>
                  <TableCell align="right">Sold</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...RowsBooks, ...props.books]
                  .filter((row) => !BookSelection || row.Title === BookSelection)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.Category}</TableCell>
                      <TableCell align="right">{row.Author}</TableCell>
                      <TableCell align="right">{row.Title}</TableCell>
                      <TableCell align="right">{row.Isbn}</TableCell>
                      <TableCell align="right">${row.Price.toFixed(2)}</TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={() => alert(`Stock disponible: ${row.InStock ? "Sí" : "No"}`)}
                          variant="contained"
                          color="primary"
                        >
                          Ver stock
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={() => alert(`Vendido: ${row.Sold ? "Sí" : "No"}`)}
                          variant="contained"
                          color="primary"
                        >
                          Ver vendido
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <>
          <h1>Bicycle's Store</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Color</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">In-Stock</TableCell>
                  <TableCell align="right">Sold</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...RowsBicycles, ...props.bicycles]
                  .filter((row) => !BicycleSelection || row.Color === BicycleSelection)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.Color}</TableCell>
                      <TableCell align="right">${row.Price.toFixed(2)}</TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={() => alert(`Stock disponible: ${row.InStock ? "Sí" : "No"}`)}
                          variant="contained"
                          color="primary"
                        >
                          Ver stock
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={() => alert(`Vendido: ${row.Sold ? "Sí" : "No"}`)}
                          variant="contained"
                          color="primary"
                        >
                          Ver vendido
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}
