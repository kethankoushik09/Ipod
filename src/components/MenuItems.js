import React from "react";

class MenuItems extends React.Component{
    render(){
        const {options,selectOption} = this.props
        console.log("menu ...................................");
        
        return(
            <>
            <div className="menu-items">
                {options.map((item,indx)=>
                    <>
                        <div className={selectOption == indx?"select":""} key={indx}>
                            <h2  >{item}</h2>
                        </div>
                        <hr/>
                    </>)
    
                }
            </div>
            </>
        )
    }
}
export default MenuItems;