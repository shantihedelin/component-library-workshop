export default function CustomBadges({ size, height, width, color, icon: Icon, iconColor, className }) {
  const BadgeStyle = {
    backgroundColor: color,
    height: height,
    width: width,
  };

  return (
    <>
      <div
        className={`flex justify-center items-center m-2 mt-8 mb-10 rounded-md ${className}`}
        style={BadgeStyle}
      >
        {Icon && <Icon size={30} style= {{color: iconColor }} />}
      </div>
    </>
  );
}
