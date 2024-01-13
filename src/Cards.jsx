export default function CustomCard({
  size,
  color,
  href,
  imgAlt,
  imgSrc,
  className,
  children,
}) {
  const CardStyle = {
    backgroundColor: color,
    height: size,
    width: size,
  };

  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div style={CardStyle} className={`relative ${className}`}>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt}
              className="object-cover w-full h-full"
            />
          )}
          {children}
        </div>
      </a>
    </>
  );
}
