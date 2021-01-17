import React from 'react';

export default function Users(props) {
    return(
        <>
        <div className="flex">
            <h1 className="title">{props.title}</h1>

            <div className="card">
                <div className="card-content">
                    <p>
                        This is a card that is being tested on the /users route with React and the 
                        React router library I downloaded online.
                    </p>

                    <p>
                        heres another paragraph that I implemented onto this app. This is a paragraph inside of a 
                        divider named card-content that has these two p tags inside of them.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-content">
                    <p>
                        Here's another p tag inside of a divider with the className of "card-content."
                    </p>

                    <p>
                        The "card-content" class was the one that was styled to have the background be 
                        a color of purple or whatever you could describe it as.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}