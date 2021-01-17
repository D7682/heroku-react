import React from 'react';

export default function Home(props) {
    return(
        <>
        <div className="flex">
                <h1 className="title">{props.title}</h1>
                <div className="card">
                    <div className="card-content">
                        <p>
                            This is a react router test, and this is text that is being used in the route
                            of the /home page.
                        </p>

                        <p>
                            This is another paragraph in the react router page on the home page of this 
                            app.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <p>
                            This is another card with some more content inside of it.
                        </p>

                        <p>
                            I am just testing out some more css and html on the front end of this React App,
                            it is actually quite fun to test this stuff out.
                        </p>
                    </div>
                </div>
        </div>
        </>
    )
}