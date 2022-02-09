
import React from 'react'

export default function <T> (value: T) : T | undefined {
  const ref = React.useRef<T>()
  React.useEffect(() => {
    ref.current = value
  })
  return ref.current
}
