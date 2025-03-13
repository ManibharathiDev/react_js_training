import First from './first';
import Second from './second';
const Conditional = (props) =>{
    if(props.first == "true")
    {
        return <First/>
    }
    else
    {
        return <Second/>
    }
}
export default Conditional;