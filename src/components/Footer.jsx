import React from "react"

var date=new Date();
var yea=date.getFullYear();

function Footer(){
    return <footer><p>copyright@{yea}</p></footer>
}

export default Footer;