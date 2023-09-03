import React from "react";
import avatar from "../assets/avatar.svg";
import { useSelector } from "react-redux";
const Profile = () => {
    const data = useSelector((state) => state.details.data);
    console.log(data);
    return (
        <>
            <div style={{ borderRadius: "10px", background: "#edf0f0" }}>
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
                    <h2
                        style={{
                            margin: "0px",
                            padding: "10px",
                            fontWeight: 400,
                        }}
                    >
                        User Details
                    </h2>
                </div>
                {data === null ? (
                    <h2 style={{ textAlign: "center" }}>
                        Click the UserList For Details
                    </h2>
                ) : (
                    <div
                        style={{
                            padding: "10px",
                            boxSizing: "border-box",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {" "}
                        <div style={{ width: "55%" }}>
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={data?.avatar}
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                    }}
                                />
                            </div>
                            <p style={{ textAlign: "center" }}>
                                {"@" + data?.profile.username}
                            </p>
                            <p
                                style={{
                                    width: "100%",
                                    background: "grey",
                                    padding: "10px",
                                    borderRadius: "7px",
                                    margin: "25px 0px",
                                }}
                            >
                                {data?.Bio}
                            </p>
                            <div>
                                <span
                                    style={{ fontSize: "15px", padding: "5px" }}
                                >
                                    FullName
                                </span>
                                <p
                                    style={{
                                        width: "100%",
                                        background: "grey",
                                        padding: "8px",
                                        borderRadius: "7px",
                                        marginTop: "3px",
                                    }}
                                >
                                    {`${data?.profile?.firstName}` +
                                        " " +
                                        `${data?.profile?.lastName}`}
                                </p>
                            </div>
                            <div>
                                <span
                                    style={{ fontSize: "15px", padding: "5px" }}
                                >
                                    Job Title
                                </span>
                                <p
                                    style={{
                                        width: "100%",
                                        background: "grey",
                                        padding: "8px",
                                        borderRadius: "7px",
                                        marginTop: "3px",
                                    }}
                                >
                                    {data?.jobTitle}
                                </p>
                            </div>
                            <div
                                style={{
                                    width: "100%",
                                    overflowWrap: "break-word",
                                }}
                            >
                                <span style={{ padding: "5px" }}>Email</span>
                                <p
                                    style={{
                                        width: "100%",
                                        background: "grey",
                                        padding: "8px",
                                        borderRadius: "7px",
                                        marginTop: "3px",
                                    }}
                                >
                                    {data?.profile?.email}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;
