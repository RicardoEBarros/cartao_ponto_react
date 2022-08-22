import React from 'react'
import ButtonNew from '../components/Buttons/ButtonNew'
import TimeCardProvider from '../components/Context/TimeCardContext'
import DialogTimeCard from './DialogTimeCard'

export default function TimeCard() {
    return (
        <TimeCardProvider>
            <ButtonNew />
            <DialogTimeCard />
        </TimeCardProvider>
    )
}