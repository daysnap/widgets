
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Trigger from '../Trigger'
import Placements from './placements'
import { DropdownProps } from './interface'

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    className,
    prefixCls,
    placement= 'bottomLeft',
    trigger = 'hover',
    children,
    disabled,
    ...restProps
  } = props

  const cls = createPrefixCls('dropdown', prefixCls)
  const classes = classnames(
    `${cls}`,
    className,
  )
  const [button, ...restChildren] = React.Children.toArray(children)
  const overlay = disabled ? null : <div className={`${cls}-content`}>{restChildren}</div>

  return (
    <Trigger
      prefixCls={cls}
      className={classes}
      align={Placements[placement]}
      action={trigger}
      placements={Placements}
    >
      {button}
      {overlay}
    </Trigger>
  )
}

export default Dropdown

