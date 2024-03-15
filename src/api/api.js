import axios from 'axios'
const apiLink = "https://650b-89-111-172-61.ngrok-free.app"
const POST = async (link, data) => {
    try {
        const response = await axios.post(apiLink + link, data, {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': '69420'
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
