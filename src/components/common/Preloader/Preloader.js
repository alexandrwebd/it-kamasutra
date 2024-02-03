import preloader from "../../../assets/images/Spinner-1s-200px.svg";
import React from "react";

const Preloader = (props) => {
    return <div style={ {backgroundColor: 'white'} }>
        <img src={preloader} alt="Preloader" />
    </div>
}

export default Preloader