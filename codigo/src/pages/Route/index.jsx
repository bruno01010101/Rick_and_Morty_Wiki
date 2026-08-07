import { BrowserRouter, Routes, Route } from "react-router";
import Feed from "../Feed";
import Episodes from "../../components/Episodes";
import DetailsPage from "../DetailsPage";
import Characters from "../../components/Characters";
import DetailsPageCharacter from "../DetailsPageCharacter";

export default function Rotas(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Feed />}>
                    <Route path=''  element={<Episodes />} />
                    <Route path='episode/:name'  element={<DetailsPage />} />
                    <Route path='characters'  element={<Characters />} />
                    <Route path='characters/:id'  element={<DetailsPageCharacter />} />
                </Route>       
            </Routes>
       </BrowserRouter>
    )
}