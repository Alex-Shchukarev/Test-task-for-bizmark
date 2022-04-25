<template>
    <ul class="project-columns">
        <li class="column" v-for="(column, idx) in columns" :key="column.id">
            <app-column :column="column" :index="idx"></app-column>
        </li>
        <li class="column light">
            <div class="header light">
                <input type="text" placeholder="+&nbsp;&nbsp;Добавить столбец" class="column-title" v-model="title" @blur="add">
            </div>
        </li>
    </ul>
</template>

<script>
import AppColumn from './AppColumn.vue'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
export default {
    props: ['id'],
    setup(props) {
        const store = useStore()
        const title = ref('')
        const columns = computed( () => store.getters.columns(props.id))
        const add = () => { 
            const payload = { id: props.id, titleColumn: title.value }
            store.dispatch('addColumn', payload)
            title.value = ''
        }
        
        return { columns, add, title, projId: props.id }
    },
    components: { AppColumn }
}
</script>