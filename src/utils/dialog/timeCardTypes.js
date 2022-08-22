export const timeCardTypes = [
    { index: 1, name: "Início Expediente" },    
    { index: 2, name: "Início Intervalo" },    
    { index: 3, name: "Fim Intervalo" },    
    { index: 4, name: "Fim Expediente" }
]

export const getTimeCardType = (currentValue) => {
    return timeCardTypes.filter(el => {
        return el.index === currentValue.typeId
    })[0]['name']
}