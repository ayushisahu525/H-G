import React , {useEffect} from 'react';
import './main.scss';
// import img from '../../Assets/img.jpg';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        id:1,
        imgsrc: "https://www.planetware.com/wpimages/2019/09/india-jaipur-top-attractions-hawa-mahal.jpg",
        destTitle: 'Hawa Mahal',
        location: 'Jaipur, Rajasthan',
        grade: 'CULTURAL RELAX',
        timing: '9:00 AM to 7:00 PM',
        description: 'If you had any preconceived notions about how the buildings in Jaipur look, they   probably came from Hawa Mahal (Palace of Breeze). It has all of the distinctive architectural features that appear in postcards of the city, from the salmon-pink, honeycombed facade, built to resemble the crown of Hindu god Krishna.'
    },
    {
        id:2,
        imgsrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e9/52/a2/sunset-at-tata-tea-gardens.jpg?w=1100&h=-1&s=1",
        destTitle: 'Tea Garden',
        location: 'Munnar , Kerala',
        grade: 'CULTURAL RELAX',
        timing: '5:00 AM to 8:00 PM',
        description: 'The Tea Gardens in Munnar are what makes it a beautiful hill station. The entire place has amazing scenery. The serene and peaceful atmosphere you get at Munnar will surely impress you. You not only get to see the tea plantations but also buy some great flavours of tea. Munnar is an attractive destination with the with the worlds best tea estates.'
    },
    {
        id:3,
        imgsrc: "https://www.planetware.com/photos-large/IND/india-delhi-india-gate.jpg",
        destTitle: 'India Gate',
        location: 'New Delhi',
        grade: 'CULTURAL RELAX',
        timing: '8:00 AM to 9:00 PM',
        description: 'Looking a little like the famous Arc de Triomphe in Paris, the equally impressive India Gate is a magnificent stone arch built as a memorial to Indian soldiers killed in WWI. An eternal flame burns beneath the massive structure, and its walls are inscribed with the names of more than 90,000 soldiers who died in the conflict.'
    },
    {
        id:4,
        imgsrc: "https://www.makemytrip.com/travel-guide/media/dg_image/srinagar/Dal-Lake.jpg",
        destTitle: 'Dal Lake',
        location: 'Srinagar, Kashmir',
        grade: 'CULTURAL RELAX',
        timing: '10:00 AM to 5:00 PM',
        description: 'Reckoned to be the pride of Kashmir tourism, Dal Lake is the most popular attraction in Srinagar. Dal Lake is also one of the best locations in Kashmir for film shooting as it offers some incredible vistas of lofty rolling hills, the distant snow-capped mountains, shikaras cruising quietly and the houseboat standing still with the perfect poise.'
    },
    {
        id:5,
        imgsrc: "https://cdn1.goibibo.com/voy_ing/t_fs/gangtok-nathula-pass-147792948712o.jpeg",
        destTitle: 'Nathula Pass',
        location: 'Gangtok, Sikkim',
        grade: 'CULTURAL RELAX',
        timing: '8:00 AM - 3:30 PM ',
        description: 'Nathu La, one of the highest motorable roads in the world, is a mountain pass in the Himalayan peaks that co-joins Sikkim and China. Situated on the Indo-Tibetan border 14450 ft. above sea level, Nathu La is one of the most important Himalayan passes in the country. Nathu La is famous for its picturesque beauty and beautiful environment.'
    },
    {
        id:6,
        imgsrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/e6/48/a7.jpg",
        destTitle: 'Mehrangarh Fort',
        location: 'Jodhpur, Rajasthan',
        grade: 'CULTURAL RELAX',
        timing: 'Rs700',
        description: 'Mehrangarh Fort holds the pride of place in Jodhpur because of its splendid architecture and the diverse history associated with it. Considered as one of the most formidable and magnificent forts of Rajasthan, Mehrangarh fort was built by Rao Jodha. The fort is spread over an area of 5 km and is built on 125 m high hill in the outskirts of Jodhpur city.'
    }
]

