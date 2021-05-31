import cakelist from './Data';
import Cake from './Cake';
function Cakelist(){
    
    return (
        <div className="row pl-4">
            { cakelist.map((each,index)=>{
                return (<Cake cake={each} key={index}></Cake>)
            })}
        </div>
        
    )
}
export default Cakelist