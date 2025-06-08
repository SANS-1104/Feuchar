import TeacherComponent from '../Home/TeacherComponent'
import './about.css'

export default function Team(){
    const TeachercardData = [
            {
                imageSrc: '/images/person1.png',
                name: 'Sanjay Sehgal', 
                title: 'Numerologist', 
                xlink: '/',
                linkedin:'/',
                globe: 'https://medium.com/@feuchar.tech/sanjay-sehgal-177c9a17a795'
            },
            {
                imageSrc: '/images/person2.png',
                name: 'Abhishek S', 
                title: 'Astrologer',
                xlink: '/',
                linkedin:'/',
                globe: 'https://medium.com/@feuchar.tech/abhishek-s-1ea2ffb6de8c'
            },{
                imageSrc: '/images/person3.jpg',
                name:'Arvind Kumar',  
                title: 'Numerologist', 
                xlink: '/',
                linkedin:'/',
                globe: 'https://www.linkedin.com/in/bgarvind/'
            },{
                imageSrc: '/images/person4.jpg',
                name: 'Sukhdev Chamoli', 
                title: 'Astrologer', 
                xlink: '/',
                linkedin:'/',
                globe: 'https://medium.com/@feuchar.tech/sukhdev-chamoli-514174818512'
            },

        ]
    return(
        <div className="SubjectsOuterWrapper">
            <div className='SubjectsInnerWrapper'>
                <div className='subHeadingSection'>
                    <div className='t1'>Meet our team</div>
                    <div className='t2'>
                        <div className='a'>Our philosophy is simple — hire a team of diverse, passionate people and</div>
                        <div className='b'>&nbsp;foster a culture that empowers you to do you best work</div>
                    </div>
                </div>
                <div className='cardSection'>
                    {TeachercardData.map((teacher, index) => (
                        <TeacherComponent
                            key={index}
                            imageSrc={teacher.imageSrc}
                            name={teacher.name}
                            title={teacher.title}
                            xlink={teacher.xlink}
                            linkedin={teacher.linkedin}
                            globe={teacher.globe}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}