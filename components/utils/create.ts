
export function createPrefixCls(suffixCls?: string) : string {
  return suffixCls ? `ds-${suffixCls}` : 'ds'
}
