<template>
    <div class="header">
        <div>{{colum.title}}</div>
        <div class="sign">
            <img src="../assets/plus.png" @click="modal = true"/>
            <img src="../assets/minus.png" @click="removeColumn"/>
        </div>
    </div>
    <ul class="tasks">
        <li class="task" v-for="task in colum.tasks" :key="task.id">
            <div class="header">{{task.title}}</div>
            <div>{{task.date}}</div>
            <div>{{$route.params.projectId}}</div>
        </li>
    </ul>
    <teleport to="body">
        <app-modal v-if="modal" title="Создать задачу" @created="modal = false">
            <modal-body></modal-body>
        </app-modal>
    </teleport>
</template>

<script>
import AppModal from './AppModal.vue'
import ModalBody from './ui-elements/ModalBody.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
    props: ['column', 'index'],
    setup(props) {
        const store = useStore()
        const route = useRoute()
        const modal = ref(false)

        const removeColumn = () => {
            const updateColumns = { id: route.params.projectId, idx: props.index }
            store.dispatch('removeColumn', updateColumns)
        }
        // const addTask = () => {
        //     //const updateTasks = { id: route.params.projectId, idx: props.index }
        //     store.dispatch('addTask', props.column)
        // }

        return { modal, colum: props.column, removeColumn }
    },
    components: { AppModal, ModalBody }
}
</script>