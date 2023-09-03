import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataActions } from "../redux/persondetailsSlice";
const ProfileItem = (props) => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(dataActions.adddata(props.details));
    };
    const [load, setLoader] = useState(false);

    useEffect(() => {
        const image = async () => {
            try {
                const result = await axios.get(props.image_url);
                if (result) {
                    setLoader(false);
                }
            } catch (error) {
                setLoader(true);
            }
        };
        image();
    }, []);

    return (
        <div
            style={{
                margin: "10px",
                background: "grey",
                padding: "5px",
                cursor: "pointer",
                borderRadius: "5px",
            }}
            onClick={clickHandler}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <img
                    src={!load ? props.image_url : avatar}
                    style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "50%",
                        marginRight: "8px",
                    }}
                />
                <div>
                    <p style={{ fontSize: "20px", fontWeight: 400 }}>
                        {props?.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileItem;
