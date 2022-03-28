import { defineShortcuts } from './utils'

const extendButton = (appends: string) => `
transition duration-100
cursor-pointer select-none
disabled:cursor-default
disabled:pointer-events-none
${appends}`


const baseColor = 'teal'

export default defineShortcuts([
  [
    /^(?:btn|button)-solid(?:-(.*))?$/, ([, c = baseColor]) =>
      extendButton(`
        px-4 py-1 rounded
        text-{c}-600/100 dark:text-{c}-400/100
        hover:text-opacity-90 hover:dark:text-opacity-90
        bg-transparent hover:bg-{c}-500/5 active:bg-{c}-500/10
        ring-2 ring-offset-1 ring-transparent ring-offset-{c}-500
        active:ring-{c}/10
        disabled:text-{c}-700/50
        disabled:dark:text-{c}-400/50
        disabled:ring-offset-{c}-500/50
      `.replace(/{c}/g, c))
  ],
  [
    /^(?:btn|button)(?:-(.*))?$/, ([, c = baseColor]) =>
      extendButton(`
        px-4 py-1 rounded
        text-{c}-50 dark:text-{c}-50
        bg-{c}-600 hover:bg-{c}-700 active:bg-{c}-800
        disabled:bg-{c}-600
        disabled:bg-opacity-25
        disabled:dark:bg-opacity-25
        disabled:text-opacity-95
        disabled:dark:text-opacity-30
      `.replace(/{c}/g, c))
  ],
  [
    /^icon-(?:btn|button)$/, () =>
      extendButton('opacity-75 hover:opacity-100 disabled:opacity-25')
  ]
])
