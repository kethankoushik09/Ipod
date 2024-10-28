import React from "react";
class Button extends React.Component{
    render(){
        const {menu,selectBtn,backBtn,forBtn,pp} = this.props
        return(
            <>
                <div className="button-container">
                    <div className="center-btn" onClick={selectBtn}>
                        <p>select</p></div>
                    <div className="menu" onClick={menu}><i className="fa-solid fa-bars"></i></div>
                    <div className="backward" onClick={backBtn}><i className="fa-solid fa-backward"></i></div>
                    <div className="forward" onClick={forBtn}><i className="fa-solid fa-forward"></i></div>
                    <div className="pp" onClick={pp}>
                        <i className="fa-solid fa-play"></i>
                        <i className="fa-solid fa-pause"></i>
                    </div>
                </div>
            </>
        )
    }

}
export default Button;