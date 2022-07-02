import Link from "next/link";

function Button({ children, href, action, disabled }) {
  return (
    <div>
      {href ? (
        <Link href={href}>
          <button className="button" disabled={disabled}>
            {children}
          </button>
        </Link>
      ) : (
        <button className="button" onClick={action} disabled={disabled}>
          {children}
        </button>
      )}
    </div>
  );
}

export default Button;
