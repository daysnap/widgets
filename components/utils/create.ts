
export function createPrefixCls(suffixCls?: string, customizePrefixCls?: string) : string {
  if (customizePrefixCls) return customizePrefixCls
  return suffixCls ? `ds-${suffixCls}` : 'ds'
}
