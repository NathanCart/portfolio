'use client';

import { library } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
import {
	faBars,
	faClose,
	faArrowRightLong,
	faArrowRight,
	faCalendar,
} from '@fortawesome/pro-regular-svg-icons';
import { faComputerMouse } from '@fortawesome/sharp-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHandBackPointRight } from '@fortawesome/pro-solid-svg-icons';

config.autoAddCss = false;

import '@fortawesome/fontawesome-svg-core/styles.css';
import { ReactNode } from 'react';
import Head from 'next/head';

library.add({
	faHandBackPointRight,
	faBars,
	faClose,
	faComputerMouse,
	faArrowRightLong,
	faArrowRight,
	faCalendar,
	faLinkedin,
});

export default function IconProvider({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
