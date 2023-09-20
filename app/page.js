'use client' // 👈 use it here

import { useState } from 'react';
import { TextField } from './components/text-field';

function Header({step}) {
  return <p>{`This is form ${step}`}</p>
}

export default function Home() {
  const totalSteps = 4
  const data = [
    {
      thumbnail: 'your info',
      title: 'Personal Info',
      description: 'please provide your name, email address and phone number.',
      fields: [
        {
          type: 'text',
          label: 'Name',
          placeholder: 'e.g. Stephen King',
          isMandatory: true,
        },
        {
          type: 'text',
          label: 'Email Address',
          placeholder: 'e.g. stephenking@lorem.ipsum',
          isMandatory: true,
        },
        {
          type: 'text',
          label: 'Phone Number',
          placeholder: 'e.g. 0112345678',
          isMandatory: true,
        }
      ]
    },
    {
      thumbnail: 'select plan',
      title: 'Select Your Plan',
      description: 'You have the option of monthly or yearly billing.',
      fields: [
        {
          type: 'planSelection',
          isMandatory: true,
          options: {
            monthly: [
              {
                label: 'Arcade',
                price: 'RM9/mo'
              },
              {
                label: 'Advance',
                price: 'RM12/mo'
              },
              {
                label: 'Pro',
                price: 'RM15/mo'
              }
            ],
            yearly: [
              {
                label: 'Arcade',
                price: 'RM90/mo',
                note:'2 months free'
              },
              {
                label: 'Advance',
                price: 'RM120/mo',
                note:'2 months free'
              },
              {
                label: 'Pro',
                price: 'RM150/mo',
                note:'2 months free'
              }
            ]
          }
        },
      ]
    },
    {
      thumbnail: 'add-ons',
      title: 'Pick Add-ons',
      description: 'Add-ons help enhance your gaming experience.',
      fields: [
        {
          type: 'checkbox',
          isMandatory: true,
          options: [
            {
              label: 'Online Service',
              price: '+RM10/yr',
              description:'Access to multiplayer games'
            },
            {
              label: 'Larger Storage',
              price: '+RM20/yr',
              description:'Access to multiplayer games'
            },
            {
              label: 'Customizable Profile',
              price: '+RM20/yr',
              description:'Access to multiplayer games'
            }
          ]
        }
      ]
    },
    {
      thumbnail: 'summary',
      title: 'Finishing Up',
      description: 'Double check if evrerything looks OK before confirming.',
      fields: [
        {
          type: 'summary'
        }
      ]
    }
  ]

  // State
  const [step, setStep] = useState(0);

  function handleOnClick() {
    if (step >= totalSteps - 1) {
      setStep(0);
      return;
    };

    setStep(step + 1)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-around font-mono text-sm lg:flex">
        <div>
          <Header step={step} />
        </div>
        <div>
            <h2>{data[step].title}</h2>
            <p>{data[step].description}</p>
            <div>
              {data[step].fields.map((field, index) => (
                <TextField
                  key={index}
                  label={field.label} 
                  placeholder={field.placeholder} 
                  isMandatory={field.isMandatory} 
                />
              ))
              }
            </div>
            <button onClick={handleOnClick}>{step === 3 ? 'Complete' : 'Next Step'}</button>
        </div>
      </div>
    </main>
  )
}
