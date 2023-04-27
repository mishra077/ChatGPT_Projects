const API_KEY = "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";

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Hello, how are you?",
            max_tokens: 7
        })
    });

    try {
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchData();