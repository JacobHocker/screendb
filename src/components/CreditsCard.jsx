import Link from "next/link";
import MaleEmpty from './maleEmptyProfile.png';
import NoGenderEmpty from './genderlessEmptyProfile.png';
import FemaleEmpty from './femaleEmptyProfile.webp';

export default function CreditsCard({ name, id, role, profilePath, gender}) {
    return (
        <div className="flex flex-col">
            <Link href={`/person/${id}`}>
                <div>
                    <img src={profilePath !== null ? `${process.env.NEXT_PUBLIC_PROFILE}${profilePath}` : gender === null ? NoGenderEmpty : gender === 1 ? FemaleEmpty : MaleEmpty }
                    alt={name}
                    className=""
                    />
                </div>
                <div className="">
                    <h1>{name}</h1>
                </div>
                <div>
                    {role}
                </div>
            </Link>
        </div>
    )
}
