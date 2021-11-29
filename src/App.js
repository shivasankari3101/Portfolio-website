import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Portfolio from "./pages/Porfolio/Portfolio";
import Project from "./pages/Project/Project";
import Layout from "./Layout/Layout";

const routes =[
  {path:"/", name:"portfolio", Component:Portfolio},
  {path:"/projects/:domain", name:"project", Component:Project},
]

function App() {
  return (
   <Router>
     <Layout>
     <Routes>
       {routes.map(({path,name,Component})=>{
         return(
           <Route path={path} key={name} element={<Component/>}></Route>
         )
       })}
     </Routes>
     </Layout>
   </Router>
      
  );
}

export default App;
