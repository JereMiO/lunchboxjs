import { h, defineComponent } from 'vue'
import { LunchboxWrapper } from './LunchboxWrapper/LunchboxWrapper'
import { autoGeneratedComponents } from './autoGeneratedComponents'
import type { Lunch } from '../types'

export const catalogue: Lunch.Catalogue = {}

// component creation utility
const createComponent = (tag: string) =>
    defineComponent({
        inheritAttrs: false,
        name: tag,
        setup(props, context) {
            return () => {
                return h(tag, context.attrs, context.slots?.default?.() || [])
            }
        },
    })

// turn components into registered map
const processed = autoGeneratedComponents
    .map(createComponent)
    .reduce((acc, curr) => {
        acc[curr.name] = curr
        return acc
    }, {} as Record<string, ReturnType<typeof defineComponent>>)

export const components = {
    ...processed,
    Lunchbox: LunchboxWrapper,
}
