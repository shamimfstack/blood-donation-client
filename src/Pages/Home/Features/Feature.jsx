const Feature = ({heading, children}) => {
  return (
    <div className="bg-red-700 p-8 text-white space-y-2">
      <h3 className="text-2xl text-white font-semibold">{heading}</h3>
      <p className="text-sm">
        {children}
      </p>
    </div>
  );
};

export default Feature;
