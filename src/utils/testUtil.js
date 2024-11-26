import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import appStore from '../store'

export function renderWithProviders (ui, extendedRenderOptions = {}) {

  const {
    preloadedState = {},
    store = appStore,
    ...renderOptions
  } = extendedRenderOptions

  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  )
  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  }
}