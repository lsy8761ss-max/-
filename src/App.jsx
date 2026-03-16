import { useState } from "react";

export default function App(){

const [user,setUser]=useState(null)

const login=()=>{
setUser("user")
}

if(!user){
return(

<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#f1f5f9"}}>

<div style={{background:"white",padding:40,borderRadius:10,width:300}}>

<h2 style={{textAlign:"center"}}>Budget Tracker</h2>

<input placeholder="Email" style={{width:"100%",padding:10,marginTop:20}}/>

<input placeholder="Password" type="password" style={{width:"100%",padding:10,marginTop:10}}/>

<button onClick={login} style={{width:"100%",marginTop:20,padding:10,background:"#6366f1",color:"white"}}>
Login
</button>

</div>

</div>

)
}

return(

<div style={{padding:40}}>

<h1>Budget Tracker Dashboard</h1>

<div style={{display:"flex",gap:20,marginTop:20}}>

<div style={{background:"#e0f2fe",padding:20,borderRadius:10}}>
<h3>Income</h3>
<p>$0</p>
</div>

<div style={{background:"#fee2e2",padding:20,borderRadius:10}}>
<h3>Expense</h3>
<p>$0</p>
</div>

<div style={{background:"#dcfce7",padding:20,borderRadius:10}}>
<h3>Balance</h3>
<p>$0</p>
</div>

</div>

</div>

)

}
