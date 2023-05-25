const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mx-auto my-8 md:w-4/12">
            <p className="text-yellow-500 mb-2">{subHeading}</p>
            <h3 className="text-3xl border-y-4 py-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;