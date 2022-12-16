import React, {Component} from "react";
import Info from "./components/Info";

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
      return  (
            <div>
                <Info />
            </div>
        )
    }
}

export default App