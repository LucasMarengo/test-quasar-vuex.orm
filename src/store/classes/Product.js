// Product Model

import { Model } from '@vuex-orm/core'

export default class Product extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'products'
  static primaryKey = 'cod'
  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.

  static fields () {
    return {
        cod: this.attr(null),
        titulo: this.attr(''),
        precio: this.attr('')
    }
  }


}