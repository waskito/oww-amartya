import * as React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "interfaces/next";

import Thenineimmortals from "modules/homepage/thenineimmortals";

const nineimmortals: NextPage = () => <Thenineimmortals />;

export default nineimmortals;
