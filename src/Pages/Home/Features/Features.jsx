import Feature from "./Feature";

const Features = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl text-red-700 uppercase text-center font-bold">
        Features
      </h2>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        
        <Feature heading="Donor Location">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          consequatur accusamus unde rem ipsum consequuntur reprehenderit! Odit,
          nisi! Assumenda, ad?
        </Feature>
        <Feature heading="Blood Type Matching">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          consequatur accusamus unde rem ipsum consequuntur reprehenderit! Odit,
          nisi! Assumenda, ad?
        </Feature>
        <Feature heading="Appointment Booking">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          consequatur accusamus unde rem ipsum consequuntur reprehenderit! Odit,
          nisi! Assumenda, ad?
        </Feature>
        <Feature heading="Health & Safety Information">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          consequatur accusamus unde rem ipsum consequuntur reprehenderit! Odit,
          nisi! Assumenda, ad?
        </Feature>
        <Feature heading="Emergency Alerts">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          consequatur accusamus unde rem ipsum consequuntur reprehenderit! Odit,
          nisi! Assumenda, ad?
        </Feature>
        <Feature heading="Feedback and Support">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          consequatur accusamus unde rem ipsum consequuntur reprehenderit! Odit,
          nisi! Assumenda, ad?
        </Feature>
        
        {/* <div className="bg-red-700 p-8 text-white space-y-2">
                <h3 className="text-2xl text-white font-semibold">Integration with Health Records</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis consequatur accusamus unde rem ipsum consequuntur reprehenderit! Odit, nisi! Assumenda, ad?</p>
            </div>
            <div className="bg-red-700 p-8 text-white space-y-2">
                <h3 className="text-2xl text-white font-semibold">Community and Social Features</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis consequatur accusamus unde rem ipsum consequuntur reprehenderit! Odit, nisi! Assumenda, ad?</p>
            </div> */}
      </div>
    </div>
  );
};

export default Features;
