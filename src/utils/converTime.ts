export const convertTimee = (time: string) => {
    const date = new Date(time);

    // Define options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "2-digit",
    };

    // Use Intl.DateTimeFormat to format the date
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
    )

    return formattedDate
}