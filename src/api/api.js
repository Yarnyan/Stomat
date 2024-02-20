import axios from 'axios'
const apiLink = "https://localhost:8080"
const POST = async (link, data) => {
    try {
        const response = await axios.post(apiLink + link, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response
    } catch (error) {
        return error
    }
}

export function createCall(data) {
    console.log(data)
    return POST('/submit', data)
}
