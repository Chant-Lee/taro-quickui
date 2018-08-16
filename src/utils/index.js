const mergeProps = function (target) {
  const props = typeof target._options.props === 'object' ? Object.keys(target._options.props) : target._options.props
  if (props && props.length) {
    const { propsDefault } = target._options
    props.forEach(prop => {
      if (propsDefault.hasOwnProperty(prop)) {
        target[prop] = target[prop] || propsDefault[prop]
      }
    })
  }
}

export {
  mergeProps
}
