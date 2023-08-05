const MiniContainer = ({ children, title, className }) => {
  return (
    <div className='space-y-2'>
      <h3 className='heading-tertiary'>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default MiniContainer;
