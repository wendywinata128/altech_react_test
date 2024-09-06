import Support from "assets/img/undraw_need_help.svg";
import OnlineTransactions from "assets/img/undraw_online_transactions.svg";
import Online from "assets/img/undraw_online.svg";

export default function Hero() {
  return (
    <section className="container mx-auto mt-32" id="hero">
      <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-4xl md:text-5xl mb-8 leading-relaxed font-bold uppercase">
          <p>Tingkatkan Efisiensi Bisnis Anda</p>
          Dengan <span />
          <strong className="text-accent">ERP Terintegrasi</strong>
        </h1>
        <a href="#pricing" className="bg-accent text-white py-2.5 px-8 rounded mb-12">
          Lihat Harga Produk
        </a>

        <div className="flex flex-col lg:flex-row gap-8 mx-auto">
          <div className="border border-gray-300 rounded p-4 w-full lg:w-72 text-center flex flex-col items-center">
            <img
              src={Support}
              className="w-56 mb-2"
              alt="support illustration"
            />
            <p className="font-bold mb-1">Support 24/7</p>
            <p className="text-xs text-gray-500">
              Kami berkomitmen untuk menyediakan akses ke customer service
              selama satu hari penuh
            </p>
          </div>

          <div className="border border-gray-300 rounded p-4 w-full lg:w-72 text-center flex flex-col items-center">
            <img
              src={OnlineTransactions}
              className="w-56 mb-2"
              alt="security illustration"
            />
            <p className="font-bold mb-1">Keamanan Data</p>
            <p className="text-xs text-gray-500">
              Kami memastikan seluruh data tersimpan dalam keamanan dan enkripsi
              yang kuat
            </p>
          </div>

          <div className="border border-gray-300 rounded p-4 w-full lg:w-72 text-center flex flex-col items-cente">
            <img src={Online} className="w-56 mb-2" alt="Access illustration" />
            <p className="font-bold mb-1">Access Kapanpun</p>
            <p className="text-xs text-gray-500">
              Kami berkomitmen untuk menyediakan akses ke aplikasi dalam waktu
              kapanpun dan dimanapun
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
