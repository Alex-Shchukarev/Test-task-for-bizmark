<template>
    <div class="sidebar">
        <div class="sidebar-header">Captain</div>
        <div class="burger"></div>
        <ul class="main-menu">
            <li class="menu-item"><img src="../assets/Home.png">Дашборд</li>
            <li class="menu-item"><img src="../assets/Task.png">Мои задачи</li>
            <li class="menu-item"><img src="../assets/Proj.png">Проекты</li>
        </ul>
        <ul class="sub-menu">
            <li class="sub-menu-item" v-for="project in projects" :key="project.id">
                <router-link :to="'/project/' + project.id">
                    <div class="marker"></div>
                    {{project.name}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    setup() {
        const store = useStore()
        const projects = computed( () => store.getters.getProj )
        return { projects }
    },
}
</script>