import { BrowserRouter, Routes, Route } from "react-router";
import Feed from "../Feed";
import Episodes from "../../components/Episodes";
import DetailsPage from "../DetailsPage";
import Characters from "../../components/Characters";

export default function Rotas(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Feed />}>
                    <Route path=''  element={<Episodes />} />
                    <Route path='characters'  element={<Characters />} />
                    <Route path='episode/:name'  element={<DetailsPage />} />
                </Route>       
            </Routes>
       </BrowserRouter>
    )
}