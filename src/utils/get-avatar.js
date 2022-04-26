const folder = {
    petrovpp: 'petrovpp.jpg',
    ivanovii: 'ivanovii.png',
    sidorovss: 'sidorovss.jpg'
}

export function getAvatar(fio) {
    console.log(fio)
    console.log(folder[fio])
    return `../assets/avatar/${folder[fio]}`
}