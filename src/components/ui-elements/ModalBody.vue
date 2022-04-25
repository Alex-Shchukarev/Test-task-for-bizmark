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
        <div :class="['form-control', { invalid: errorDaedline }]">
            <label for="date">Выполнить до:</label>
            <input type="date" id="date" v-model="deadline" @blur="nbDeadline"/>
            <small v-if="errorDeadline"> {{ errorDeadline }} </small>
        </div>
        <!-- <div :class="['form-control', { invalid: errorFio }]">
            <label for="fio">FIO</label>
            <input type="text" id="fio" v-model="fullName" @blur="hbFio"/>
            <small v-if="errorFio"> {{ errorFio }} </small>
        </div> -->
        <!-- <div :class="['form-control', { invalid: errorPhone }]">
            <label for="phone">Phone</label>
            <input type="text" id="phone" v-model="phone" @blur="nbPhone"/>
            <small v-if="errorPhone"> {{ errorPhone }} </small>
        </div>
        <div :class="['form-control', { invalid: errorSum }]">
            <label for="summa">Summa</label>
            <input type="number" id="summa" v-model.number="sum" @blur="hbSum"/>
            <small v-if="errorSum"> {{ errorSum }} </small>
        </div> -->
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
    setup(_, {emit}) {
        const store = useStore()
        const submit = values => {
            store.dispatch('addTask', values)
            emit('created')
        }
        return { ...useModalForm(submit) }
    },
}
</script>