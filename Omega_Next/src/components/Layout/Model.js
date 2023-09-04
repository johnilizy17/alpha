import React, { useEffect, useState } from 'react';

export default function Model({ display, setDisplay, children }) {

    return (
        <div className="wallet_container" style={display ? {} : { display: "none" }}>
            {children}
        </div>
    )
}