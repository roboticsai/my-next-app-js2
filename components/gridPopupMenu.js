import { useState } from "react"

export default function gridPopupMenu({displayName}){
    const [popUpStyle, setPopUpStyle] = useState("flex flex-row hidden fixed z1 w-100 h-100")

    function popupClicked() {
        console.log('Showing popup')
        setPopUpStyle("flex flex-row block fixed z1 w-100 h-100")
    }
    return (
    <>
        <button id="popUpBtn" onClick={popupClicked}>Menu</button>
        <div className={popUpStyle}>
            <div class="basis-1/4">01</div>
            <div class="basis-1/4">02</div>
            <div class="basis-1/2">03</div>
        </div>
    </>
    )
}