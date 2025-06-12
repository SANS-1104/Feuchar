import './HomeCSS.css'
import TeacherComponent from './TeacherComponent'

export default function Teachers(){
    const TeachercardData = [
            {
                imageSrc: '/images/person1.png',
                name: 'Sanjay Sehgal', 
                title: 'Numerologist', 
                // // xlink: '/',
                // linkedin:'/',
                globe: 'https://medium.com/@feuchar.tech/sanjay-sehgal-177c9a17a795'
            },
            {
                imageSrc: '/images/person2.jpg',
                name: 'Abhishek S', 
                title: 'Astrologer',
                // xlink: '/',
                // linkedin:'/',
                globe: 'https://medium.com/@feuchar.tech/abhishek-s-1ea2ffb6de8c'
            },{
                imageSrc: '/images/person3.jpg',
                name:'Arvind Kumar',  
                title: 'Numerologist', 
                // xlink: '/',
                // linkedin:'/',
                globe: 'https://www.linkedin.com/in/bgarvind/'
            },{
                imageSrc: '/images/person4.jpg',
                name: 'Sukhdev Chamoli', 
                title: 'Astrologer', 
                // xlink: '/',
                // linkedin:'/',
                globe: 'https://medium.com/@feuchar.tech/sukhdev-chamoli-514174818512'
            },

        ]
    return(
            <div className='Outer-Teacher out-max-wdh'>
                <div className='heading-teacher'>Our Astro-Guru</div>
                <div className='inner-teacher max-wdh'>
                    {TeachercardData.map((teacher, index) => (
                        <TeacherComponent
                            key={index}
                            imageSrc={teacher.imageSrc}
                            name={teacher.name}
                            title={teacher.title}
                            // xlink={teacher.xlink}
                            // linkedin={teacher.linkedin}
                            globe={teacher.globe}
                        />
                    ))}
                </div>
            </div>
    )
}