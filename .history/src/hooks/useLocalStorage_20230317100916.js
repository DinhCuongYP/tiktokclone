function useLocalStorage(key) {
    const getItem = () => {
        const dataStorage = JSON.parse(localStorage.getItem(key)) || {}
        return dataStorage
    }

    
    return (  );
}

export default useLocalStorage;