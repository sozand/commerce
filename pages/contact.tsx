import commerce from '@lib/api/commerce'

import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import hero_pic from '../public//photo-1520333789090-1afc82db536a.jpeg'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Contact() {
  return (
    <>
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Collaborate
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>support@example.com</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 123-4567</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Press
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>support@example.com</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 123-4567</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Join our team
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>support@example.com</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 123-4567</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Say hello
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>support@example.com</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 123-4567</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Locations
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Los Angeles
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>4556 Brendan Ferry</p>
                    <p className="mt-1">Los Angeles, CA 90210</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    New York
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>886 Walter Streets</p>
                    <p className="mt-1">New York, NY 12345</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Toronto
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>7363 Cynthia Pass</p>
                    <p className="mt-1">Toronto, ON N3Y 4H8</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Chicago
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>726 Mavis Island</p>
                    <p className="mt-1">Chicago, IL 60601</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Contact.Layout = Layout
