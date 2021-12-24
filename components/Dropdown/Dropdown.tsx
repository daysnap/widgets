
import React, { useState, useEffect, useCallback, useMemo, ReactNode, ReactElement } from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface DropdownProps {
  align?: 'left' | 'right'
  trigger?: 'click' | 'hover'
  children?: ReactNode | ReactNode [],
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  align= 'left',
  trigger= 'click',
  children,
  className,
  ...restProps
}) => {

  const [isActive, setIsActive] = useState(false)
  const [button, ...menus] = Array.isArray(children) ? children : [children]
  const isClick = trigger === 'click'

  useEffect(() => {
    let handler: (event: Event) => void
    if (isClick) {
      handler = () => setIsActive(false)
      window.document.addEventListener('click', handler)
    }
    return () => {
      handler && window.document.removeEventListener('click', handler)
    }
  }, [isClick])

  const handleOpen = useCallback(event => {
    if (isClick) {
      setIsActive(v => !v)
      event.nativeEvent.stopImmediatePropagation()
    }
  }, [isClick])

  const cloneButton = useMemo(() => React.cloneElement(button as ReactElement, {
    onClick: handleOpen
  }), [handleOpen])

  const cls = createPrefixCls('dropdown')
  const classes = classnames(
    `${cls}`,
    `${cls}-${align}`,
    `${cls}-${trigger}`,
    {
      [`${cls}-active`]: isActive
    },
    className,
  )

  return (
    <div className={classes} {...restProps}>
      {cloneButton}
      <div className={`${cls}-content`}>
        <div className={`${cls}-menu`}>{menus}</div>
      </div>
    </div>
  )

}

export default Dropdown
