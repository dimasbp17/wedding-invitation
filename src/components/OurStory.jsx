import React from 'react';
import dl2 from '../../public/images/dl2.jpg';

const OurStory = () => {
    return (
        <>
            <div className="w-full mt-10 font-montaga">
                <div className="bg-[#C6754D] p-20">
                    <div className="grid grid-cols-12 text-white">
                        <div className="flex flex-col col-span-5">
                            <span className="text-8xl">Our</span>
                            <span className="text-8xl">Story</span>
                        </div>
                        <div className="col-span-7">
                            <span className="flex text-justify">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nemo ipsam iusto soluta, minima libero iste, pariatur excepturi, assumenda labore veniam placeat dolorum repudiandae rerum modi provident
                                eligendi iure. Corporis debitis rem at? Ipsum similique architecto quibusdam quia voluptates laboriosam maiores enim, reiciendis tempora? Harum, reprehenderit autem iure facilis quibusdam, obcaecati aut nobis
                                consequuntur molestiae omnis repellat et veritatis, nihil fugiat voluptatum provident tempore? Quaerat fuga inventore iusto quae. Accusantium, repudiandae non. Aperiam officiis vero deserunt nisi, quam,
                                laudantium voluptas quo culpa repellendus expedita tempore minima. Ab qui vel, laudantium consequuntur perferendis consequatur tempore eaque impedit temporibus, explicabo amet a?
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src={dl2}
                        alt="Dimas & Lutfiana"
                        className="object-cover w-full bg-cover h-[450px]"
                    />
                </div>
            </div>
        </>
    );
};

export default OurStory;
