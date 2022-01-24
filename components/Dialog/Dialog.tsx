
import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Icon from '../Icon'

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement>{
  onConfirm?(): void
  onCancel?(): void
  title?: string
  visible?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  getContainer?: HTMLDivElement
}

const Dialog: React.FC<DialogProps> = ({
  className,
  title,
  children,
  showCancelButton= true,
  showConfirmButton= true,
  cancelButtonText= '取消',
  confirmButtonText= '确认',
  onConfirm,
  onCancel,
  visible,
  ...restProps
}) => {

  if (visible) return null

  const cls = createPrefixCls('dialog')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const header = (
    <header className={`${cls}-header`}>
      <h2 className={`${cls}-title`}>{title}</h2>
      <Icon className={`${cls}-close`} icon="close"/>
    </header>
  )

  const handleConfirm = async () => {
    await onConfirm?.()
  }
  const handleCancel = async () => {
    await onCancel?.()
  }
  const footer = (
    <footer className={`${cls}-footer`}>
      {showCancelButton} && <button className={`${cls}-button ${cls}-button-cancel`} onClick={handleConfirm}>{cancelButtonText}</button>
      {showConfirmButton} && <button className={`${cls}-button ${cls}-button-confirm`} onClick={handleCancel}>{confirmButtonText}</button>
    </footer>
  )

  return (
    <div
      {...restProps}
      className={classes}
    >
      <div className={`${cls}-mask`}/>
      <div className={`${cls}-inner`}>
        {header}
        <div className={`${cls}-content`}>{children}</div>
        {footer}
      </div>
    </div>
  )
}

let container: HTMLDivElement
function getContainer () {
  if (!container) {
    container = document.createElement('div')
    document.body.append(container)
  }
  return container
}

type ApiType = typeof Dialog
interface ApiInterface extends ApiType {
  alert(options: DialogProps): Promise<any>
  confirm(options: DialogProps): Promise<any>
}

;['alert', 'confirm'].forEach(type => {
  (Dialog as any)[type] = (options: DialogProps) => new Promise((resolve, reject) => {
    ReactDOM.render(<Dialog {...options}/>, getContainer())
  })
})

export default Dialog as ApiInterface

