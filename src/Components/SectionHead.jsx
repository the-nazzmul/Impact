

const SectionHead = ({heading, details}) => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold pt-24 pb-6">
        {heading}
      </h1>
      <p className="text-center w-3/5 mx-auto">
        {details}
      </p>
    </div>
  );
};

export default SectionHead;
