import { BrowserRouter, Routes, Route } from "react-router";
import Feed from "../Feed";
import Episodes from "../../components/Episodes";

export default function Rotas(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Feed />}>
                    <Route path=''  element={<Episodes />} />
                </Route>       
            </Routes>
       </BrowserRouter>
    )
}