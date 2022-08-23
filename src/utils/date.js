export const getCurrentDateTime = () => {
    let currentDate = new Date()
    return setPadStart(currentDate.getDate()) + '/' +
            setPadStart(currentDate.getMonth() + 1) + '/' + 
                setPadStart(currentDate.getFullYear(), 4) + ' ' + 
                    setPadStart(currentDate.getHours()) + ":" + 
                        setPadStart(currentDate.getMinutes()) + ":" +
                            setPadStart(currentDate.getSeconds());

}

const setPadStart = (text, qtd = 2) => {
    return text.toString().padStart(qtd, '0')
}