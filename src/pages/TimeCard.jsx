import React from 'react'
import ButtonNew from '../components/Buttons/ButtonNew'
import DialogDataProvider from '../components/Context/DialogContext'
import TimeCardProvider from '../components/Context/TimeCardContext'
import DialogTimeCard from './DialogTimeCard'

export default function TimeCard() {
    return (
        <TimeCardProvider>
            <ButtonNew />
            <DialogDataProvider>
                <DialogTimeCard />
            </DialogDataProvider>
        </TimeCardProvider>
    )
}