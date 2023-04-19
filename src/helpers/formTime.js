export const formTime = (getTime) => {
    const date = new Date(getTime);
    return new Intl.DateTimeFormat("es-Es", { dateStyle: "short", timeStyle: "short" }).format(date);
}
