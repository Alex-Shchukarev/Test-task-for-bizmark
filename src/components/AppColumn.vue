<template>
    <div class="column-header">
        <div>{{colum.title}}</div>
        <div class="sign">
            <img src="../assets/plus.png" @click="modal = true"/>
            <img src="../assets/minus.png" @click="removeColumn"/>
        </div>
    </div>
    <ul class="tasks">
        <li class="task" v-for="task in colum.tasks" :key="task.id">
            <app-task :task="task" :column="colum"></app-task>
        </li>
    </ul>
    <teleport to="body">
        <app-modal v-if="modal" title="Создать задачу">
            <modal-body @created="modal = false" :column="colum"></modal-body>
        </app-modal>
    </teleport>
</template>

<script>
import AppModal from './AppModal.vue'
import ModalBody from './ui-elements/ModalBody.vue'
import AppTask from './AppTask.vue'
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

        return { modal, colum: props.column, removeColumn }
    },
    components: { AppModal, ModalBody, AppTask }
}
</script>