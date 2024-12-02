'use client';

import Image from 'next/image';
import Link from 'next/link';
import app from '../assets/images/smartphone.png';
import backup from '../assets/images/backup.png';
import browserHistory from '../assets/images/time-management.png';
import calender from '../assets/images/google-calendar.png';
import convo from '../assets/images/conversation.png';
import fb from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import logo from '../assets/images/logo_.png';
import map from '../assets/images/map.png';
import message from '../assets/images/comment.png';
import mobileImage from '../assets/images/mobile.png';
import pic from '../assets/images/picture.png';
import process from '../assets/images/process.png';
import realtimealert from '../assets/images/alert.png';
import signup from '../assets/images/signup.png';
import snapchat from '../assets/images/snapchat.png';
import tiktok from '../assets/images/tiktok.png';
import track from '../assets/images/data.png';
import twitter from '../assets/images/twitter.png';
import { useState } from 'react';
import video from '../assets/images/multimedia.png';
import whatsapp from '../assets/images/whatsapp.png';
import youtube from '../assets/images/youtube.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow  sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 flex items-center">
          <Image src={logo} alt="logo" width={50} height={50} />
          <Link href="/" className="ml-2 text-gray-800 ">
            Mobile Tracker
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            href="#features"
            className="text-gray-700 md:text-black hover:text-blue-600  transition duration-300"
          >
            Features
          </Link>
          <Link
            href="#installation"
            className="text-gray-700 md:text-black hover:text-blue-600  transition duration-300"
          >
            Installation
          </Link>
          <Link
            href="#social"
            className="text-gray-700 md::text-black hover:text-blue-600  transition duration-300"
          >
            Social Media
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 md:text-black hover:text-blue-600  transition duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-800 md:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 flex flex-col justify-around bg-white">
          <Link
            href="#features"
            className="text-[black] hover:text-blue-800 transition duration-300 px-4 py-2"
          >
            Features
          </Link>
          <Link
            href="#installation"
            className="text-[black] hover:text-blue-800 transition duration-300 px-4 py-2"
          >
            Installation
          </Link>
          <Link
            href="#social"
            className="text-[black] hover:text-blue-800 transition duration-300 px-4 py-2"
          >
            Social Media
          </Link>
          <Link
            href="#contact"
            className="text-[black] hover:text-blue-800 transition duration-300 px-4 py-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="banner bg-white dark:bg-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8 max-w-7xl">
        <div className="left md:w-1/2">
          <h1 className=" text-4xl font-bold text-blue-600 dark:text-white flex items-center mb-4">
            {/* <Image src={logo} alt="phone" width={20} height={20} /> */}
            KidSafe360
          </h1>
          <span className="roleasod-tag text-gray-600 dark:text-gray-300">
            No.1 Choice in <span className="user-country">India</span>*
          </span>
          <p className="sub-title text-lg text-gray-700 dark:text-gray-300 mt-2">
            {/* Best Cell Phone Tracker and{' '}
            <span className="font-semibold">Parental Control App</span> to Keep
            an Eye on Loved Ones. */}
            Best mobile tracker and parental control app to monitor and keep an
            eye on your loved ones. With free mobile tracker features, ensure
            the safety of your kids or partners by tracking their device
            activities remotely.
          </p>
          <ul className="desc-list mt-4 space-y-2">
            <li className="text-gray-600 dark:text-gray-300">
              100% safe and free of cost.
            </li>
            <li className="text-gray-600 dark:text-gray-300">
              Support all Android devices and versions.
            </li>
            <li className="text-gray-600 dark:text-gray-300">
              No need to jailbreak or root the targeted devices.
            </li>
          </ul>
          <div className="btn-group mt-6 flex space-x-4">
            <Link
              href="/kidsguard-pro-pricing/?position=kgp_banner"
              className="base-btn bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300"
            >
              Login
            </Link>
            <Link
              href="https://demo.clevguard.com?site=www.clevguard.com&amp;language=en"
              className="base-btn bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              View Demo
            </Link>
          </div>
          {/* <div className="download-btn mt-6 space-x-4">
            <div className="btn-linked-external inline-block">
              <Link
                className="linked-to-appstore"
                href="https://apps.apple.com/us/app/kidsguard-pro-phone-monitoring/id6449023572?l=en-us"
                target="_blank"
              >
                <img
                  src="/path-to-your-app-store-icon.png"
                  alt="App Store"
                  className="h-10"
                />
             </Link>
              <p className="text-center">iPhone/iPad</p>
            </div>
            <div className="btn-linked-external inline-block">
              <Link
                className="linked-to-googleplay"
                href="https://play.google.com/store/apps/details?id=com.clevguard.kidsguardpro.parent&amp;referrer=utm_source%3Dclevguard.com%26utm_medium%3Dproduct%26utm_campaign%3Dproduct_page"
                target="_blank"
              >
                <img
                  src="/path-to-your-google-play-icon.png"
                  alt="Google Play"
                  className="h-10"
                />
             </Link>
              <p className="text-center">Android</p>
            </div>
          </div> */}
          {/* <div className="product-video mt-6">
            <Link
              href="https://www.youtube.com/embed/zt8CkI_74B0"
              className="base-link-video text-blue-600 flex items-center"
            >
              <span>Know KidsGuard Pro in a film</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="ml-2"
              >
                <path d="M7 4.5v7l5-3.5-5-3.5z" fill="currentColor" />
              </svg>
           </Link>
          </div> */}
        </div>
        <div className="right md:w-1/2 mt-8 md:mt-0">
          <div className="picture">
            <picture>
              {/* <source type="image/webp" srcSet={bg_image} /> */}
              {/* <img
                src="https://images.clevguard.com/en/assets/overview/kidsguard/kidguard_pro_right_bg.png"
                alt="banner_pic"
                className="w-full h-auto"
              /> */}

              {/* <Image src={bg_image} alt="banner_pic" width={500} height={500} /> */}
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section
      className="tracking-android  dark:bg-gray-800 py-16"
      id="trackingAndroid"
    >
      <div className="base-maxwidth mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">
          Monitor All Phone Files At Any Time
        </h2>
        <p className="plate-desc text-gray-600 dark:text-gray-300 mt-4 text-center">
          Remotely view contacts, call logs, photos, and more with our free
          mobile tracker to monitor detailed activities on the targeted device.
          Easily export the data as needed. This way, you can keep your kids or
          partners safe and stay informed with our mobile tracker free features.
        </p>
        <p className="plate-desc text-gray-600 dark:text-gray-300 mt-2 text-center">
          Note: Some of the features listed below are available for Android
          devices only.
        </p>
        <ul className="icon-list-box grid grid-cols-1 md:grid-cols-4 gap-12 my-12">
          {features.map((feature, index) => (
            <div className="cutting-item" key={index}>
              <div className="cutting-title flex items-center gap-2">
                {/* <Image src={feature.img} alt="cutting_icon" /> */}
                <Image
                  src={feature.img}
                  alt="cutting_icon"
                  width={50}
                  height={50}
                />
                <p className="text-[20px] font-semibold">{feature?.title}</p>
              </div>
              <p className="cutting-desc  text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </ul>
        <div className="btn-link mt-8 flex justify-center space-x-4">
          <Link
            href="https://account.clevguard.com"
            className="base-btn base-btn-border-orange px-6 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
          >
            Try It Free
          </Link>
          <Link
            href="#"
            className="base-btn base-btn-border-blue px-6 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            View Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

const InstallationSteps = () => {
  return (
    <section className="py-10 px-4 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">
          Installation Steps
        </h2>
        <p className="mb-8 text-gray-600 dark:text-white ">
          Follow these simple steps to get started with tracking.
        </p>
        <div className=" flex flex-col gap-8 md:gap-0 md:flex-row w-full ">
          <div className="flex  flex-col md:w-1/3 items-center justify-center">
            <Image
              className="mb-1"
              src={signup}
              alt="phone"
              width={50}
              height={50}
            />
            <div className="text-left">
              <h3 className="font-semibold mb-1 text-[20px] text-center">
                1. Creating an Account
              </h3>
              <p className="text-center mb-2 text-gray-700 dark:text-white ">
                Create an account by simply entering your e-mail address and
                password.
              </p>
            </div>
            <button
              // onClick={handleSignUp}
              className="bg-blue-500 mt-2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Create Free Account
            </button>
          </div>
          <div className="flex  flex-col md:w-1/3 items-center justify-center ">
            <Image
              className="mb-1"
              src={process}
              alt="phone"
              width={50}
              height={50}
            />
            <div className="">
              <h3 className="font-semibold mb-1 text-[20px] text-center">
                2. Installation and Configuration
              </h3>
              <p className="text-center mb-2 text-gray-700 dark:text-white ">
                Download and install the application by following the
                explanation video.
              </p>
            </div>
            <button
              // onClick={handleSignUp}
              className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Video Guide
            </button>
          </div>
          <div className="flex  flex-col md:w-1/3 items-center justify-center">
            <Image
              className="mb-1"
              src={track}
              alt="phone"
              width={50}
              height={50}
            />
            <div className="text-left">
              <h3 className="font-semibold mb-1 text-[20px] text-center">
                3. Phone Tracking
              </h3>
              <p className="text-center mb-2 text-gray-700 dark:text-white ">
                Log in to the Kidsafe and start tracking the phone call history,
                message,browser history etc.
              </p>
            </div>
            <button
              // onClick={handleSignUp}
              className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// const features = [
//   {
//     title: 'Contacts',
//     img: mobileImage,
//     alt: 'contacts',
//     desc: 'Access contacts, call logs, photos, and more remotely to stay informed about device activities and export data as needed.',
//   },
//   {
//     title: 'Call Logs',
//     img: convo,
//     alt: 'call logs',
//     desc: 'Track calls and texts with timestamps and contact details. Review call recordings and text content for safety.',
//   },
//   {
//     title: 'Messages',
//     img: message,
//     alt: 'messages',
//     desc: 'View messages and contacts remotely to monitor device activities and export data easily.',
//   },
//   {
//     title: 'Photos',
//     img: pic,
//     alt: 'photos',
//     desc: 'Remotely access photos and other media to stay updated on device content and export it securely.',
//   },
//   {
//     title: 'Media Gallery',
//     img: video,
//     alt: 'media gallery',
//     desc: 'Browse device media remotely, including photos and videos, for added insight and security.',
//   },
//   {
//     title: 'Calendar',
//     img: calender,
//     alt: 'calendar',
//     desc: 'Monitor calendar events remotely for scheduling insights and to stay informed of upcoming activities.',
//   },
//   {
//     title: 'Location Tracking',
//     img: map,
//     alt: 'location tracking',
//     desc: 'Track real-time GPS location and set geofence alerts for added peace of mind.',
//   },
//   {
//     title: 'Real-time Alerts',
//     img: realtimealert,
//     alt: 'real-time alerts',
//     desc: 'Receive instant location alerts, including geofence entry or exit notifications.',
//   },
//   {
//     title: 'Browser History',
//     img: browserHistory,
//     alt: 'browser history',
//     desc: 'Protect with web filtering by blocking inappropriate content and ensuring safer browsing.',
//   },
//   {
//     title: 'App Monitoring',
//     img: app,
//     alt: 'app monitoring',
//     desc: 'Monitor installed apps and usage patterns to identify potential risks and ensure safe app usage.',
//   },
//   {
//     title: 'Secure Backup',
//     img: backup,
//     alt: 'secure backup',
//     desc: 'Back up essential data to the cloud securely, preserving memories and important content.',
//   },
// ];

const features = [
  {
    title: 'Contacts',
    img: mobileImage,
    alt: 'contacts',
    desc: 'Access contacts, call logs, photos, and more with our free mobile tracker. Stay informed about device activities and export data remotely as needed.',
  },
  {
    title: 'Call Logs',
    img: convo,
    alt: 'call logs',
    desc: 'Track calls and texts with timestamps and contact details using Mobile Tracker Free. Review call recordings and text content for security and safety.',
  },
  {
    title: 'Messages',
    img: message,
    alt: 'messages',
    desc: 'Monitor messages and contacts with our free phone tracker to keep an eye on device activities and easily export data.',
  },
  {
    title: 'Photos',
    img: pic,
    alt: 'photos',
    desc: 'Remotely access photos and media with Mobile Tracker Free to stay updated on device content and export it securely.',
  },
  {
    title: 'Media Gallery',
    img: video,
    alt: 'media gallery',
    desc: 'Browse device media, including photos and videos, remotely with our mobile tracker. Get added insight into device usage and security.',
  },
  {
    title: 'Calendar',
    img: calender,
    alt: 'calendar',
    desc: 'Monitor calendar events remotely using this free mobile tracker to stay informed of scheduling and upcoming activities.',
  },
  {
    title: 'Location Tracking',
    img: map,
    alt: 'location tracking',
    desc: 'Track real-time GPS location and set geofence alerts with Mobile Tracker Free, offering peace of mind and enhanced safety.',
  },
  {
    title: 'Real-time Alerts',
    img: realtimealert,
    alt: 'real-time alerts',
    desc: 'Receive instant location alerts, including geofence notifications, with Mobile Tracker Free for timely updates on device location.',
  },
  {
    title: 'Browser History',
    img: browserHistory,
    alt: 'browser history',
    desc: 'Protect users with web filtering, blocking inappropriate content for safer browsing through our mobile tracker free features.',
  },
  {
    title: 'App Monitoring',
    img: app,
    alt: 'app monitoring',
    desc: 'Monitor installed apps and usage patterns with Mobile Tracker Free to ensure safe and appropriate app usage on the device.',
  },
  {
    title: 'Secure Backup',
    img: backup,
    alt: 'secure backup',
    desc: 'Back up essential data securely to the cloud, preserving memories and important content using Mobile Tracker Free login features.',
  },
];

const socialMedia = [
  {
    name: 'Facebook',
    icon: '📘',
    img: fb,
  },
  {
    name: 'Instagram',
    icon: '📸',
    img: instagram,
  },
  {
    name: 'WhatsApp',
    icon: '💬',
    img: whatsapp,
  },
  {
    name: 'Twitter',
    icon: '🐦',
    img: twitter,
  },
  {
    name: 'Snapchat',
    icon: '👻',
    img: snapchat,
  },
  {
    name: 'TikTok',
    icon: '🎵',
    img: tiktok,
  },
  {
    name: 'YouTube',
    icon: '🎥',
    img: youtube,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] dark:bg-gray-800 py-10 text-left ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <!-- About Section --> */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="">
              We provide advanced monitoring solutions to keep your loved ones
              safe and informed in real-time.
            </p>
          </div>

          {/* <!-- Quick Links Section --> */}
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link href="/features" className=" hover:text-[#007bff]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className=" hover:text-[#007bff]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className=" hover:text-[#007bff]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-[#007bff]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Support Section --> */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="text-left">
              <li>
                <Link href="/help" className=" hover:text-[#007bff]">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className=" hover:text-[#007bff]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className=" hover:text-[#007bff]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className=" hover:text-[#007bff]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Contact & Social Section --> */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className=" mb-4">Email: support@example.com</p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className=" hover:text-[#007bff]"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                href="https://twitter.com"
                className=" hover:text-[#007bff]"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href="https://linkedin.com"
                className=" hover:text-[#007bff]"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                href="https://instagram.com"
                className=" hover:text-[#007bff]"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- Copyright Section --> */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
// const faqData = [
//   {
//     question:
//       'Do I need to root or jailbreak the target device before using KidsGuard Pro?',
//     answer:
//       'KidsGuard Pro contains four programs: KidsGuard Pro for Android, KidsGuard Pro for iOS, KidsGuard Pro for iOS RT, and KidsGuard Pro for iCloud. Only KidsGuard Pro for iOS RT needs to work with a jailbroken device.',
//   },
//   {
//     question: 'Can I install KidsGuard Pro remotely?',
//     answer:
//       'No. You will still need to access the target device for approximately 5 minutes to install the monitoring app.',
//   },
//   {
//     question:
//       'Will the target know I am tracking and monitoring their cell phone usage?',
//     answer:
//       'No. The app works in the background and will not alert anyone to its existence.',
//   },
//   {
//     question: 'How many devices can I monitor at the same time?',
//     answer:
//       'With one KidsGuard Pro plan purchased, you can only monitor one device, Android or iPhone or iCloud. The target device can be switched free within the valid period.',
//   },
//   {
//     question: "How do I know if KidsGuard Pro works on my child's device?",
//     answer:
//       'iOS: KidsGuard Pro is compatible with iOS 9.0-16.0. Android: KidsGuard Pro is compatible with Android updates 7.0 to 13 on major brands like Samsung, Google, Huawei, LG, Xiaomi, and OnePlus.',
//   },
// ];

const faqData = [
  {
    question:
      'Do I need to root or jailbreak the target device before using Mobile Tracker Free?',
    answer:
      'No, with our **mobile tracker free** service, there’s no need to root or jailbreak the target device. The app works seamlessly on Android and iOS devices without any such requirements.',
  },
  {
    question: 'Can I install **mobile tracker** remotely?',
    answer:
      'No. You will still need to access the target device for approximately 5 minutes to install the **free mobile tracker** app and start monitoring.',
  },
  {
    question:
      'Will the target know I am using **mobile tracker free** to monitor their phone?',
    answer:
      'No. The **mobile tracker** app runs discreetly in the background, without alerting anyone to its existence or activity on the device.',
  },
  {
    question:
      'How many devices can I monitor with **mobile tracker free login**?',
    answer:
      'With one **mobile tracker free** plan, you can monitor one device at a time, whether it’s an Android or iPhone. You can switch the target device **free** within the valid period.',
  },
  {
    question:
      "How do I know if **mobile tracker free** works on my child's device?",
    answer:
      'iOS: **Mobile tracker free** is compatible with iOS 9.0-16.0. Android: It works on Android versions 7.0 to 13, supporting major brands like Samsung, Google, Huawei, LG, Xiaomi, and OnePlus.',
  },
];

const hotTopics = [
  {
    title: "[2024 Full Guide] How to Check Boyfriend's Text Messages for Free",
    link: 'https://www.clevguard.com/monitor/check-boyfriends-text-messages-for-free/',
  },
  {
    title: '[Top Ways] How to Spy on iPhone Without Apple ID and Password',
    link: 'https://www.clevguard.com/spy/how-to-spy-on-iphone-without-apple-id-and-password/',
  },
  {
    title: "[2024 Updated] How to See Everything on My Child's Phone",
    link: 'https://www.clevguard.com/monitor/see-everything-on-childs-phone/',
  },
  {
    title: '[4 Ways] How to See Someones Activity on Instagram',
    link: 'https://www.clevguard.com/monitor/how-to-see-someones-activity-on-instagram/',
  },
  {
    title:
      "[2024 Latest] How to Remotely Listen to Another Phone's Surroundings Free",
    link: 'https://www.clevguard.com/monitor/listen-to-phone-surrounding-live/',
  },
  {
    title:
      "[2024 News] How to View Someone's Incognito History on Android and iPhone",
    link: 'https://www.clevguard.com/track/incognito-search-history/',
  },
  {
    title:
      'How to Track My Girlfriend’s Android/iPhone without Her Knowing for Free',
    link: 'https://www.clevguard.com/track/track-my-girlfriends-phone-without-her-knowing-for-free/',
  },
  {
    title: "How to Read My Girlfriend's WhatsApp Messages Without Her Knowing",
    link: 'https://www.clevguard.com/spy/how-to-read-my-girlfriends-whatsapp-messages-without-her-knowing/',
  },
  {
    title: 'How to Get Call History of Any Number on Android & iPhone',
    link: 'https://www.clevguard.com/monitor/how-to-view-someone-elses-whatsapp-call-history/',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="product-faq py-10 dark:bg-gray-800 dark:text-white  ">
      <div className="base-maxwidth mx-auto flex flex-col lg:flex-row base-maxwidth  px-4 max-w-7xl">
        {/* FAQ List */}
        <div className="faq-left w-full lg:w-2/3 ">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
            FAQs
          </h2>
          <ul className="faq-list space-y-4">
            {faqData.map((item, index) => (
              <li key={index} className="border-b border-gray-300 pb-4">
                <p
                  className="faq-question flex justify-between items-center text-lg font-medium text-gray-700 dark:text-white cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`faq-slide w-5 h-5 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 01.707 1.707L6.414 11H15a1 1 0 110 2H6.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6A1 1 0 0110 5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
                {openIndex === index && (
                  <p className="faq-answer mt-2 text-gray-600 dark:text-white">
                    {item.answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/product-faq/?index=1"
            className="base-btn mt-4 inline-block text-blue-600 border border-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors"
            target="_blank"
          >
            More FAQs
          </Link>
        </div>

        {/* Hot Topics */}
        <div className="faq-topic w-full lg:w-1/3 lg:p-4 mt-8 lg:mt-0">
          <p className="faq-title text-xl font-semibold text-gray-800 mb-4">
            Hot Topics:
          </p>
          <ul className="space-y-2">
            {hotTopics.map((topic, index) => (
              <li key={index} className="topic-link">
                <Link
                  href={topic.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {topic.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Track Your Mobile Devices</h1>
        <p className="text-lg">
          The easiest way to keep track of your mobile devices.
        </p>
        <Link
          href="#features"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200 mt-4 inline-block"
        >
          Get Started
        </Link>
      </header>

      <InstallationSteps />

      {/* Social Media Section */}
      <section className="py-10 px-4 dark:bg-gray-800 dark:text-white  ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">
            Social Media Trackers
          </h2>
          <p className="mb-6 text-gray-600 dark:text-white">
            Monitor social app activities of people you love, from chat history
            to calls.
          </p>
          <div className="">
            <div className="flex justify-center">
              {socialMedia.map((social, index) => (
                <div
                  key={index}
                  className=" rounded-lg p-1 md:p-6 text-center  transition-transform transform hover:scale-105"
                >
                  <Image
                    src={social.img}
                    alt="social_icon"
                    width={50}
                    height={50}
                  />
                  {/* <h3 className="font-semibold text-xl">{social.name}</h3> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Installation Steps Section */}

      {/* Footer Section */}

      <Footer />
      {/* Disclaimer */}
      <section className=" w-full  text-[#999] bg-[#373737] text-center p-4 ">
        {/* <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2> */}
        <p className="mb-6 text-[14px] text-left max-w-7xl mx-auto  leading-snug">
          <span>Disclaimer</span> By using this software, you agree to adhere to
          all relevant laws in your country regarding its installation and use.
          The software should only be installed on devices you own or have
          proper consent to access. The device’s user must be informed that
          their data may be accessible. If you install this software on a device
          without ownership or explicit consent, you may be in violation of the
          law. Mobile Tracker Free disclaims any responsibility for unauthorized
          actions or misuse. By proceeding, you acknowledge that Mobile Tracker
          Free is not liable for damages resulting from improper usage
        </p>
        {/* <Link
          href="/signup" // Link to your sign-up page
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200"
        >
          Sign Up Now
       </Link> */}
      </section>
    </div>
  );
}
