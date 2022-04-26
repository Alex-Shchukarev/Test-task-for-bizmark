<template>
    <div class="task-header">
        <div class="task-header-container">
            <img src="../assets/done.png" class="check">
            {{task.title}}
        </div>
        <img src="../assets/minus.png" @click="removeTask"/>
    </div>
    <div class="task-footer">
        <div class="task-footer-left">
            <img :src="getAvatar(task.emploee)" class="avatar">
            <div class="task-time">
                <div>{{formatTimer(task.timer)}}</div>
                <div>{{currency(task.deadline)}}</div>
            </div>
        </div>
        <ul class="task-icons">
            <li><img src="../assets/subtasks.png"></li>
            <li><img src="../assets/playbutton.png"></li>
        </ul>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { currency } from '../utils/currency-date'
import { formatTimer } from '../utils/format-timer'
import { getAvatar } from '../utils/get-avatar'
export default {
    props: ['task', 'column'],
    setup(props) {
        const store = useStore()

        const removeTask = () => {
            const payload = { task: props.task, columnTasks: props.column.tasks }
            store.dispatch('removeTask', payload)
        }
        return { task: props.task, currency, formatTimer, getAvatar, removeTask }
    },
}
</script>