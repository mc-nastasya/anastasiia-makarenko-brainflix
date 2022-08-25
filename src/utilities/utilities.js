
export function formatDate(date) {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = ( "0" + (formattedDate.getMonth() + 1)).slice(-2);
    const day = ( "0" + formattedDate.getDate()).slice(-2);
    return `${month}/${day}/${year}`;
}
