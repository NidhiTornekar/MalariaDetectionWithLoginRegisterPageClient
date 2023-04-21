import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunctionMobile } from "../services/Apis";
import Spinner from 'react-bootstrap/Spinner';
import "../styles/mix.css"
const  Loginotp= () => {
    const [pnumber, setPnumber] = useState("");
    const [spiner,setSpiner] = useState(false);
    const navigate = useNavigate();
    const sendOtpMobile = async (e) => {
        e.preventDefault();
        if (pnumber === "") {
            toast.error("Enter Your Phone number!")
        } 
        else {
            setSpiner(true)
            const data = {
                pnumber: pnumber
            }
            navigate("/user/otpmobile",{state:pnumber})
            const response = await sentOtpFunctionMobile(data);

            if (response.status === 400) {
                toast.error(response.response.data.error);
            } else {
                setSpiner(false)
            }
        }
    }
    
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Log In</h1>
                        <p style={{textAlign:"center",color:"blue"}}>Login using the registered mobile</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="pnumber">Mobile</label>
                            <input type="tel" name="pnumber" id=""  onChange={(e) => setPnumber(e.target.value)} placeholder='Mobile number' />
                        </div>
                        <button className='btn' onClick={sendOtpMobile}>Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                        <p style={{textAlign:"center",color:"black"}}>Don't have an account <NavLink to="/register" style={{textAlign:"center",color:"black"}}>Sign up</NavLink> </p>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Loginotp