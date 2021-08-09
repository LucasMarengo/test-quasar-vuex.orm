import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import VuexORM from '@vuex-orm/core'
import Product from 'class/Product'
// import example from './module-example'

// Create new instance of Database.
const database = new VuexORM.Database()
// Register Models
database.register(Product)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    plugins: [VuexORM.install(database)],
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
