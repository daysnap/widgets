
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { Button, ButtonProps } from '../Button'

export interface DropdownItemProps extends ButtonProps {}

const Dropdown: React.FC<DropdownItemProps> = ({
  className,
  disabled= false,
  children,
  onClick,
  ...restProps
}) => {

  const cls = createPrefixCls('dropdown-item')
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

