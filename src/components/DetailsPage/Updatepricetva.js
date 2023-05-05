import React from "react";

function Updatepricetva (props) {
    return (
        <div className="tva-update" >
            Price (including VAT): {props.price * 1.2} €
        </div>
    );
}

export default Updatepricetva;