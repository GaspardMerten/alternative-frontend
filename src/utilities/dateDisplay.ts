import autoPlural from "./plural";

export default function dateStringToRecentText(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diff / (1000 * 3600 * 24));
    const diffInHours = Math.floor(diff / (1000 * 3600));
    const diffInMinutes = Math.floor(diff / (1000 * 60));
    const diffInSeconds = Math.floor(diff / 1000);
    if (diffInDays > 0) {
        return diffInDays + ' ' + autoPlural(diffInDays, 'day')
    } else if (diffInHours > 0) {
        return diffInHours + ' ' + autoPlural(diffInHours, 'hour')
    } else if (diffInMinutes > 0) {
        return diffInMinutes + ' ' + autoPlural(diffInMinutes, 'minute')
    } else {
        return diffInSeconds + ' ' + autoPlural(diffInSeconds, 'second')
    }
}