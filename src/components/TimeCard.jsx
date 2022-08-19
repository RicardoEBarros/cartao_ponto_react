import React from 'react'
import ButtonNew from './Buttons/ButtonNew'
import TimeCardProvider from './Context/TimeCardContext'
import DialogTimeCard from './DialogTimeCard'

export default function TimeCard() {
    return (
        <TimeCardProvider>
            <ButtonNew />
            <DialogTimeCard />
        </TimeCardProvider>
    )
}