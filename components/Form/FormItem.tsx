
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface FormItemProps {
  className?: string
}

const FormItem: React.FC<FormItemProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('form-item')
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

export default FormItem
