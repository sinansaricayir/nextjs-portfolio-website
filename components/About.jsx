const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-4 text-gray-600">
            I am a full stack developer and I develop web applications and sites
            using many technologies such as HTML, CSS, JavaScript, Vue.js, Next.js,
            React.js, Node.js, MongoDB, Laravel, MySQLand PostgreSQL. I`ve been working
            with these technologies for a long time and I always try to improve
            myself, learn new technologies and follow best practices.
          </p>
          <p className="py-7 text-gray-600">
            I have extensive experience in front-end and back-end development. I
            create the look and user interfaces of websites and applications
            with HTML and CSS. I also make websites dynamic and interactive with
            JavaScript, React.js and Next.js. I also manage the back-end of
            websites with Node.js and Laravel. I am proficient in many database
            technologies such as MongoDB, MySQL and PostgreSQL in database management.
          </p>
          <p className="py-7 text-gray-600">
            The most important thing to me is understanding the needs of my
            customers and choosing the right technologies to best meet those
            needs. I always prioritize customer satisfaction and work to deliver
            projects on time.
          </p>
          <p className="py-7 text-gray-600">
            If you want to develop a web project or application, do not hesitate
            to contact me. Let`s bring your projects to life together.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-2xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="/assets/about.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
