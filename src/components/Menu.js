import React from "react";
import MenuItems from "./MenuItems";
class Menu extends React.Component{
    render(){
        const {options,selectOption} = this.props;
        return(
            <>
                <div className="menu-container">
                    <div className="ipod-menu">
                        <h3 >React ipod</h3>
                        <hr/>
                    </div>
                    <MenuItems 
                        options = {options}
                        selectOption ={selectOption}
                    />
                    {options.length === 3?
                    <div style={{color:'red'}}>
                        <p>click <i className="fa-solid fa-backward"></i> to go back..!</p>

                    </div>:null}
                </div>
                
                
            </>
        )
    }

}
export default Menu