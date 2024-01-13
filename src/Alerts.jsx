export default function CustomAlert({
  width = 350,
  height = 45,
  bgColor,
  text,
  textColor,
  icon: Icon,
  className,
}) {
  const AlertStyle = {
    backgroundColor: bgColor,
    color: textColor,
    height: height,
    width: width,
  };

  return (
    <>
      <div
        className={`flex justify-center items-center m-2 mt-8 mb-10 rounded-xl ${className}`}
        style={AlertStyle}
      >
        {Icon && <Icon size={20} />}
        {text && <p className="ml-2 text-sm">{text}</p>}
      </div>
    </>
  );
}
