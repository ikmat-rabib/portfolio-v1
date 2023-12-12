

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-10 space-y-2">
            <h3 className="text-4xl font-bold text-[#F0F3BD]">{heading}</h3>
            <p className="text-[#E2E3CE] font-medium">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;