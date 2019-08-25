import React from "react";
import { Link } from "gatsby";

export default React.forwardRef((props, ref) => <Link ref={ref} {...props} />);
