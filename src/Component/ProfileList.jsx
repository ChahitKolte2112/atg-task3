import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileItem from "./ProfileItem";
import { useDispatch } from "react-redux";
import { loaderAction } from "../redux/loaderSlice";
const ProfileList = () => {
    const [data, setData] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchdata = async () => {
            const result = await axios.get(
                "https://602e7c2c4410730017c50b9d.mockapi.io/users"
            );
            const datax = result.data.slice(15, 35);
            console.log(datax);
            setData(datax);
            dispatch(loaderAction.setLoader(false));
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
                        image_url={item?.avatar}
                        details={item}
                    />
                );
            })}
        </div>
    );
};

export default ProfileList;
