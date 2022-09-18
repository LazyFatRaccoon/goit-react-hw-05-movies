import { Div,P } from "components/Wrappers/Wrappers";
import { Link } from "react-router-dom";


const AdditionalInfo = () => { 
    return (
        <Div borderBottom='1px solid'>
            <P>Additional information</P>
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Reviews</Link></li>
            </ul>
        </Div>
    )
}

export default AdditionalInfo;