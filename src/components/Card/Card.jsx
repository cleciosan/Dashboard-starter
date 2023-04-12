import React, {useState} from 'react'
import './Card.css'
import { AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Card = (props) => {

    const [expanded, setExpanded] = useState(false)

    return (
        <AnimateSharedLayout>
            {
                expanded? (
                    <ExpandedCard/>
                ):
                <CompactCard param = {props} set/>
            }
        </AnimateSharedLayout>
    )
}

// ExpandedCard
function ExpandedCard ({param}){
    
    return(
        <div className="ExpandedCard">
            <div className="radialBar">
                Chart
            </div>
            <div className="detail">

            </div>
        </div>
    )
}

// CompactCard
function CompactCard ({param}){
    const Png = param.png;
    return(
        <div className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>R$ {param.value}</span>
                <span>Últimas 24 horas</span>
            </div>
        </div>
    )
}

export default Card