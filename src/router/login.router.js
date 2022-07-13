const index = () => import("@/views/login.vue"); 

export default [{
  path: '/login',
  name: 'login',
  component: index
}]