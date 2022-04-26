import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useModalForm(fn) {

    const {handleSubmit, isSubmitting } = useForm({ initialValues: { fio: 'petrovpp' } })

    const MIN_LENGTH = 5
    const MIN_DATE = new Date(new Date().getTime() + 24 * 3600 * 1000)
    const {value: title, errorMessage: errorTitle, handleBlur: hbTitle} = useField('title', 
        yup.string().trim().required('Это обязательное поле').min(MIN_LENGTH, `Минимальная длина ${MIN_LENGTH} символов`))

    const {value: timer, errorMessage: errorTimer, handleBlur: hbTimer} = useField('timer', 
        yup.number().required('Это обязательное поле').min(1, `Минимальное время 1 час`))

    const {value: deadline, errorMessage: errorDeadline, handleBlur: hbDeadline} = useField('deadline', 
        yup.date().min(MIN_DATE, `Минимальная дата 1 день`).required('Это обязательное поле'))

    const {value: fio} = useField('fio')

    const onSubmit = handleSubmit(fn)

    return {
        fio, deadline, timer, title, errorTitle, errorTimer, errorDeadline, hbTitle, hbTimer, hbDeadline, onSubmit, isSubmitting
    }
}