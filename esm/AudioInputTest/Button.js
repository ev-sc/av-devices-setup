import classNames from 'classnames';
import AVIcon from './AVIcon';

const toTitleCase = str => {
  str = str.toLowerCase().split(' ');

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  return str.join(' ');
};
/**
 *
 * @param title
 * @param type - null, 'reverse', 'cancel'
 * @param icon
 * @param onClick
 * @param muiProps
 * @returns {JSX.Element}
 * @constructor
 */


const Button = ({
  title,
  type = '',
  icon,
  onClick,
  disabled,
  loading,
  style
}) => {
  let startIcon;

  if (icon) {
    switch (icon) {
      case 'record':
        startIcon = /*#__PURE__*/React.createElement(AVIcon, {
          iconName: "record",
          color: "white"
        });
        break;

      case 'cancel':
        startIcon = /*#__PURE__*/React.createElement(AVIcon, {
          iconName: "close",
          color: "white"
        });
        break;
    }
  }

  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    className: classNames('button', type, {
      disabled
    }),
    style: style
  }, icon && !loading && startIcon, toTitleCase(title));
};

_c = Button;
Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'cancel', 'default', 'recording', 'playing'])
};
export default Button;
export { toTitleCase };

var _c;

$RefreshReg$(_c, "Button");