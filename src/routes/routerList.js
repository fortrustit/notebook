export default [
  { 
    path: '/',
    component (resolve) {
      require(['@/views/'], resolve)
    }
    // redirect: to => {
    //   return '/notebooks'
    // }
  },
  { 
    path: '/login',
    component (resolve) {
      require(['@/views/login'], resolve)
    }
  },
  { 
    path: '/notebooks',
    component (resolve) {
      require(['@/views/notebook'], resolve)
    }
  },
  { 
    path: '/note',
    component (resolve) {
      require(['@/views/note'], resolve)
    },
    children: [
      {
        path: '/note/:notebookId',
        component (resolve) {
          require(['@/views/note/list'], resolve)
        }
      }
    ]
  }
]
