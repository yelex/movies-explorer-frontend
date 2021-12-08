export const getResponseData = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}

export const extractTime = (numberMins) => {
    const hours = (numberMins / 60).toFixed(0)
    const minutes = numberMins % 60
    return `${hours}ч ${minutes}м`
}