import React from 'react';
import q from '../../assets/ques.json'
import Lottie from 'lottie-react'

function Accordionn() {
    return (
        <div>
            <h2 className='title'>Frequently Asked Any Questions</h2>
            <hr />
        <div className='flex items-center container mx-auto justify-between'>
        
            <div className='w-1/2 '>
            <div className="collapse collapse-plus bg-base-200 border-2 border-blue-900  mb-4">
                <input type="radio" name="my-accordion-3"  />
                <div className="collapse-title text-xl font-medium">
                Can I pursue a music career after attending a music school?
                </div>
                <div className="collapse-content">
                    <p>Yes, attending a music school can provide a solid foundation for pursuing a career in music. It equips students with essential skills, knowledge, and networking opportunities that can enhance their prospects in various music-related fields, including performance, teaching, composition, and production.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 border-2 border-blue-900 mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How much does it cost to attend a music school?
                </div>
                <div className="collapse-content">
                    <p>The cost of attending a music school varies depending on factors such as the school's reputation, location, program duration, and the level of instruction. It's advisable to research different schools and their tuition fees to find one that fits your budget.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 border-2 border-blue-900 mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Are music schools only for classical music training?
                </div>
                <div className="collapse-content">
                    <p>No, while some music schools specialize in classical music training, many also offer programs in other genres such as jazz, rock, pop, folk, and contemporary music. It's important to research and find a music school that aligns with your musical interests.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 border-2 border-blue-900 mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How long does it take to complete a music program at a music school?
                </div>
                <div className="collapse-content">
                    <p>The duration of a music program can vary depending on the level of study and the individual's goals. Programs can range from a few months to several years, depending on factors such as the intensity of study, the student's commitment, and the curriculum structure.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 border-2 border-blue-900 mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Are scholarships or financial aid available for music school students?
                </div>
                <div className="collapse-content">
                    <p>Many music schools offer scholarships, grants, or financial aid programs to assist students with their tuition fees. These opportunities can be merit-based, need-based, or specific to certain instruments or genres. It's recommended to inquire directly with the music schools about available financial assistance options.</p>
                </div>
            </div>
            </div>

            
      <div className='w-1/3 '>
          <Lottie animationData={q} loop={true} />
        </div>
        </div>
        </div>
    );
}
export default Accordionn;