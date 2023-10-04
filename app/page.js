'use client' // 👈 use it here

import { useState, useEffect } from 'react';
import { DynamicField } from './components/dynamic-field';

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
          name: 'name',
          placeholder: 'e.g. Stephen King',
          isMandatory: true,
        },
        {
          type: 'text',
          label: 'Email Address',
          name: 'email',
          placeholder: 'e.g. stephenking@lorem.ipsum',
          isMandatory: true,
        },
        {
          type: 'text',
          label: 'Phone Number',
          name: 'phoneNumber',
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
          name: 'plan',
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
          name: 'addOns',
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
  const [formData, setFormData] = useState({})

  useEffect(() => {
    initFormData();
  }, [])


  // Functions
  function initFormData() {
    const tempFormData = {};
    
    data.forEach((step) => {
      if (step.fields.length > 0) {
        step.fields.forEach((field) => {
          if (field.name) {
            tempFormData[field.name] = '';
          }
        })
      }
    })

    setFormData(tempFormData);
  }

  function handleOnClickNext() {
    if (step >= totalSteps - 1) {
      setStep(0);
      return;
    };

    setStep(step + 1)
  }

  function handleOnClickBack() {
    setStep(step - 1)
  }

  return (
    <main className="flex min-h-screen md:w-3/4 md:m-auto flex-col items-center justify-between md:justify-center p-4">
      <div className="md:h-[75vh] z-10 max-w-5xl w-full items-center md:items-start justify-around font-mono text-sm lg:flex">
        {/* Thumbnail Container */}
        <div className='flex md:flex-col justify-center gap-4 my-8 md:m-0'>
          {data.map((obj, index) => (
            <div key={`thumbnail ${index}`} className='flex items-center gap-4'>
              <div
                className={`w-8 h-8 border border-black rounded-full flex ${step === index && 'bg-black text-white'}`}
              >
                <p className='m-auto'>{index + 1}</p>
              </div>
              <div className='uppercase hidden md:block'>
                <p>step {index + 1}</p>
                <p className='font-bold'>{obj.thumbnail}</p>
              </div>
            </div>
          ))
          }
        </div>
        {/* Form Container */}
        <div className='flex flex-col gap-4 p-4 bg-white rounded-xl md:h-full md:w-1/2'>
            <h2 className='text-xl'>{data[step].title}</h2>
            <p>{data[step].description}</p>
            <div className='flex flex-col gap-4'>
              {data[step].fields.map((field, index) => (
                <DynamicField
                  key={index}
                  type={field.type}
                  label={field.label} 
                  placeholder={field.placeholder} 
                  isMandatory={field.isMandatory}
                  fieldData={field.options}
                />
              ))
              }
            </div>
            <div className='w-full fixed md:relative bottom-0 left-0 flex justify-between p-4 md:p-0 md:mt-auto'>
              {step > 0 && 
                <button 
                  onClick={handleOnClickBack}
                  className='p-4 border border-transparent rounded-lg cursor-pointer'
                >
                  Go Back
                </button>
              }
              <button 
                onClick={handleOnClickNext}
                className='p-4 border border-black rounded-lg cursor-pointer ml-auto'
              >
                {step === 3 ? 'Complete' : 'Next Step'}
              </button>
            </div>
        </div>
      </div>
    </main>
  )
}
