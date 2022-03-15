import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ListsHome, ListPage, CreateListScreen, EditList} from "./screens";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListsHome />}/>
        <Route path="/lists/:list" element={<ListPage />}/>
        <Route path="/create-list" element={<CreateListScreen />}/>
        <Route path="/edit-list/:list" element={<EditList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
