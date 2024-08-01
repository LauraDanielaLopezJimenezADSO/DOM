const solicitud = async (url) => {
    const _fetch = await fetch(`http://localhost:3000/${url}`)
    const _json = await _fetch.json()
    return _json
}

export default solicitud;