function SuggestVideo({ data }) {
    const handleTest = () => {
        console.log(data);
    };
    return <button onClick={handleTest}>Test 2</button>;
}

export default SuggestVideo;
