
import React from 'react'
import classnames from 'classnames'
import { } from 'dom-align'
import { createPrefixCls } from '../utils/create'
import type { AlignType, AlignResult, TargetType, TargetPoint } from './interface'

export interface AlignProps {
  className?: string
  align: AlignType
  target: TargetType

}

const Align: React.FC<AlignProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('align')
  const classes = classnames(
    `${cls}`,
    className,
  )

  return (
    <div
      {...restProps}
      className={classes}
    />
  )
}

export default Align

