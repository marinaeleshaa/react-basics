import { IUserData } from "../interfaces"

 interface IProps {
    user :IUserData
 }
 
 const UserDetails =({user}:IProps)=>{
    return (
        <div style={{margin:20}}>
            <h3>username:{user.userName}</h3>
            <h3>email:{user.email}</h3>
            <h3>address:{user.address}</h3>
        </div>
    )
 }

 export default UserDetails