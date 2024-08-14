export const Card = () => import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const Skeleton = () => import('../../components/Skeleton.vue' /* webpackChunkName: "components/skeleton" */).then(c => wrapFunctional(c.default || c))
export const Slider = () => import('../../components/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
export const BaseFooter = () => import('../../components/base/Footer.vue' /* webpackChunkName: "components/base-footer" */).then(c => wrapFunctional(c.default || c))
export const BaseHeader = () => import('../../components/base/Header.vue' /* webpackChunkName: "components/base-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
