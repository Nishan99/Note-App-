import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { deepOrange, lightGreen } from "@mui/material/colors";
import Layout from "./components/Layout";
import Edit from "./pages/Edit";

const theme = createTheme({
  palette: {
    primary: lightGreen,
  },
  typography: {
    fontFamily: "Quicksand",
    fontSize: 18,
  },
});

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Notes />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit/>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
