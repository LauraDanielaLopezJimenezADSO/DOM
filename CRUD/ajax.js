import { URL } from "./modules/config.js"

const solicitud = async (url) => {
    const _fetch = await fetch(`${URL}/${url}`)
    const _json = await _fetch.json()
    return _json
}

export default solicitud;