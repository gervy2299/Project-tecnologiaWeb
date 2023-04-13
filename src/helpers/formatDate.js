export const formatDate = (getdate) => {

    const date = new Date(getdate);
    return new Intl.DateTimeFormat("es-Es", { dateStyle: "full", timeStyle: "long" }).format(date);
}
