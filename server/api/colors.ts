/* eslint-disable @typescript-eslint/indent */
export default defineEventHandler(() => ({
    id: 250,
    name: 'raven',
    type: 'theme-color',
    desc: 'octiv theme with raven / stone / snow, and halliburton red as primary',
    formats: {
        rgb: true,
        hex: true,
        hsl: true,
    },
    pallettes: [{ light: {}, dark: {} }],

}))

/**
 * @example
 *   { data, pending, error, refresh } = useFetch('/api/colors')
 */
