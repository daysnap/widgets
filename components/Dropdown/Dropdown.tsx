
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Trigger from '../Trigger'
import Placements from './placements'

export interface DropdownProps {
  className?: string
  placement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'
  trigger?: 'hover' | 'click'
  disabled?: boolean,
  children?: React.ReactNode
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  placement= 'bottomLeft',
  trigger = 'hover',
  children,
  ...restProps
}) => {

  const cls = createPrefixCls('dropdown')
  const classes = classnames(
    `${cls}`,
    className,
  )

  return (
    <Trigger
      prefixCls={cls}
      className={classes}
      align={Placements[placement]}
      action={trigger}
    >
      {children}
    </Trigger>
  )
}

export default Dropdown

