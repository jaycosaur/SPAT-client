import React from 'react'

export default (props) => 
    <div className="mac-window-container" 
        style={{
            width: "100%",
            padding: 0, 
            margin: 20, 
            borderRadius: 4, 
            background: "rgb(236,236,236)",
            boxShadow: "rgba(0,0,0,0.31) 0px 0px 1px, rgba(0,0,0,0.18) 0px 0px 5px, rgba(0,0,0,0.3) 0px 8px 50px"}}>
        <div className="mac-window-headerbar" 
            style={{
                background: "rgb(246,246,246)",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                boxSizing: "border-box",
                padding: "0px 3px",
                borderBottom: "1px solid rgb(209,209,209)",
                borderTop: "1px solid rgb(246,246,246)",
                height: "22px",
                display: "flex",
                alignItems: "center",
                width: "100%"}}>
            <div style={{display: "flex", alignItems: "center", width: 60}}>
                <HeaderIcon type="close"/>
                <HeaderIcon type="minimize"/>
                <HeaderIcon type="maximize"/>
            </div>
            <div style={{
                flexGrow: 1,
                flexShrink: 1,
                textAlign: "center",
                fontSize: 13,
                letterSpacing: 0,
                color: "rgb(211,211,211)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                paddingRight: 60
            }}>
                {props.title}
            </div>
        </div>
        <div className="mac-window-body-container">
            <div className="mac-window-body">
                {props.children}
            </div>
        </div>
    </div>

const headerIconStyle = {
    close: {
        background: "rgb(255,95,87)", 
        border: "1px solid rgb(226, 70, 63)"
    },
    minimize: {
        background: "rgb(255,189,46)", 
        border: "1px solid rgb(225,161,22)"
    },
    maximize: {
        background: "rgb(40,201,64)", 
        border: "1px solid rgb(18,172,40)"
    }
}

const HeaderIcon = (props) =>
    <div 
        style={{
            boxSizing: "border-box",
            marginLeft: 4, 
            marginRight: 4, 
            lineHeight: 0, 
            width: 12, 
            height: 12, 
            borderRadius: "50%", 
            ...headerIconStyle[props.type]}} />