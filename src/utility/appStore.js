const getStoredApp = () => {
    const storedAppSTR = localStorage.getItem("appList")

    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR)
        return storedAppData
    }

    else {
        return []
    }
}

const addStoredApp = (id) => {
    const storedAppData = getStoredApp ()
    const numberId =  Number(id)

    if (storedAppData.includes(numberId)) {
        return false
    }

    else{
        storedAppData.push(numberId)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("appList",data)

    }
}

export {addStoredApp,getStoredApp}