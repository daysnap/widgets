
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface FormItemProps {
  className?: string
  label?: string
}

const FormItem: React.FC<FormItemProps> = ({
  className,
  label,
  children,
  ...restProps
}) => {

  const [error, setError] = React.useState<string>()

  const cls = createPrefixCls('form-item')
  const classes = classnames(
    `${cls}`,
    className,
  )

  return (
    <div
      {...restProps}
      className={classes}
    >
      <label className={`${cls}-label`}>{label}</label>
      {children}
      {error && <span className={`${cls}-error`}>{error}</span>}
    </div>
  )

}

export default FormItem
