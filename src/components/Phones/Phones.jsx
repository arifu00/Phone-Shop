import PhoneCard from "./PhoneCard"

const Phones = ({phones}) => {
    // console.log(phones);
    return (
        <div>
            <h2 className="text-3xl text-center py-10">Our Phones Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    phones?.map(phone => <PhoneCard phone={phone} key={phone.id}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;