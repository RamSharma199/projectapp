import { useSelector } from "react-redux";
import Firstpage from "./component/First-page/Firstpage";
import Secondpage from "./component/secondpage/Secondpage";
import { Routes, Route} from "react-router-dom";
import {useEffect} from "react"
function App() {


  interface UserState {
    name: string;
    phone: number;
    email: string;
  }

  type RootState = {
    user: UserState; // Assuming 'user' is the reducer key
    // Other reducers...
  };
  const users = useSelector((state: RootState) => state.user);
  useEffect(()=>{
    {users.name && users.phone && users.email?<Secondpage/>:<Firstpage/>}
  },[])
  
  return (
    <div>
      <Routes>
          <Route path="/Secondpage" element={<Secondpage />} />
          <Route path="/" element={<Firstpage />} />
        
      
      </Routes>
    </div>
  );
}

export default App;
