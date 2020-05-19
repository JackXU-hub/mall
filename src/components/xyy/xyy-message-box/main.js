'use strict'
import Vue from 'vue'
import Msg from './index'

const MessageConstructor = Vue.extend(Msg)

let instance

const XyyMsg = (options) => {
  options = options || {}
  instance = new MessageConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.dom = instance.vm.$el
  return instance.vm
}

export default XyyMsg
