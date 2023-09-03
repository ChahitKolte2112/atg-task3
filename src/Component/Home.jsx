import React from "react";
import ProfileList from "./ProfileList";
import Profile from "./Profile";
const Home = () => {
    return (
        <div
            style={{
                display: "flex",

                justifyContent: "space-around",
            }}
        >
            <div
                style={{
                    width: "30%",
                    background: "#edf0f0",
                    marginTop: "10px",
                }}
            >
                <div
                    style={{
                        margin: "0",
                        textAlign: "center",
                        width: "100%",
                        backgroundColor: "#abe9f7",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        overflow: "hidden",
                    }}
                >
                    <h2 style={{ margin: "0px", padding: "10px" ,fontWeight:400 }}>
                        User List
                    </h2>
                </div>
                <ProfileList />
            </div>
            <div
                style={{
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "sticky",
                    top: "0",
                    height: "100vh",
                }}
            >
                <Profile />
            </div>
        </div>
    );
};

export default Home;
