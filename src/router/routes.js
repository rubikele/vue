import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';


export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHide: true,
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHide: true,
    }
  },
  {
    path: '/search:keyword?', //代表parmas参数可传可步传
    component: Search,
    //在这里是不写params，因为path不能跟params一起写,所以写的是name
    name: 'search',
    // props(router) {
    //   return { keyword: route.params.keyword, keyword2: route.query.keyword }
    // }
    // props(route) {  //route 收集好参数的路由对象
    //   //把传递过来的params参数和query参数一起映射为组件的属性（）
    //   return { keyword: route.params.keyword, keyword2: route.query.keyword }
    // }

  },
  {
    path: '/',
    redirect: '/home'
  }
]