const Data2 = [
    {
        id:1,
        imgsrc: "https://cf.bstatic.com/xdata/images/hotel/270x200/237226099.webp?k=ce9c39ae32f820af9d887a6b4e158672a9e4d91f3a199096b114c794c031d802&o=",
        destTitle: 'Nature Horizon',
        location: 'Jaipur, Rajasthan',
        grade: 'HOMESTAY',
        rent:'Rs 4,500 Per Night',
        description: 'Situated in Jaipur, 1.8 km from Jaipur Railway Station and 5.6 km from Govind Dev Ji Temple, Marigold Inn- Homestay features accommodation with free WiFi, air conditioning, a restaurant and a shared lounge. Super clean, fresh smelling sheets, and nice bathroom! Cute building with nice rooftop space for breakfast (with real coffe) or sunset.'
    },

    {
        id:2,
        imgsrc: "https://assets.cntraveller.in/photos/60ba1c160f3a5367ec9fe497/master/w_960,c_limit/Screenshot-2019-11-26-at-6.32.00-PM.jpg",
        destTitle: 'Indo-Gothic villa',
        location: 'Trivandrum, Kerala',
        grade: 'HOMESTAY',
        rent: 'Rs 5,000 Per Night',
        description: 'The 150-year-old Indo-Gothic villa located in the heart of Trivandrum is tastefully restored to hark back to the times of the Raj. The villa comprises one deluxe suite and three deluxe double bedrooms. It also includes a huge verandah, an orchid garden, a badminton court, and a hammock to laze on. Since it is in the heart of the city.'
    },
    {
        id:3,
        imgsrc: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/04/Kakuba-Residency-400x267.jpg",
        destTitle: 'Kakuba Residency',
        location: 'Gangtok, Sikkim',
        grade: 'HOMESTAY',
        rent: 'Rs 3,700 Per Night',
        description: 'This homestay property is known for its amazing location, as various tourist attractions are at very short distance from it. Do Drul Chorten Monastery is at 1 kilometer, Enchey Monastery at 1.7 kilometer, Banjhakri Falls and Hanuman Tok at 3.3 kilometers each, and Palzor Stadium is at 1.3 kilometers. You can enjoy an evening stroll in the balcony or terrace.'
    },
    {
        id:4,
        imgsrc: "https://assets.cntraveller.in/photos/60ec48ec28c0d620a636f14b/master/w_960,c_limit/Naivasha.jpeg",
        destTitle: 'Pritruchhaya Bungalow',
        location: 'Dal Lake, Kashmir',
        grade: 'HOMESTAY',
        rent: 'Rs 6,500 Per Night',
        description: 'The studio has a queen-size bed and an ensuite bathroom, along with a small but well-equipped kitchen that’s stocked with basic spices, should you wish to whip up a meal on your own. There are lots of local options close by where you can sample Kashmir’s many unique local breads. The studio is a short 2kms walk from Dal Lake.'
    },
    {
        id:5,
        imgsrc: "https://images.thrillophilia.com/image/upload/s--7Z2gHTUi--/c_fill,g_center,h_460,q_auto,w_768/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/135/481/original/1540466261_121505975.jpg.jpg",
        destTitle: 'Tungna Homestay ',
        location: 'Yangang, Sikkim',
        grade: 'HOMESTAY',
        rent: 'Rs 4,500 Per Night',
        description: 'Bring your loved ones to Tungna Homestay and enjoy a surreal escapade in natural surroundings. The homestay is known for its refreshing ambience where the family is engaged in activities like dairy farming and organic farming. While staying at Tungna Homestay, tourists can indulge in sightseeing a number of places in Sikkim.'
    },
    {
        id:6,
        imgsrc: "https://assets.cntraveller.in/photos/60ba1c15e1b212c19a817bd8/master/w_960,c_limit/Mottys-4--866x559.jpg",
        destTitle: 'Apnayt Villa',
        location: 'Alleppey, Kerala',
        grade: 'HOMESTAY',
        rent: 'Rs 7,000 Per Night',
        description: 'Located in Alleppey, Mottys is a boutique heritage homestay where you can soak in the stillness of the beautiful backwaters. It also includes a charming open-air bath and a garden view verandah, perfect for your morning filter coffee. If you like to get up close to the backwaters, the facility also offers canoeing.'
    }
]

const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <section className='main container section'>
            <div className='secTitle'>
                <h3 data-aos='fade-right' className='title'>
                    Tourists Spots
                </h3>
            </div>
            <div className='secContent grid'>
                {
                    Data.map(({id, imgsrc, destTitle, location, grade, timing, description})=>{
                        return(
                            <div key={id} data-aos='fade-up' className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgsrc} alt={destTitle} />
                                </div>
                                <div className='cardInfo'>
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className='fees flex'>
                                        <div className='grade'>
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className='price'>
                                            <h5>{timing}</h5>
                                        </div>
                                    </div>
                                        <div className='desc'>
                                            <p>{description}</p>
                                        </div>
                                        <button className='btn flex'>
                                            DETAILS <HiOutlineClipboardCheck className='icon' />
                                        </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='secTitle1'>
                <h3 data-aos='fade-right' className='title1'>
                Homestays
                </h3>
            </div>
            <div className='secContent grid'>
                {
                    Data2.map(({id, imgsrc, destTitle, location, grade, rent, description})=>{
                        return(
                            <div key={id} data-aos='fade-up' className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgsrc} alt={destTitle} />
                                </div>
                                <div className='cardInfo'>
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className='fees flex'>
                                        <div className='grade'>
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className='price'>
                                            <h5>{rent}</h5>
                                        </div>
                                    </div>
                                        <div className='desc'>
                                            <p>{description}</p>
                                        </div>
                                        <button className='btn flex'>
                                            DETAILS <HiOutlineClipboardCheck className='icon' />
                                        </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>

        
    )
}

export default Main;