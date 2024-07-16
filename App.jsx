import './App.css'
import React from 'react';
function App() {
  return (
    <>
      <AllPriceCard />
    </>
  )
}
function AllPriceCard() {
  const free = {
    type: "FREE",
    price: {
      value: 0,
      style: "able"
    },
    storage: {
      value: 50,
      style: "able"
    },
    access: {
      value: "Single User",
      style: "able"
    },
    value1: {
      value: "Unlimited Public projects",
      style: "able",
    },
    value2: {
      value: "Community Access",
      style: "able"
    },
    value3: {
      value: "Unlimited Private Projects",
      style: "disable",
    },
    value4: {
      value: "Dedicated Phone Support",
      style: "disable"
    },
    value5: {
      value: "Free Subdomain",
      style: "disable",
    },
    value6: {
      value: "Monthly Status Reports",
      style: "disable"
    },
  };

  const plus = {
    type: "PLUS",
    price: {
      value: 49,
      style: "able"
    },
    storage: {
      value: 50,
      style: "able"
    },
    access: {
      value: "5 Users",
      style: "able"
    },
    value1: {
      value: "Unlimited Public projects",
      style: "able",
    },
    value2: {
      value: "Community Access",
      style: "able"
    },
    value3: {
      value: "Unlimited Private Projects",
      style: "able",
    },
    value4: {
      value: "Dedicated Phone Support",
      style: "able"
    },
    value5: {
      value: "Free Subdomain",
      style: "able",
    },
    value6: {
      value: "Monthly Status Reports",
      style: "disable"
    },
  }
  const pro = {
    type: "PRO",
    price: {
      value: 99,
      style: "able"
    },
    storage: {
      value: 100,
      style: "able"
    },
    access: {
      value: "Unlimited Users",
      style: "able"
    },
    value1: {
      value: "Unlimited Public projects",
      style: "able",
    },
    value2: {
      value: "Community Access",
      style: "able"
    },
    value3: {
      value: "Unlimited Private Projects",
      style: "able",
    },
    value4: {
      value: "Dedicated Phone Support",
      style: "able"
    },
    value5: {
      value: "Free Subdomain",
      style: "able",
    },
    value6: {
      value: "Monthly Status Reports",
      style: "able"
    },
  };
  return (
    <div className='all-cards'>
      <PriceCard model={free} />
      <PriceCard model={plus} />
      <PriceCard model={pro} />
    </div>
  );
}

export default App;
function PriceCard({ model }) {
  return (
    <div className='price-card'>
      <p className='type'>{model.type}</p>
      <p className="price"> ${model.price.value}/month</p>
      <div className='details'>
        <p className={model.access.style}> <span>{model.access.style == 'disable' ? '❌' : '✔'}</span>{model.access.value}</p>
        <p className={model.storage.style}><span>{model.storage.style == 'disable' ? '❌' : '✔'}</span>{model.storage.value}GB Storage</p>
        <p className={model.value1.style}> <span>{model.value1.style == 'disable' ? '❌' : '✔'}</span>{model.value1.value}</p>
        <p className={model.value2.style}> <span>{model.value2.style == 'disable' ? '❌' : '✔'}</span>{model.value2.value}</p>
        <p className={model.value3.style}> <span>{model.value3.style == 'disable' ? '❌' : '✔'}</span>{model.value3.value}</p>
        <p className={model.value4.style}> <span>{model.value4.style == 'disable' ? '❌' : '✔'}</span>{model.value4.value}</p>
        <p className={model.value5.style}> <span>{model.value5.style == 'disable' ? '❌' : '✔'}</span>{model.value5.value}</p>
        <p className={model.value6.style}> <span>{model.value6.style == 'disable' ? '❌' : '✔'}</span>{model.value6.value}</p>

      </div><button className='btn'>Buy</button>
    </div >
  );
}
