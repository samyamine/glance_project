
export default function FeatureText({ title, description }: { title: string; description: string }) {
    return (
        // <div className={`md:relative md:top-1/2 md:-translate-y-1/2 max-md:text-center`}>
        <div className={`md:relative md:top-1/2 md:-translate-y-1/2`}>
            <h3 className={`mb-10 text-3xl font-bold text-center`}>
                {title}
            </h3>
            <p className={`text-lg`}>
                {description}
            </p>
        </div>
    );
}
