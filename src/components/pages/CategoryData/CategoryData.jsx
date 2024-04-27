
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryDataCard from '../CategoryDataCard/CategoryDataCard';

const CategoryData = () => {
    const artAndCraftData = useLoaderData()
    // console.log(data);
    const {category} = useParams();
    console.log('params',category)
    return (
        <div>
            <h2 className='mt-12 text-center text-5xl font-bold font-rancho'>Art&Craft of: {category} Category</h2>
            <div className='grid md:grid-cols-3 gap-5 mt-10'>
              {
               artAndCraftData.map(data=><CategoryDataCard key={data._id}data={data}></CategoryDataCard>)
              }
            </div>
        </div>
    );
};

export default CategoryData;