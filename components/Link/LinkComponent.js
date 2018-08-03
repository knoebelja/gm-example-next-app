import Link from "next/link";

const LinkComponent = ({ href, as, className, children, target }) => (
  <Link prefetch href={href} as={as}>
    <a className={className} target={target}>
      {children}
    </a>
  </Link>
);

export default LinkComponent;
