import config from '../config/index.json';

const SimpleBanner = () => {
  const { banner } = config;

  return (
    <div className="bg-green-400 text-center">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <a
          href=""
          className="font-medium text-white after:absolute after:inset-0"
        >
          {banner.text}
        </a>
      </div>
    </div>
  );
};

export default SimpleBanner;
