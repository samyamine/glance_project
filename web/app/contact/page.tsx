import ContactForm from "@/components/custom/contactForm";

export default function ContactPage() {
    return(
        <div className={`w-full max-w-[700px] min-h-screen py-36 text-start flex flex-col items-center`}>
            <h1 className={`w-full font-bold text-4xl`}>
                Contact us
            </h1>

            <p className={`w-full my-10`}>
                We’re thrilled to see your interest in Glance, the future of personalized fashion discovery. As an early
                adopter, your feedback and ideas are incredibly valuable to us. Whether you have questions, suggestions,
                or just want to say hello, we’d love to hear from you!<br/><br/>
                Fill out the form below, and Samy will get back to you as soon as possible. Together, let’s shape
                the future of online shopping !
            </p>

            <div className={`w-full flex-grow`}>
                <ContactForm />
            </div>
        </div>
    );
}
