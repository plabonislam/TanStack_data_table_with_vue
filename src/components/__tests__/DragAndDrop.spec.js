import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DragAndDrop from '../DragAndDrop.vue'

describe('DragAndDrop', () => {
 it('renders properly', () => {
  const wrapper = mount(DragAndDrop)
  expect(wrapper.text()).toContain('Drag and drop list view')
 })
})