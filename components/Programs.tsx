import Image from 'next/image';

const Programs = () => {
  return (
    <div>
        <div className="flex flex-col p-2 pt-10 md:mx-2 md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
        {/* Image */}
        <div className="md:w-1/2">
            <Image src="/building.jpg" alt="Your Image" width={500} height={300} className='rounded-2xl'/>
        </div>
        {/* Wordings */}
        <div className="md:w-1/2">
            <h2 className="text-2xl font-bold">Your Title</h2>
            <p className="text-lg">Your description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
        </div>
        <div className="flex flex-col p-10 md:mx-32 md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
        {/* Wordings */}
        <div className="md:w-1/2">
            <h2 className="text-2xl font-bold">Your Title</h2>
            <p className="text-lg">Your description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
                {/* Image */}
                <div className="md:w-1/2">
            <Image src="/building.jpg" alt="Your Image" width={500} height={300} className='rounded-2xl'/>
        </div>
    </div>
    </div>
  );
};

export default Programs;
