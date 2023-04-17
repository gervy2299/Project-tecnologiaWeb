export const formTime = (getTime) => {
    const date = new Date(getTime);
    return new Intl.DateTimeFormat("es-Es", { timeStyle: "medium" }).format(date);
}
