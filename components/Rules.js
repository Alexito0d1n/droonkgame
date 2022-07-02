import Image from "next/image";
function Rules({ children }) {
  return (
    <div className="rules-container">
        <Image
          height={800*0.4}
          width={800*0.4}
          layout="intrinsic"
          className={"piruleta"}
          src="/assets/piruletas.png"
          alt="Piruleta"
        />
    </div>
  );
}

export default Rules;
