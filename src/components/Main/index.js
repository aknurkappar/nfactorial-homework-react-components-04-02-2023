import "./index.css";
import { dataFromAPI } from "../../data/NewList" 
import News from "./News";


function Main() {

    return(
    <div className="Main">
        {dataFromAPI.map((item, index) => (
            <News content = {item} key={index} />
        ))}
    </div>  
    )
}

export default Main;