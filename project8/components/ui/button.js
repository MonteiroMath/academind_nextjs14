import Link from "next/link";
import classes from "./button.module.css";

function Button({ onClick, link, children }) {
  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
