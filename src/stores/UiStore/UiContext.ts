import { createContext } from 'react'
import { UiStore } from './UiStore'

export const UiStateContext = createContext<UiStore | null>(null)