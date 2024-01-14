import axios from "axios";

 export async function logout() {

    const result = await axios.post('/api/users/logout')
    .then((res) => res.data)
    
    return result; 
 }