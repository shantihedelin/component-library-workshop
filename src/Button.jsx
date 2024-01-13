export default function CustomButton({ size, color, disabled, height, width, className }) {

const buttonStyle = {
  width: width,
  height: height,
  backgroundColor: color
}

  return (
    <>
     <button
        className={`m-2 mt-4 mb-10 rounded-md p-2 focus:outline-none shadow-md ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        style={buttonStyle}
        disabled={disabled}
      >Click here</button>
  </>
  );
}
