import DocumentTitle from "react-document-title"

const Contact = () => {
    return (
        <DocumentTitle title='Contact' >
            <div className="main">
                <h1 className="header">Contact</h1>
                <div className="contact-content">
                    <p>To collaborate with AIM, general inquiries, accessibility inquiries/feedback/edit suggestions: Please contact An Nguyen at <a href="mailto:aimualberta@gmail.com">aimualberta@gmail.com</a>.</p>
                </div>
            </div>    
        </DocumentTitle>
        
    )
}

export default Contact