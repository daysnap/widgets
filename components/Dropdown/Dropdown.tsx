
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Trigger from '../Trigger'
import Placements from './placements'

export interface DropdownProps {
  className?: string
  placement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'
  trigger?: 'hover' | 'click'
  disabled?: boolean
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
    `${cls}-${placement}`,
    className,
  )
  const [button, ...restChildren] = React.Children.toArray(children)

  // console.log('Placements[placement] => ', Placements[placement])

  const handleAlign = (e: any, e2: any) => {
    console.log(e, e2)
  }

  return (
    <Trigger
      prefixCls={cls}
      className={classes}
      align={Placements[placement]}
      action={trigger}
      onAlign={handleAlign}
    >
      {button}
      <div className={`${cls}-content`}>{restChildren}</div>
    </Trigger>
  )
}

export default Dropdown

