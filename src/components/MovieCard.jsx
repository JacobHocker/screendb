

export default function MovieCard({props}) {
    return (
        <div className="flex flex-col justify-center p-6 bg-transparent  border-2 border-rose-300 dark:border-rose-600 rounded"> 
            <div className="flex justify-center">
                <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.poster_path}`} alt={props.title} className="w-8" />
            </div>
            <div className="">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}
