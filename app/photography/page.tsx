'use client'

import { genPageMetadata } from 'app/seo'
import Link from 'next/link';
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";


export default function Photography() {
  const photos = [
  {
    original: "static/images/photography/12_predragtasevski1paroviweb_15092351143_o.jpg",
  },
  {
    original: "static/images/photography/b1-tpredrag_15526797160_o.jpg",
  },
  {
    original: "static/images/photography/b3-tpredrag_15091705774_o.jpg",
  },
  {
    original: "static/images/photography/b4-tpredrag_15525728959_o.jpg",
  },
  {
    original: "static/images/photography/bastille-day1_16741496687_o.jpg"
  },
  {
    original: "static/images/photography/demarble1_15709651241_o.png",
  },
  {
    original: "static/images/photography/germany1_15713221532_o.jpg",
  },
  {
    original: "static/images/photography/germany2_15526467367_o.jpg",
  },
  {
    original: "static/images/photography/germany3_15092217243_o.jpg",
  },
  {
    original: "static/images/photography/germany4_15092267393_o.jpg",
  },
  {
    original: "static/images/photography/germany5_15711592755_o.jpg",
  },
  {
    original: "static/images/photography/germany6_15711588575_o.jpg",
  },
  {
    original: "static/images/photography/germany7_15709673561_o.jpg",
  },
  {
    original: "static/images/photography/germany8_15687914366_o.jpg",
  },{
    original: "static/images/photography/gishe_15687834836_o.png",
  },
  {
    original: "static/images/photography/isola-france_16761378940_o.jpg",
  },
  {
    original: "static/images/photography/lefkada1_15711609885_o.jpg",
  },
  {
    original: "static/images/photography/meteori1_15526429527_o.jpg",
  },
  {
    original: "static/images/photography/meteori3_15525742099_o.jpg",
  },
  {
    original: "static/images/photography/milena_15091621514_o.png",
  },
  {
    original: "static/images/photography/mongasque_16948856085_o.jpg",
  },
  {
    original: "static/images/photography/path_16922910286_o.jpg",
  },
  {
    original: "static/images/photography/predrag-tasevski---resting_15713214412_o.jpg",
  },
  {
    original: "static/images/photography/predrag-tasevski---step-up_15526475227_o.jpg",
  },
  {
    original: "static/images/photography/predrag-tasevski---two-generations_15526442517_o.jpg",
  },
  {
    original: "static/images/photography/predragtasevski-tour-de-france---st_malo-amour_15709656531_o.jpg",
  },
  {
    original: "static/images/photography/predragtasevski-tour-de-france---st_malo-chemin_15526358907_o.jpg",
  },
  {
    original: "static/images/photography/predragtasevski-tour-de-france---st_malo-la-nuit_15525695339_o.jpg",
  },
  {
    original: "static/images/photography/predragtasevski-tour-de-france---st_malo-seul_15711559345_o.jpg",
  },
  {
    original: "static/images/photography/predragtasevski-tour-de-france--bordeaux-miroir_15525693359_o.jpg",
  },
  {
    original: "static/images/photography/predragtasevski-tour-de-france--st-tropez-7_15091633224_o.jpg",
  },
  {
    original: "static/images/photography/predragtasevski-tour-de-france-005_15526136908_o.jpg",
  },
  {
    original: "static/images/photography/predragtasevski-tour-de-france-015_15091626564_o.jpg",
  },
  {
    original: "static/images/photography/profa_15526142568_o.png",
  },
  {
    original: "static/images/photography/rjeka1_15711598085_o.jpg",
  },
  {
    original: "static/images/photography/shkola_15526367387_o.png",
  },
  {
    original: "static/images/photography/stockholm1_16922915086_o.jpg",
  },
  {
    original: "static/images/photography/stockholm2_16947522212_o.jpg",
  },
  {
    original: "static/images/photography/tallin01_15709705351_o.jpg",
  },
];
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Photography
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Photographing by Predrag Tasevski is licensed under a <Link href="http://creativecommons.org/licenses/by-nc-nd/2.5/mk/" className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            Creative Commons Attribution-Noncommercial-No Derivative Works 2.5 Macedonia License</Link>. Based on a work at predragtasevski.com.
            <br />
            Permissions beyond the scope of this license or contact me at pece at predragtasevski.com
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap" id="static-thumbnails">
              <ImageGallery 
              items={photos}
              autoPlay={true}
              showFullscreenButton={false} />
          </div>
        </div>
      </div>
    </>
  )
}
