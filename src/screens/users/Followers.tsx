import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  idOfMyUser:number;
}

function Followers(){
  const {idOfMyUser} = useOutletContext<IFollowersContext>();

  return <h1>Here are user id {idOfMyUser}의 follower</h1>
}

export default Followers;