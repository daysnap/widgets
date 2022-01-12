
import React from 'react'
import classnames from 'classnames'
import autosize from 'autosize'
import { createPrefixCls } from '../utils/create'
import fixControlledValue from './fixControlledValue'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  className?: string
  showCount?: boolean
  autosize?: boolean
}

const Textarea: React.FC<TextareaProps> = ({
  className,
  showCount,
  autosize: isAutoSize,
  value: initialValue,
  defaultValue,
  onChange,
  ...restProps
}) => {

  const [value, setValue] = React.useState<any>(
    fixControlledValue(typeof initialValue === 'undefined' ? defaultValue : initialValue)
  )
  const refTextarea = React.useRef<HTMLTextAreaElement>(null)
  const cls = createPrefixCls('textarea')
  const classes = classnames(
    `${cls}`,
    {
      [`${cls}-show-count`]: showCount
    },
    className,
  )
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    setValue(e.target.value)
    onChange?.(e)
  }
  const getCount = () => {
    const { maxLength } = restProps
    if (!showCount || !maxLength) return
    const length =  value ? value.toString().length : 0
    return `${length}/${maxLength}`
  }

  React.useEffect(() => {
    setValue(fixControlledValue(initialValue))
  }, [initialValue])

  React.useEffect(() => {
    if (refTextarea.current && isAutoSize) {
      autosize(refTextarea.current)
    }
  }, [isAutoSize])

  return (
    <div
      className={classes}
      data-count={getCount()}
    >
      <textarea
        {...restProps}
        value={value}
        ref={refTextarea}
        onChange={handleChange}
        className={createPrefixCls('input')}
      />
    </div>
  )
}

export default Textarea
