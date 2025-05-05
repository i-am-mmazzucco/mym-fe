'use client';

import styles from '@/styles/components/employees/SeeRoute.module.scss';
import React, { useEffect } from 'react';
import GoogleMaps, { MarkerProps, RouteProps } from '../googleMaps/GoogleMaps';

interface SeeRouteProps {
	setIsSeeRouteModalOpen: (isOpen: boolean) => void;
	markers: MarkerProps[];
	routes: RouteProps[];
}

export default function SeeRoute({ setIsSeeRouteModalOpen, markers, routes }: SeeRouteProps) {
	useEffect(() => {
	}, [markers, routes]);
	
  return (
		<div className={styles.seeRouteContainer}>
			<div className={styles.seeRouteBox}>
				<div className={styles.mapContainer}>
					<GoogleMaps
						styles={{ width: '100%', height: '100%', borderRadius: '.8rem' }}
						routes={routes}
						markers={markers}
					/>
				</div>
				<button className={styles.closeButton} onClick={() => setIsSeeRouteModalOpen(false)}>
					<p>X</p>
				</button>
			</div>
		</div>
  );
}