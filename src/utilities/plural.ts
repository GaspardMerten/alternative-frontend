export default function autoPlural(count: number, text: string) {
    return count <= 1 ? text : text.split(' ').map((word, index) => index === 0 ? word + 's' : word).join(' ')
}

export function autoPluralWithCount(count: number, text: string) {
    return count + ' ' + autoPlural(count, text)
}