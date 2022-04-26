const folder = {
    petrovpp: 'petrovpp.jpg',
    ivanovii: 'ivanovii.png',
    sidorovss: 'sidorovss.jpg'
}

export function getAvatar(fio) {
    return `../assets/avatar/${folder[fio]}`
}