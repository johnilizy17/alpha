import React from 'react';

export default function Footer({toggle}) {
    return (
        <div className='footer' style={toggle ? {}: { width: "calc(100% - 90px)" }} >
            <center className='footer_container'>
            Copyright © 2023 Regiz LLC. All rights reserved
            </center>
        </div>
    )
}