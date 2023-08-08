import { createContext} from "react";
import shoesList from "../shoesList.json"

const ShoesContext = createContext(shoesList)

export default ShoesContext

