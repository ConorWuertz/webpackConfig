import React from "react"
import moonJPG from "../assets/moon.jpg"
import moonJPEG from "../assets/moon.jpeg"
import stickFigure from "../assets/stickfigure.png"
import breakdancers from "../assets/breakdancers.gif"

class DummyComponent extends React.Component {

    render() {

        return (<>
                    <div className="dummyComponent">
                    Hello world
                </div>
                <img src={moonJPG} alt="not found" />
                <img src={moonJPEG} alt="not found" />
                <img src={stickFigure} alt="not found" />
                <img src={breakdancers} alt="not found" />
            </>)
    }
}

export default DummyComponent;