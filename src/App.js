import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Portfolio from "./pages/Porfolio/Portfolio";
import Project from "./pages/Project/Project";
import Layout from "./Layout/Layout";

function App() {
  return (
   <Router>
     <Layout>
     <Routes>
       <Route path="/" element={<Portfolio/>}></Route>
       <Route path="/projects/:domain" element={<Project/>}></Route>
     </Routes>
     </Layout>
   </Router>
      
  );
}

export default App;
