import React, { useState, useEffect } from "react"
import { getChild, getParent } from "../shared/contractDeploy";


const ProfileComponent = () => {
    const [user, setUser] = useState();

    const getUser = async () => {
        const parentProfile = await getParent();
        const childProfile = await getChild();
        setUser(parentProfile.firstName != "" ? parentProfile : childProfile);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div style={{ textAlign: "center", margin: "10px", width: "15%" }}>
            <img src={require("../pages/Parent/image.png")} width="150px" height="150px" />
            <h4>{user != undefined ? user.firstName : ""} {user != undefined ? user.lastName : ""}</h4>
            <div style={{ height: "7px", backgroundColor: "white", borderRadius: 5 }} />
        </div>
    )
}

export default ProfileComponent;