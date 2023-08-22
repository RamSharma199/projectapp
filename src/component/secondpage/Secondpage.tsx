import {useState, useEffect} from "react"

import Box from '@mui/material/Box';
import { TfiPlus ,TfiLayoutLineSolid ,TfiCheck} from "react-icons/tfi";
import "./secondpage.css";
import { useSelector } from "react-redux";
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

function Secondpage() {
  interface UserData {
    name: string;
    phone: number;
    email: string;
  }


  type RootState = {
    user: UserData; // Assuming 'user' is the reducer key
    // Other reducers...
  }
  const users = useSelector((state: RootState) =>state.user);
const navigate = useNavigate()
useEffect(()=>{
if(!users.name){
  navigate("/") 
}
},[])


interface Department {
  department: string;
  sub_departments: string[];
}
      
   
        const departments: Department[] = [
          {
            department: "Customer service",
            sub_departments: [ "support","customer_success"]
          },
          {
            department: 'Design',
            sub_departments: [ "graphic_design" ,"product_design", "web_design"],
          },
          // Add more departments...
        ];
      
        const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);
      
        const toggleDepartment = (departmentName: string) => {
          if (expandedDepartments.includes(departmentName)) {
            setExpandedDepartments(prevState =>
              prevState.filter(name => name !== departmentName)
            );
          } else {
            setExpandedDepartments(prevState => [...prevState, departmentName]);
          }
        };
  
      


const [detail , setDetail] = useState<User[]> ([])

interface User {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
      field: 'userId',
      headerName: 'User Id',
      width: 70,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Descrption',
      width: 280,
      editable: true,
    },
    {
        field: 'body',
        headerName: 'Descrption',
        width: 800,
        editable: true,
      },
    
  ];
  

useEffect(()=>{
const getuser = async()=>{
try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     const data = await res.json()
    setDetail(data as User[])
  
} catch (error) {
    
}
}
getuser()
},[])





  return (
    <div>

<Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={detail}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      
        pageSizeOptions={[20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
{
  departments.map(department => (
    <div key={department.department} className="wrapper">
              <h2>{department.department}</h2>
              <span>Expand All</span>
      <div onClick={() => toggleDepartment(department.department)} className="toggleMenu" >

        <button className="btn">{expandedDepartments.includes(department.department) ?  <TfiPlus className="btnIcon"/> : <TfiLayoutLineSolid  className="btnIcon"/>}</button>
 <div>
<div>
        {expandedDepartments.includes(department.department) && (
        <ul>
          {department.sub_departments.map(subDept => (
            <li key={subDept}>  <TfiCheck className="listIcon"/>{subDept}</li>
          ))}
        </ul>
      )}
      </div>
        </div>   
      </div>


    
    </div>
  ))
}

    </div>
  )
}

export default Secondpage
