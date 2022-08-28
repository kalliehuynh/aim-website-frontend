import './About.css'
import DocumentTitle from 'react-document-title'

const About = () => {
    return (
        <DocumentTitle title='Accessibility and Inclusivity in Medicine Club'>
            <div className="main">
                <h1 className='header' tabIndex={0}>About Us</h1>
                <div className="about-desc">
                    <p>
                        Located on Treaty 6 Territory, the <strong>Accessibility and Inclusivity in Medicine (AIM) Club</strong> is a student initiative started in 2021-2022 by <b>Surina Grover</b> and <b>Vienna Bucholz</b> at the University of Alberta’s Faculty of Medicine and Dentistry. 
                    </p>
                    <p>
                        We are medical students who are passionate about learning from disability communities and educating medical students in order to better serve our future patients identifying with disability, Deaf communities, Neurodivergence, and beyond. 
                    </p>
                </div>
                <h1 className='header' tabIndex={0}>Purpose</h1>
                <div className="about-desc">
                    <p>
                        The purpose of the AIM Club is to <strong>increase medical students’ awareness, empathy, and knowledge for those who experience disability, are neurodiverse, are Deaf, and more</strong>. 
                    </p>
                    <p>
                    We do this through club events where we bring in disability knowledge holders and host workshops, we also work on curriculum with UME staff to increase disability representation, and we will be sitting on the 2022-2023 year’s Social Accountability Council (SAC) with the MD Program at the University of Alberta. 
                    </p>
                </div>
                <h1 className='header' tabIndex={0}>Initiatives</h1>
                <div className="about-desc">
                    <p>
                        This club is focused on clinical skill development, in order to <strong>address the lack of curricular emphasis on those experiencing disability, are Deaf, or are neurodiverse</strong>. 
                    </p>
                    <p>
                        In the past we have hosted lunch talks with those from the aforementioned communities, and speaker panels that include interdisciplinary health care professionals, educators, patients, and families. We have also written a curriculum for the Foundations block at the University of Alberta undergraduate medical school (story of the week and Discovery Learning). 
                    </p>
                </div>
                <div className="advocacy-curriculum" tabIndex={0}>
                    <div className="advocacy-curriculum-box">
                        <h2 className='header'>Advocacy</h2>
                        <p>We are advocating for:</p>
                        <ul className="advocacy-list">
                            <li className="advocacy-list-item">A more accessible medical school application and medical school education</li>
                            <li className="advocacy-list-item">An accessibility policy within MSA and FoMD club/initiative events</li>
                        </ul>
                    </div>
                    <div className="advocacy-curriculum-box">
                        <h2 className='header'>Curriculum</h2>
                        <p>We are working to increase disability-affirming curriculum in the pre-clerkship medical education. </p>
                    </div>
                </div>
            </div>
        </DocumentTitle>
        
    )
}

export default About