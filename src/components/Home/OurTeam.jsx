import team1 from "../../assets/team-1.jpg"
import team2 from "../../assets/team-2.jpg"
import team3 from "../../assets/team-3.jpg"
import team4 from "../../assets/team-4.jpg"



const OurTeam = () => {
  return (
    <div className="mt-28">
      <h2 className="text-2xl font-bold">Meet Our Team</h2>
      <div className="mt-10">
        <section className="py-6 dark:text-gray-800">
          <div className="container p-4 mx-auto space-y-16 sm:p-10">
            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src={team4}
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Safia Nazma</h4>
                  <p className="text-sm dark:text-gray-600">CEO</p>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src={team2}
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Jerin khan</h4>
                  <p className="text-sm dark:text-gray-600">Sr.Manager</p>
                 
                </div>
              </div>
             
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src={team3}
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Tabbasum sorowar</h4>
                  <p className="text-sm dark:text-gray-600">chief of Marketing</p>
                
                </div>
              </div>
             
           
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src={team1}
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Asif Aftab</h4>
                  <p className="text-sm dark:text-gray-600">Head of Creative Department</p>
                
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurTeam;
