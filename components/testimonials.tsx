import Image from 'next/image'

import TestimonialImage01 from '@/public/images/akpinar.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Hakkımızda</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">2003 yılında taşımacılık sektörüne girdiğimizde, 10 yıllık faaliyet planı ile işimize dört elle sarılarak, sektörün ve Istanbul gibi avrupa metropolünün trafikteki sıkıntılarına rağmen güvenli ve kaliteli hizmet anlayışı ile 200 araçlık filoya ulaşmanın gururunu taşımaktayız. Amacımız, firmaların ve ailelerimizin bize emanet ettiği personel ve öğrencilerimizin, güvenli ve sağlıklı bir şekilde evlerinde iş yerlerine veya okullarına gidiş-dönüşlerini sağlamaktır. "Taşımacılık, ciddi kurumların işidir" olgusu ile işe başlyarak, önümüzdeki nesillere kadar bu ciddiyeti devretmenin onur ile bu güne kadar bize güvenen, aile ve firma sahiplerine teşekkürü bir borç bilirim.</blockquote>
                                                                  
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Yük. Müh. Vural AKPINAR</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
            
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Şirketimizin Misyonu: Tüm çalışanlarımızla beraber, yakalamış olduğumuz kalite ve üstün hizmet anlaışı ile müşterilerimizin beklentilerini yüksek düzeyde karşılayarak, sektörde yenilikleri takip edilen olmaktır.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Misyon</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Şirket Vizyonumuz: Uluslararası platformlarda yer alarak sektöre öncülük etmek ve değişimlerin uygulayıcısı olmaktır.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Vizyon</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
