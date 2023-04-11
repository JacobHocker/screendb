
import HomeCard from "./MovieCard";

export default function SearchResults({ props }) {
    return (
        <div className="mt-8 grid grid-cols-1 2xsm:grid-cols-2 xsm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {props && props.map((prop) => (
                <HomeCard key={prop.id} props={prop} />
            ))}
        </div>
    );
}