import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileItem from "./ProfileItem";
const ProfileList = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchdata = async () => {
            const result = await axios.get(
                "https://602e7c2c4410730017c50b9d.mockapi.io/users"
            );
            setData(result?.data);
        };
        fetchdata();
    }, []);

    return (
        <div>
            {data?.map((item, index) => {
                return (
                    <ProfileItem
                        key={index}
                        name={
                            `${item.profile.firstName}` +
                            " " +
                            `${item.profile.lastName}`
                        }
                        image_url={item.avatar}
                        details={item}
                    />
                );
            })}
        </div>
    );
};

export default ProfileList;
