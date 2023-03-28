function useLocalStorage(key) {
    const getItem = () => {
        const dataStorage = JSON.parse(localStorage.getItem(key)) || {}
        return dataStorage
    }

    const setItem = (objSet) => {
        Object.assign(dataStorage, objSet)

        const jasonData = JSON.stringify(dataStorage)

        return localStorage.setItem(key, jasonData)
    }

    const dataStorage = getItem()

    return [dataStorage , setItem
}

export default useLocalStorage;