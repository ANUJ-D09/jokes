const jokes = async() => {
    try {
        const fetchjokes = await fetch('https://official-joke-api.appspot.com/random_joke', {
            headers: {
                accept: "application/json"
            }
        });
        const joke = await fetchjokes.json();
        document.getElementById('jc').innerHTML = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        console.log(error);
    }
}

document.getElementById('jocklisten').addEventListener("click", jokes);