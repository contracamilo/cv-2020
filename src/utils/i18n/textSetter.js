import appTexts from './global';

const setText = (key) => appTexts[key] || 'default text';

export default setText;