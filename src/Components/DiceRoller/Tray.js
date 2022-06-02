import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import D20 from "./D20"


const Tray = () => {
    return (
        <Container className = "tray">
            <D20/>
        </Container>
    )
}
export default Tray;