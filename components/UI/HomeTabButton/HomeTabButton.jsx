import classes from './HomeTabButton.module.scss';

function HomeTabButton({ children, onButtonClick, buttonClass }) {
  return (
    <div className={`${classes['buttonTab']}`}>
      <button onClick={onButtonClick} className={`${classes[buttonClass]}`}>
        {children}
      </button>
    </div>
  );
}

export default HomeTabButton;
