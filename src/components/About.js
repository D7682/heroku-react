import React from 'react';

export default function About(props) {
    return(
        <>
        <div className="flex">
            <h1 className="title">{props.title}</h1>
            <div className="card">
                <div className="card-content">
                    <p>
                        This is some random stuff I wrote on the /about page
                        since I do not actually have anything to write about anymore.
                    </p>

                    <p>
                        If you want to check out how I styled these paged in a specific way
                        you can check out the /users page.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}