import { MdCall, MdLocationCity, MdOutlineSupportAgent, MdSell } from "react-icons/md";

export default function HomeContactSection() {
  return (
    <section className="py-12 bg-accent text-white" id="contact">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center">
          Perlu Bantuan? Hubungi Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:w-fit mx-auto px-4">
          <div className="border border-gray-300 h-48 md:w-72 rounded flex flex-col items-start p-4 hover:bg-white hover:text-black group transition">
            <div className="text-xl border border-gray-300 p-1 rounded">
              <MdOutlineSupportAgent/>
            </div>
            <div className="mt-auto h-fit flex flex-col items-start">
              <p className="font-semibold text-lg mb-0.5">Hubungi Team Support</p>
              <p className="text-gray-200 group-hover:text-gray-600 text-sm mb-2">Bila anda memiliki masalah teknis</p>

              <a href="mailto:sales@test.com" className="underline text-sm">
                support@test.com
              </a>
            </div>
          </div>

          <div className="border border-gray-300 h-48 md:w-72 max-w-full rounded flex flex-col items-start p-4 hover:bg-white hover:text-black group transition">
            <div className="text-xl border border-gray-300 p-1 rounded">
              <MdSell/>
            </div>
            <div className="mt-auto h-fit flex flex-col items-start text-start">
              <p className="font-semibold text-lg mb-0.5">Hubungi Team Sales</p>
              <p className="text-gray-200 group-hover:text-gray-600 text-sm mb-2">Bila ada pertanyaan terkait produk kami</p>

              <a href="mailto:sales@test.com" className="underline text-sm">
                sales@test.com
              </a>
            </div>
          </div>

          <div className="border border-gray-300 h-48 md:w-72 rounded flex flex-col items-start p-4 hover:bg-white hover:text-black group transition">
            <div className="text-xl border border-gray-300 p-1 rounded">
              <MdLocationCity/>
            </div>
            <div className="mt-auto h-fit flex flex-col items-start">
              <p className="font-semibold text-lg mb-0.5">Kunjungi Kami</p>
              <p className="text-gray-200 group-hover:text-gray-600 text-sm mb-2">Datangi kantor kami di Yogyakarta</p>

              <a href="mailto:sales@test.com" className="underline text-sm">
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="border border-gray-300 h-48 md:w-72 rounded flex flex-col items-start p-4 hover:bg-white hover:text-black group transition">
            <div className="text-xl border border-gray-300 p-1 rounded">
              <MdCall/>
            </div>
            <div className="mt-auto h-fit flex flex-col items-start">
              <p className="font-semibold text-lg mb-0.5">Telpon Kami</p>
              <p className="text-gray-200 group-hover:text-gray-600 text-sm mb-2">Hubungi kami melalui telepon</p>

              <a href="mailto:sales@test.com" className="underline text-sm">
                +62 81347133962
              </a>
            </div>
          </div>
        </div>
        {/* <img src={IllustrationNeedHelp} className="w-72 mx-auto mb-12"/> */}

      </div>
    </section>
  );
}
