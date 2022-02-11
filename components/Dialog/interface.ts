import React from 'react'

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement>{
  prefixCls?: string
  onConfirm?(): void
  onCancel?(): void
  onAfterClose?(): void
  title?: string
  visible?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  getContainer?: HTMLDivElement
}
