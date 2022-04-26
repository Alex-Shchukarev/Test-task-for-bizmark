<template>
    <form @submit.prevent="onSubmit">
        <div :class="['form-control', { invalid: errorTitle }]">
            <label for="title">Задача:</label>
            <input type="text" id="title" v-model="title" @blur="nbTitle"/>
            <small v-if="errorTitle"> {{ errorTitle }} </small>
        </div>
        <div :class="['form-control', { invalid: errorTimer }]">
            <label for="timer">Время на выполнение, часов:</label>
            <input type="number" id="phone" v-model="timer" @blur="nbTimer"/>
            <small v-if="errorTimer"> {{ errorTimer }} </small>
        </div>
        <div :class="['form-control', { invalid: errorDeadline }]">
            <label for="deadline">Выполнить до:</label>
            <input type="date" id="deadline" v-model="deadline" @blur="nbDeadline"/>
            <small v-if="errorDeadline"> {{ errorDeadline }} </small>
        </div>
        <div class="form-control">
            <label for="fio">Ответственный</label>
            <select id="fio" v-model="fio">
                <option value="petrovpp">Petrov P.P.</option>
                <option value="ivanovii">Ivanov I.I.</option>
                <option value="sidorovss">Sidorov S.S.</option>
            </select>
        </div>
        <button type="submit" class="btn primary" :disabled="isSubmitting">Создать</button>
    </form>
</template>

<script>
import { useStore } from 'vuex'
import { useModalForm } from '../../use/modal-form'
export default {
    emits: ['created'],
    props: ['column'],
    setup(props, {emit}) {
        const store = useStore()
        const submit = async values => {
            const payload = { column: props.column, values}
            await store.dispatch('addTask', payload)
            emit('created')
        }
        return { ...useModalForm(submit) }
    },
}
</script>