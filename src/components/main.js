import React, { Component } from "react";
import Info from "./Info";
import Education from "./education";

class Main  extends Component {
    constructor(props){
        super(props);
    }
render() {
    return (
        <div>
            <Info />
            <Education />
        </div>
    )
}
}

export default Main