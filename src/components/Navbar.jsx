import NavbarItem from "./NavbarItem";

export default function Navbar({ titleOne, variable, setterOne,  paramOne, titleTwo, setterTwo, paramTwo}) {

    return (
        <div className="flex justify-center dark:bg-gray-600 bg-amber-200 lg:text-lg p-4">
            <NavbarItem variable={variable} title={titleOne} param={paramOne} setter={setterOne}/>
            <NavbarItem variable={variable} title={titleTwo} param={paramTwo} setter={setterTwo}/>
        </div>
    )
}
