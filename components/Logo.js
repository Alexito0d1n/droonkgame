import Image from "next/image";
function Logo({ children }) {
    return (
        <div className="logo">
            <Image
                height={261*0.4}
                width={575*0.4}
                layout="intrinsic"
                className={"logo"}
                src="/assets/logo.png"
                alt="Logo"
            />
        </div>
    );
}

export default Logo;