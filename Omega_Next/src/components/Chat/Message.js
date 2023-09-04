import React from 'react';
import Moment from 'react-moment';

export default function Message({ message }) {


    return (
        <div className="chat__message">
            {
                message.map((data) => (
                    <>
                        {
                            data.type === 2 ?
                                <div className="chat_receive" >
                                    {data.message}
                                    <div className="chat__time">
                                        <Moment fromNow>
                                            {data.createdAt}
                                        </Moment>

                                    </div>
                                </div>
                                :
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div></div>
                                    <div className="chat_send">
                                        {data.message}
                                        <div className="chat__time">
                                            <Moment fromNow>
                                                {data.createdAt}
                                            </Moment>

                                        </div>
                                    </div>
                                </div>
                        }
                    </>
                ))}
        </div>
    )
}