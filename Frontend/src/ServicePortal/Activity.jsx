import ServiceHeader from "./ServiceHeader";
import { useEffect, useState } from "react";
import { getRegistered, getURL, putURL, Register, UnRegister } from './../Server/backendComs'
import { signIn } from './../Authentication'
import './css/Activity.css'
import { useNavigate } from "react-router-dom";

function Activity({name}) {
    const thisArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const [reg, setReg] = useState({name : "", group : -1})
    const navigate = useNavigate();
    useEffect(() => {
        getURL().then(url => {
            if(name == "Hackathon") {
                if(url != "/sign-up/Hackathon") {
                    putURL("/sign-up/Hackathon");
                    signIn(); 
                }
            } else {
                if(url != "/sign-up/Alexander") {
                    putURL("/sign-up/Alexander");
                    signIn(); 
                }
            }
        })
        getRegistered().then(registered => {
            setTimeout(() => setReg(registered), 1000);
        })
    })
    return (
        <>
            <ServiceHeader owner={"Activities;" + name} subdirectory={true}/>

            <div className="activityContainer">
                <h1 className="activityTitle">{name}</h1>
                
                <p className="groups-text">
                    Presentation Sign Up
                </p>

                <div className="registration-section">
                    <span className="label">Signup Dates</span>
                    <p className="date-text">2026-02-22 13:00 - 2026-02-22 15:00</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h2>Signup</h2>
                    </div>
                    
                    <div className="card-body">
                        <div className="info-column">
                            <span className="label">Place</span>
                            <p className="value">Studenthuset</p>
                        </div>
                        <div className="info-column">
                            <span className="label">Signups</span>
                            <p className="value">10 / 0</p>
                        </div>
                    </div>
                    <table style={{width: "100%"}}>
                        <thead className="group-header">
                            <tr>
                                <th style={{width: "30%"}}>Group</th>
                                <th>Member Name</th>
                            </tr>
                        </thead>
                        <tbody className="group-column">
                            {thisArray.map(element => {
                                return (
                                    <tr className="Group">
                                        <td style={{width: "30%"}}>{element}</td>
                                        <td style={{width: "50%"}}>Someone idk</td>
                                    </tr>
                                )
                            })}
                            {reg.group == -1 ? (
                                <tr className="Group">
                                    <td id="btnSignup">
                                        <button onClick={() => {Register();navigate("/spec");}}>Signup</button>
                                        <button>Signup other</button>
                                    </td>
                                </tr>
                            ) : (
                                <tr className="Group">
                                    <td style={{width: "30%"}}>{reg.group}</td>
                                    <td style={{width: "50%"}}>{reg.name}</td>
                                    <td><button id="Remove" onClick={() => {UnRegister();}}>Remove Me</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Activity;