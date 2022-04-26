
export function currency(date) {
    let month = new Date(date).toLocaleString('ru', {       
        month: 'long'       
    })
    let day = new Date(date).getDate().toString()
    return day + ' ' + month
}