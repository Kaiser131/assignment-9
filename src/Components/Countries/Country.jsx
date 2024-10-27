
const Country = ({ got }) => {
    const { continent, countries } = got;


    return (
        <div className="space-y-4">

            <h1 className="text-3xl font-bold">{continent} </h1>
            {
                countries.map((got, idx) => <div key={idx}>

                    <h2 className="text-xl font-bold">{got.country}</h2>
                    <ul>
                        {
                            got.cities.map((city, idx) => <li key={idx}>{city}</li>)
                        }
                    </ul>


                </div>)
            }

        </div>
    );
};

export default Country;