export async function getQuote() {

    const url = 'https://quotes.rest/qod?language=en'
    let init = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    try {
        let response = await fetch(url, init);

        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return err;
    }

}