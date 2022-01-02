
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Portal from '../Portal'
import Align, { AlignType } from '../Align'

type ActionType = 'click' | 'hover' | 'focus'

export interface TriggerProps extends AlignType {
  className?: string
  children: React.ReactNode
  action: ActionType | ActionType []
}

const Trigger: React.FC<TriggerProps> = ({
  className,
  children,
  points = ['tl', 'bl'],
  offset = [0, 0],
  ...restProps
}) => {

  if (React.Children.count(children) <= 0) {
    return null
  }

  const cls = createPrefixCls('trigger')
  const classes = classnames(
    `${cls}`,
    className,
  )

  return (
    <>

    </>
  )
}

export default Trigger

