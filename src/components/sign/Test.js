import { useState } from "react";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';function ShowAndHidePassword(){

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(

        <div className="row">
            <div className="col-sm-3">
                <div className="input-group my-4 mx-4">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <VisibilityOffIcon/> :<VisibilityOffIcon/> }
                     </button>
                    </div>
                </div>
                
            </div>
      </div>
      
    )

}
export default ShowAndHidePassword;