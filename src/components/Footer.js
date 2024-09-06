export default function Footer() {
  return (
    <footer className="bg-gray-800 py-10 text-white" id="footer">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-8">
        <div className="flex flex-col items-start">
          <p className="font-semibold text-2xl font-mono mb-1">Altech</p>
          <p className="text-gray-400 mb-6">
            123 Jalan damai sejahtera, Sleman, Daerah Istimewa Yogyakarta
          </p>
          <a href="tel:0218432324" className="underline text-gray-400 hover:text-white mb-0.5">
            (021) 84327234
          </a>
          <a
            href="mailto:customservice@altechtest.com"
            className="underline text-gray-400 hover:text-white"
          >
            customservice@altechtest.com
          </a>
        </div>

        <div className="md:ml-auto flex flex-col items-start gap-3 mr-8">
          <p className="text-xl">Company Links</p>
          <ul className="flex flex-col items-start text-gray-400 gap-2">
            <li>
              <a href="#test" className="hover:underline hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#test" className="hover:underline hover:text-white">
                Login
              </a>
            </li>
            <li>
              <a href="#test" className="hover:underline hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#test" className="hover:underline hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#test" className="hover:underline hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-3">
          <p className="text-xl">Social Media</p>
          <ul className="flex flex-col items-start text-gray-400 gap-2">
            <li>
              <a href="#test" className="hover:underline hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#test" className="hover:underline hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#test" className="hover:underline hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#test" className="hover:underline hover:text-white">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
