import * as React from 'react';
import dynamic from 'next/dynamic';
import { NextPage } from 'interfaces/next';




const Thejourney = dynamic(() => import('modules/homepage/thejourney'));


const Journey: NextPage = () => <Thejourney />;


export default Journey;


