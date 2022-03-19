export function createMixins<O extends Record<string, string>>(options: O) {
  return <K extends keyof O>(name: K, appends: string) => {
    const splitter = /\s/
    return [...options[name].split(splitter), ...appends.split(splitter)].join(' ')
  }
}
