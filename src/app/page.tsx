
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Information from "@/components/Information";
import Service from "@/components/Service";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Works from "@/components/Works";

import bannerHome from "@/data/banner/bannerHome";
import informationHome from "@/data/information/informationHome";
import { altHome } from "@/data/metadata/metaHome";
import serviceHome from "@/data/service/serviceHome";
import servicesHome from "@/data/services/servicesHome";
import sliderHome from "@/data/slider/sliderHome";
import whyHome from "@/data/why/whyHome";
import worksHome from "@/data/works/worksHome";


export default function Home() {
  return (
    <>
      <Carousel data={sliderHome} page="home" max_w_title="lg" />
      <section className="bg-white pb-24">
        <Service data={serviceHome} />
      </section>
      <section id="cdi-las-acacias" className="bg-white">
        <Information data={informationHome} page="home" alt={altHome} />
      </section>
      <section id="servicios" className="bg-white pt-24 pb-12">
        <Services data={servicesHome} page="home" alt={altHome} />
      </section>
      <section className="bg-white pt-12 pb-24">
        <Works data={worksHome} />
      </section>
      <section className="bg-sky-50">
        <Why data={whyHome} />
      </section>
      <section id="contacto" className="bg-sky-50 sm:pt-12">
        <Banner data={bannerHome} alt={altHome} />
      </section>
    </>
  );
}
