import { createStore } from 'zustand'

import { devtools, persist } from 'zustand/middleware'

export interface UiStateProps {

    theme: "light" | "dark"
}

export interface UiState extends UiStateProps {
    toggleTheme: () => void
}

export type UiStore = ReturnType<typeof createUiStore>

export const createUiStore = (initProps?: Partial<UiStateProps>) => {
    const DEFAULT_PROPS: UiStateProps = {
        theme: "light"
    }

    return createStore<UiState>()(devtools(
        persist(
            (set) => ({
                ...DEFAULT_PROPS,
                ...initProps,
                toggleTheme: () => set((state) => state.theme === "dark" ? { theme: "light" } : { theme: "dark" })
            }),
            {
                name: 'ui-state',
            }
        )
    ))
}
