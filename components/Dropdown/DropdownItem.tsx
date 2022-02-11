
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Button from '../Button'
import { DropdownItemProps } from './interface'

const Dropdown: React.FC<DropdownItemProps> = (props) => {
  const {
    className,
    prefixCls,
    disabled= false,
    children,
    onClick,
    ...restProps
  } = props

  const cls = createPrefixCls('dropdown-item', prefixCls)
  const classes = classnames(
    `${cls}`,
    {
      [`is-disabled`]: disabled,
    },
    className,
  )

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  if (children && React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: classes,
      onClick: handleClick,
      ...restProps,
    })
  }

  return (
    <Button
      {...restProps}
      prefixCls={cls}
      className={classes}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}

export default Dropdown

