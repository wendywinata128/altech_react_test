import { FaCheck } from "react-icons/fa6";
import { tierData } from "../../utils/data";
import { formatCurrency } from "../../utils/global-function";

export default function HomePricingSection() {
  return (
    <section className="container mx-auto flex flex-col gap-10" id="pricing">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Pilih Paket Sesuai Kebutuhanmu!</h2>
        <p className="text-gray-500">
          Kami menyediakan beragam paket dengan fitur lengkap untuk dapat memfasilitasi bisnis anda dengan sempurna.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8 w-full mx-auto">
        {tierData.map((tier, idx) => {
          return (
            <div
              className="flex flex-col gap-4 border rounded-xl overflow-hidden shadow text-start p-6 w-full"
              key={idx}
            >
              <p className="text-white bg-accent w-fit py-1.5 px-4 rounded-full font-medium">
                {tier.name}
              </p>
              <div className="flex items-end gap-1 border-b border-b-gray-300 pb-4">
                <p className="text-3xl font-bold">
                  {formatCurrency(tier.price)}
                </p>
                <p className="text-gray-500 text-sm">/{tier.pricePer}</p>
              </div>
              <ul className="flex flex-col gap-2 pb-5 text-start">
                {tier.benefits.map((ben) => (
                  <li
                    key={ben}
                    className="flex gap-3 items-center font-semibold"
                  >
                    <FaCheck />
                    <p>{ben}</p>
                  </li>
                ))}
              </ul>

              <div className="border-t border-t-gray-300 pt-5 mt-auto ">
                <button className="text-base w-full border py-2 px-8 rounded-full border-accent text-accent font-semibold hover:bg-accent hover:text-white transition">
                  Coba Sekarang
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
