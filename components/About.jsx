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
            I specialize in creating mobile responsive interface applications
            and these applications connect with APIs and other backend
            technologies. I am a fast learner as I am passionate about learning
            new technologies and understand that there is more than one way to
            accomplish a task.
          </p>
          <p className="py-7 text-gray-600">
            While I am particularly skilled at building front-end applications
            using HTML, CSS, Javascript, and React, I can quickly learn new
            technology stacks when needed. I believe that being great as a
            developer is not using a particular language, but choosing the best
            tool.
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
