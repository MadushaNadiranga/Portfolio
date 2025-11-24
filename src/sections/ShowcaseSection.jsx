import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    projects.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                },
            }
        );
    });

    if (sectionRef.current) {
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    }
}, []);

  return (
    <>
        <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT SIDE */}
                <div className="first-project-wrapper" ref={project1Ref}>
                   <div className="image-wrapper">
                    <img src="/images/pcb-projects.png" alt="project1" />
                    </div> 
                    <div className="text-content">
                        <h2>Deep Learning Based PCB Defect Detection System.</h2>
                        <p className="text-white-50 md:text-xl">
                            This system is an AI-powered automated inspection solution designed to detect PCB defects using deep learning and computer vision in manufacturing environments.
                        </p>
                    </div>

<br/>
                <div className="image-wrapper">
                    <img src="/images/MegaCityCab.png" alt="project1" />
                    </div> 
                    <div className="text-content">
                        <h2>Vehicle Reservation System</h2>
                        <p className="text-white-50 md:text-xl">
                            This Vehicle Reservation System is a web based application designed for Mega City Cab, a popular cab service in Colombo.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper-x "
                            style={{
                                background: " linear-gradient(180deg, #0D1117 0%, #0b0b0bff 100%)"}}>

                            <img src="/images/testopia.png" alt="project2" />
                        </div>
                        <div className="text-content">
                        <h2>Online Food Ordering App</h2><br/>
                        <p className="text-white-50 md:text-xl">
                            A user-friendly food ordering application that supports menu browsing, cart management, order scheduling, and live order tracking for a smooth digital dining experience.                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  ); 
};

export default ShowcaseSection;
