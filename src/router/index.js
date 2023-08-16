import { createRouter, createWebHistory } from 'vue-router'
import ContainerComp from '../components/ContainerComp'
import StudentComp from '../components/StudentComp'
import CourseComp from '../components/CourseComp'
import ScoreComp from '../components/ScoreComp'
import LoginPage from '../components/LoginPage.vue'
import DataComp from '../components/DataComp.vue'

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: "/main",
    name: "main",
    component: ContainerComp,
    children: [
      {
        path: "/student",
        name: "student",
        component: StudentComp,
      },
      {
        path: "/course",
        name: "course",
        component: CourseComp,
      },
      {
        path: "/score",
        name: "score",
        component: ScoreComp,
      },
      {
        path: "/data-analysis",
        name: "data-analysis",
        component: DataComp,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;
