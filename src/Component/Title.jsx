const Title = ({ title, icon }) => {
  return (
    <div className="font-bricolage flex items-center gap-1 text-3xl font-semibold">
      <span className="hover:underline transition-all duration-300">
        {title}
      </span>
      {icon}
    </div>
  );
};

export default Title;
