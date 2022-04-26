
const timerTemplate = time => `00 ч. / ${time} ч.`

export function formatTimer(timer) {
    let delta = ''
    if( timer < 10 ) { 
        delta = '0' + timer.toString()
    } else {
        delta = timer.toString()
    }
    return timerTemplate(delta)
}