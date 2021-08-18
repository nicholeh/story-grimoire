class Helper {
    getFormattedDate = dateString => {
        const date = new Date(dateString)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }
}

export default new Helper()
