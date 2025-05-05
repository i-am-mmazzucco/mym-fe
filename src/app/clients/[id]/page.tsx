'use client'

import React, { useEffect } from "react";
import { IClient } from "@/interfaces/clients.interface";
import styles from '@/styles/pages/clients/Client.module.scss';
import ClientOrders from "@/components/clients/ClientOrders";
import { IOrder } from "@/interfaces/orders.interface";
import { useRouter } from "next/navigation";

const ClientDetailPage = (props: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
	const [client, setClient] = React.useState<IClient | null>(null);
  const [orders, setOrders] = React.useState<IOrder[]>([]);
	const params = React.use(props.params);
  
	useEffect(() => {
		(async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/clients/${params.id}`);
			const client = await response.json();
			setClient(client);

			const responseOrders = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/orders?clientId=${params.id}`);
			const orders = await responseOrders.json();
			setOrders(orders);
		})();
	}, [params.id]);

  return (
    <div className={styles.clientContainer}>
      <div className={styles.breadcrumb}>
          <p onClick={() => router.push('/')}>Inicio</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
            </svg>
          </div>
          <p onClick={() => router.push('/clients')}>Clientes</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
            </svg>
          </div>
          <p>{client?.name} {client?.lastName}</p>
      </div>
      <div className={styles.clientInfo}>
        <div className={styles.clientInfoHeader}>
          <h1>{client?.name} {client?.lastName}</h1>
        </div>
        <div className={styles.clientInfoBody}>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#212121"/>
              <path d="M12 3.75C10.2814 3.75209 8.6339 4.4357 7.41871 5.65088C6.20353 6.86607 5.51992 8.51361 5.51783 10.2321C5.5158 11.6366 5.97461 13.0029 6.82386 14.1214C6.82386 14.1214 7.00065 14.3539 7.02905 14.3876L12 20.25L16.973 14.3851C16.9991 14.3537 17.1761 14.1212 17.1761 14.1212L17.177 14.1198C18.0257 13.0016 18.4842 11.6359 18.4821 10.2321C18.48 8.51361 17.7964 6.86607 16.5812 5.65088C15.366 4.4357 13.7185 3.75209 12 3.75ZM12 12.5893C11.5338 12.5893 11.078 12.451 10.6904 12.192C10.3028 11.933 10.0007 11.5649 9.82226 11.1342C9.64385 10.7035 9.59717 10.2295 9.68812 9.77229C9.77907 9.31505 10.0036 8.89504 10.3332 8.56539C10.6629 8.23574 11.0829 8.01124 11.5401 7.92029C11.9974 7.82934 12.4713 7.87602 12.902 8.05443C13.3327 8.23283 13.7009 8.53495 13.9599 8.92259C14.2189 9.31021 14.3571 9.76594 14.3571 10.2321C14.3564 10.8571 14.1078 11.4562 13.6659 11.8981C13.2241 12.34 12.6249 12.5886 12 12.5893Z" fill="#F6F6F3"/>
            </svg>
            <p>Dirección:</p>
            <p>{client?.address}</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="20" viewBox="0 0 2 20" fill="none">
              <path d="M1 0.5V19.5" stroke="#A8A7A5"/>
            </svg>
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#212121"/>
                <g clip-path="url(#clip0_290_989)">
                  <path d="M14.1651 14.74L15.2851 13.62C15.4359 13.471 15.6268 13.3691 15.8345 13.3265C16.0422 13.2839 16.2577 13.3025 16.4551 13.38L17.8201 13.925C18.0195 14.006 18.1905 14.1441 18.3115 14.3221C18.4325 14.5 18.4981 14.7098 18.5001 14.925V17.425C18.4989 17.5714 18.4681 17.7161 18.4096 17.8502C18.3511 17.9844 18.266 18.1054 18.1595 18.2058C18.053 18.3062 17.9272 18.3841 17.7899 18.4346C17.6525 18.4852 17.5063 18.5074 17.3601 18.5C7.79507 17.905 5.86507 9.80502 5.50007 6.70502C5.48312 6.55279 5.4986 6.39869 5.54549 6.25288C5.59238 6.10706 5.66961 5.97282 5.7721 5.85899C5.87459 5.74516 6.00003 5.65432 6.14015 5.59245C6.28027 5.53058 6.4319 5.49908 6.58507 5.50002H9.00007C9.21557 5.50066 9.42596 5.56575 9.60416 5.68694C9.78237 5.80812 9.92025 5.97984 10.0001 6.18002L10.5451 7.54502C10.6252 7.74155 10.6456 7.95734 10.6038 8.16543C10.562 8.37351 10.4599 8.56467 10.3101 8.71502L9.19007 9.83502C9.19007 9.83502 9.83507 14.2 14.1651 14.74Z" fill="#F6F6F3"/>
                </g>
                <defs>
                  <clipPath id="clip0_290_989">
                    <rect width="16" height="16" fill="white" transform="translate(4 4)"/>
                  </clipPath>
                </defs>
            </svg>
            <p>Teléfono:</p>
            <p>{client?.phone}</p>
          </div>
        </div>
      </div>
      <ClientOrders orders={orders} />
    </div>
  );
};

export default ClientDetailPage;
