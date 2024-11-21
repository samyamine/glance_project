
export default function FeatureText({ title, description }: { title: string; description: string }) {
    return (
        <div className={`relative top-1/2 -translate-y-1/2`}>
            <h3 className={`mb-10 text-3xl font-bold`}>
                {title}
            </h3>
            <p className={`text-lg`}>
                {description}
            </p>
        </div>
    );
}
