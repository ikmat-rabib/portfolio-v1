

const Container = ({children}) => {
    return (
        <div className="max-w-6xl mx-auto py-10 px-3 md:py-10 md:px-6 lg:py-20 lg:px-0">
            {children}
        </div>
    );
};

export default Container;