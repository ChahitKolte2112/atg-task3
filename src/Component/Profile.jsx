import React from "react";
import avatar from "../assets/avatar.svg";
const Profile = (props) => {
    return (
        <div>
            <div>
                <div>
                    <img
                        src={
                            props.item?.image_url ? props.item?.image_url : avatar
                        }
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                        }}
                    />
                </div>
                <div>
                    <span>FullName</span>
                    <p>{props.item?.name}</p>
                </div>
                <div>
                    <span>Job Title</span>
                    <p>{props.item?.jobTitle}</p>
                </div>
                <div>
                    <span>Email</span>
                    <p>{props.item?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
