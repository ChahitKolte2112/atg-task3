import React from "react";
import ProfileList from "./ProfileList";
import Profile from "./Profile";
const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                border: "2px solid black",
                justifyContent:"space-around"
            }}
        >
            <div>
                <ProfileList />
            </div>
            <div>
                <Profile />
            </div>
        </div>
    );
};

export default Home;
