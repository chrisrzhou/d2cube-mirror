import styles from './styles/index.js';

const responsiveCssProperties = [
  'display',
  'flexDirection',
  'height',
  'maxHeight',
  'opacity',
  'width',
];

const elementShorthandPropsMapping = {
  // Visual
  backgroundColor: ['bg'],
  border: ['b'],
  color: ['color'],
  display: ['display'],
  opacity: ['opacity'],
  overflow: ['overflow'],
  // Margin
  margin: ['m'],
  marginBottom: ['mb', 'my', 'm'],
  marginLeft: ['ml', 'mx', 'm'],
  marginRight: ['mr', 'mx', 'm'],
  marginTop: ['mt', 'my', 'm'],
  // Padding
  padding: ['p'],
  paddingBottom: ['pb', 'py', 'p'],
  paddingLeft: ['pl', 'px', 'p'],
  paddingRight: ['pr', 'px', 'p'],
  paddingTop: ['pt', 'py', 'p'],
  // Position
  position: ['position'],
  bottom: ['bottom'],
  inset: ['inset'],
  left: ['left'],
  right: ['right'],
  top: ['top'],
  // Dimension
  height: ['h'],
  maxHeight: ['maxH'],
  minHeight: ['minH'],
  width: ['w'],
  maxWidth: ['maxW'],
  minWidth: ['minW'],
  zIndex: ['z'],
};

const elementStyles = [
  ({onClick}) => (onClick ? styles.interactive : null),
  ({disabled}) => (disabled ? styles.disabled : null),
];

export default {
  elementShorthandPropsMapping,
  elementStyles,
  responsiveCssProperties,
};
