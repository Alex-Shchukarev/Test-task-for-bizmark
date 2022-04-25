<template>
  <div class="project-header">
    <div>Последняя задача выполнена 10 марта</div>
    <ul>
      <li><img src="../assets/filter.png"/>Фильтрация</li>
      <li><img src="../assets/sort.png"/>Сортировка</li>
    </ul>
  </div>
  <div class="project-content">
    <h1 v-if="!$route.params.projectId">Выберите проект</h1>
    <div v-else>
      <ProjectBody :id="$route.params.projectId"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectBody from '@/components/ProjectBody.vue'
export default {
  setup() {
  },
  components: { ProjectBody }
}
</script>
