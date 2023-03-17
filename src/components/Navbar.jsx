import NavbarItem from "./NavbarItem";

export default function Navbar({ titleOne, setterOne,  paramOne, titleTwo, setterTwo, paramTwo}) {

    return (
        <div className="flex justify-center dark:bg-gray-600 bg-amber-200 lg:text-lg p-4">
            <NavbarItem title={titleOne} param={paramOne} setter={setterOne}/>
            <NavbarItem title={titleTwo} param={paramTwo} setter={setterTwo}/>
        </div>
    )
}
